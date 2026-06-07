#!/usr/bin/env node
/**
 * Pre-deploy validator for OG / Twitter meta tags + favicon & OG image assets.
 *
 * Usage:
 *   node scripts/validate-meta.mjs                          # checks https://faroium.com
 *   node scripts/validate-meta.mjs https://staging.foo.com  # checks a custom origin
 *   BASE_URL=https://faroium.com node scripts/validate-meta.mjs
 *
 * Exits with code 1 if any required check fails, so it can be wired into CI
 * or a pre-deploy step.
 */

const BASE = (process.argv[2] || process.env.BASE_URL || "https://faroium.com").replace(/\/$/, "");

// Routes to validate. Add new public routes here as they ship.
const ROUTES = ["/", "/about", "/services", "/portfolio", "/process", "/case-studies", "/blog", "/contact"];

// Required tags on every public page.
const REQUIRED_META = [
  { kind: "name", key: "description" },
  { kind: "name", key: "viewport" },
  { kind: "name", key: "twitter:card" },
  { kind: "name", key: "twitter:title" },
  { kind: "name", key: "twitter:description" },
  { kind: "name", key: "twitter:image" },
  { kind: "property", key: "og:title" },
  { kind: "property", key: "og:description" },
  { kind: "property", key: "og:type" },
  { kind: "property", key: "og:url" },
  { kind: "property", key: "og:image" },
  { kind: "property", key: "og:site_name" },
];

const REQUIRED_LINKS = [
  { rel: "canonical" },
  { rel: "icon" },
];

// Asset expectations.
const ASSETS = [
  {
    path: "/og-default.jpg",
    contentTypes: ["image/jpeg"],
    minBytes: 5 * 1024,         // > 5 KB (LinkedIn rejects tiny images)
    maxBytes: 5 * 1024 * 1024,  // < 5 MB (Facebook hard limit ≈ 8 MB, keep margin)
  },
  {
    path: "/favicon.png",
    contentTypes: ["image/png"],
    minBytes: 512,
    maxBytes: 1 * 1024 * 1024,
  },
];

const C = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
};

let failures = 0;
let warnings = 0;
const log = {
  ok: (m) => console.log(`  ${C.green("✓")} ${m}`),
  fail: (m) => { failures++; console.log(`  ${C.red("✗")} ${m}`); },
  warn: (m) => { warnings++; console.log(`  ${C.yellow("!")} ${m}`); },
  info: (m) => console.log(`  ${C.dim(m)}`),
  head: (m) => console.log(`\n${C.bold(m)}`),
};

// Tiny HTML head parser — good enough for static tag extraction. Avoids a deps install
// in CI/sandbox; we only need attributes of <meta>, <link>, <title>.
function parseHead(html) {
  const headMatch = html.match(/<head[\s\S]*?<\/head>/i);
  const head = headMatch ? headMatch[0] : html;
  const tagRe = /<(meta|link|title)\b([^>]*)>([\s\S]*?<\/title>)?/gi;
  const attrRe = /([a-zA-Z:-]+)\s*=\s*"([^"]*)"|([a-zA-Z:-]+)\s*=\s*'([^']*)'/g;
  const tags = [];
  let m;
  while ((m = tagRe.exec(head)) !== null) {
    const tag = m[1].toLowerCase();
    const attrs = {};
    let a;
    while ((a = attrRe.exec(m[2])) !== null) {
      const k = (a[1] || a[3]).toLowerCase();
      const v = a[2] ?? a[4] ?? "";
      attrs[k] = v;
    }
    let inner;
    if (tag === "title") {
      const t = m[0].match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      inner = t ? t[1].trim() : "";
    }
    tags.push({ tag, attrs, inner });
  }
  return tags;
}

function findMeta(tags, { kind, key }) {
  return tags.find((t) => t.tag === "meta" && (t.attrs[kind] || "").toLowerCase() === key.toLowerCase());
}
function findLink(tags, { rel }) {
  return tags.find((t) => t.tag === "link" && (t.attrs.rel || "").toLowerCase() === rel.toLowerCase());
}
function findTitle(tags) {
  const t = tags.find((x) => x.tag === "title");
  return t?.inner || "";
}

function isAbsoluteHttpsUrl(v) {
  try { return new URL(v).protocol === "https:"; } catch { return false; }
}

async function fetchText(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: { "user-agent": "faroium-meta-validator/1.0 (+pre-deploy check)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

async function fetchHead(url) {
  // HEAD first; fall back to a ranged GET if HEAD is blocked (some CDNs do).
  let res = await fetch(url, { method: "HEAD", redirect: "follow" });
  if (!res.ok || !res.headers.get("content-length")) {
    res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: { range: "bytes=0-0" },
    });
  }
  return res;
}

