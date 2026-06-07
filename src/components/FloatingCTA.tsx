import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Link
      to="/contact"
      aria-label="Book a discovery call"
      className={`fixed z-40 bottom-5 right-5 md:bottom-8 md:right-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-4 pr-5 py-3 text-sm font-medium shadow-[0_18px_40px_-12px_oklch(0.32_0.13_260/0.55)] ring-1 ring-primary/40 transition-all duration-500 hover:scale-[1.03] ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/15">
        <Calendar size={14} />
      </span>
      Book a discovery call
    </Link>
  );
}