async function validateRoute(route) {
  const url = `${BASE}${route}`;
  log.head(`Route ${url}`);
  let html;
  try {
    html = await fetchText(url);
  } catch (e) {
    log.fail(`fetch failed: ${e.message}`);
    return;
  }
  const tags = parseHead(html);

  const title = findTitle(tags);
  if (!title) log.fail("missing <title>");
  else if (title.length < 10 || title.length > 70) log.warn(`<title> length ${title.length} (aim 30–60): "${title}"`);
  else log.ok(`<title> "${title}"`);

  for (const req of REQUIRED_META) {
    const tag = findMeta(tags, req);
    if (!tag) { log.fail(`missing meta ${req.kind}="${req.key}"`); continue; }
    const c = tag.attrs.content || "";
    if (!c.trim()) { log.fail(`empty content on ${req.kind}="${req.key}"`); continue; }

    if (req.key === "og:image" || req.key === "twitter:image") {
      if (!isAbsoluteHttpsUrl(c)) { log.fail(`${req.key} must be absolute https URL, got "${c}"`); continue; }
    }
    if (req.key === "og:url") {
      if (!isAbsoluteHttpsUrl(c)) log.fail(`og:url must be absolute https, got "${c}"`);
    }
    if (req.key === "description" && (c.length < 50 || c.length > 160)) {
      log.warn(`description length ${c.length} (aim 50–160)`);
    }
    log.ok(`${req.kind}="${req.key}" → ${c.length > 80 ? c.slice(0, 77) + "…" : c}`);
  }

  for (const req of REQUIRED_LINKS) {
    const tag = findLink(tags, req);
    if (!tag) { log.fail(`missing <link rel="${req.rel}">`); continue; }
    if (req.rel === "canonical") {
      const href = tag.attrs.href || "";
      if (!isAbsoluteHttpsUrl(href)) log.fail(`canonical must be absolute https, got "${href}"`);
      else log.ok(`canonical → ${href}`);
    } else {
      log.ok(`<link rel="${req.rel}"> present`);
    }
  }

  // JSON-LD presence (root only — sitewide Organization/WebSite lives there).
  if (route === "/") {
    const hasLd = /<script[^>]+type="application\/ld\+json"/i.test(html);
    hasLd ? log.ok("JSON-LD structured data present") : log.warn("no JSON-LD found on homepage");
  }
}

async function validateAsset(asset) {
  const url = `${BASE}${asset.path}`;
  log.head(`Asset ${url}`);
  let res;
  try { res = await fetchHead(url); }
  catch (e) { log.fail(`fetch failed: ${e.message}`); return; }

  if (!res.ok && res.status !== 206) { log.fail(`status ${res.status}`); return; }
  log.ok(`status ${res.status}`);

  const ct = (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
  if (!asset.contentTypes.includes(ct)) log.fail(`content-type "${ct}" not in [${asset.contentTypes.join(", ")}]`);
  else log.ok(`content-type ${ct}`);

  // content-length on HEAD, or content-range "bytes 0-0/<total>" on ranged GET.
  let size = Number(res.headers.get("content-length"));
  const cr = res.headers.get("content-range");
  if (cr) {
    const m = cr.match(/\/(\d+)$/);
    if (m) size = Number(m[1]);
  }
  if (!size || Number.isNaN(size)) {
    log.warn("could not determine size (no content-length / content-range)");
  } else if (size < asset.minBytes) {
    log.fail(`size ${size}B below min ${asset.minBytes}B`);
  } else if (size > asset.maxBytes) {
    log.fail(`size ${size}B above max ${asset.maxBytes}B`);
  } else {
    log.ok(`size ${(size / 1024).toFixed(1)} KB`);
  }

  const cc = res.headers.get("cache-control") || "";
  if (!cc) log.warn("no cache-control header (social scrapers may not cache)");
  else log.info(`cache-control: ${cc}`);
}

async function main() {
  console.log(C.bold(`\nMeta validator → ${BASE}\n`));
  for (const r of ROUTES) await validateRoute(r);
  for (const a of ASSETS) await validateAsset(a);

  console.log();
  if (failures === 0 && warnings === 0) console.log(C.green(C.bold("✓ All checks passed — safe to deploy.")));
  else if (failures === 0) console.log(C.yellow(C.bold(`✓ ${warnings} warning(s), 0 failures — deploy OK.`)));
  else {
    console.log(C.red(C.bold(`✗ ${failures} failure(s), ${warnings} warning(s) — fix before deploying.`)));
    process.exit(1);
  }
}

main().catch((e) => { console.error(C.red(`\nFATAL: ${e.message}`)); process.exit(2); });
