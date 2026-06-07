import blogAiAutomation from "@/assets/blog-ai-automation.jpg";
import blogChatbotColleague from "@/assets/blog-chatbot-colleague.jpg";
import blogSystemBrand from "@/assets/blog-system-brand.jpg";
import blogReplaceMeeting from "@/assets/blog-replace-meeting.jpg";
import blogSeoContent from "@/assets/blog-seo-content.jpg";
import blogRestraintDesign from "@/assets/blog-restraint-design.jpg";
import blogFourClients from "@/assets/blog-four-clients.jpg";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  id: string;
  cat: string;
  date: string;
  title: string;
  excerpt: string;
  readTime?: string;
  image: string;
  content: Block[];
};

export const posts: Post[] = [
  {
    id: "7-business-tasks-ai-can-fully-automate-in-2026",
    cat: "AI Automation",
    date: "May 2026",
    readTime: "9 min read",
    image: blogAiAutomation,
    title: "7 Business Tasks AI Can Fully Automate in 2026",
    excerpt:
      "From lead qualification to invoice follow-ups — the seven repetitive workflows smart businesses are handing off to AI this year.",
    content: [
      { type: "p", text: "Artificial intelligence is no longer a future concept reserved for large tech companies. In 2026, small and mid-sized businesses are using AI automation to save time, reduce operational costs, improve customer experience, and grow faster without constantly increasing team size." },
      { type: "p", text: "The biggest shift happening today is simple:" },
      { type: "quote", text: "Businesses are moving from manual operations to intelligent systems." },
      { type: "p", text: "From handling customer inquiries to qualifying leads and managing follow-ups, AI is transforming how modern businesses operate every day." },
      { type: "p", text: "If your business still depends heavily on repetitive manual tasks, you are likely losing time, money, and potential customers." },
      { type: "p", text: "Here are seven business tasks AI can fully automate in 2026 — and how smart businesses are already using them to scale." },

      { type: "h2", text: "1. Lead Qualification & Lead Routing" },
      { type: "p", text: "One of the most time-consuming tasks for businesses is filtering incoming leads. Many businesses waste hours manually replying to inquiries, checking customer intent, collecting information, and assigning leads to sales teams." },
      { type: "p", text: "AI automation can now handle this entire workflow instantly." },
      { type: "h3", text: "How It Works" },
      { type: "ul", items: ["Ask qualifying questions", "Understand customer intent", "Collect contact details", "Categorize leads", "Route leads automatically"] },
      { type: "p", text: "High-intent leads go directly to sales, support-related inquiries go to customer service, and low-quality leads are filtered automatically. Businesses respond faster and close more opportunities." },
      { type: "h3", text: "Business Impact" },
      { type: "ul", items: ["Faster response times", "Higher conversion rates", "Less manual admin work", "Better customer experience"] },

      { type: "h2", text: "2. Customer Support Automation" },
      { type: "p", text: "In 2026, businesses no longer need teams answering repetitive questions all day. AI support systems can handle FAQs, order updates, appointment inquiries, refund policies, onboarding guidance, and troubleshooting." },
      { type: "h3", text: "Modern AI Support Is Different" },
      { type: "p", text: "Older chatbots felt robotic. Modern AI assistants understand natural language and provide human-like responses across websites, WhatsApp, Instagram, Messenger, and email — 24/7 without delays." },
      { type: "h3", text: "Why Businesses Are Adopting It" },
      { type: "ul", items: ["Reduce support workload", "Improve response speed", "Increase customer satisfaction", "Lower operational costs"] },

      { type: "h2", text: "3. WhatsApp Replies & Follow-Ups" },
      { type: "p", text: "WhatsApp has become one of the most important business communication channels, especially for service businesses and local companies. Most businesses still reply manually — creating delayed responses, missed inquiries, and lost sales." },
      { type: "h3", text: "What AI WhatsApp Automation Can Do" },
      { type: "ul", items: ["Instant replies", "Lead capture", "Appointment confirmations", "Reminders", "Abandoned inquiry follow-ups", "Customer onboarding", "FAQ responses"] },
      { type: "p", text: "A customer sends a message at midnight asking for pricing. Instead of waiting until morning, the AI assistant responds instantly, collects details, shares pricing, and books a consultation automatically." },

      { type: "h2", text: "4. Appointment Booking & Scheduling" },
      { type: "p", text: "Scheduling meetings manually wastes valuable time. Businesses constantly deal with back-and-forth communication, calendar conflicts, missed appointments, and manual reminders." },
      { type: "h3", text: "AI Scheduling Workflows" },
      { type: "ul", items: ["Show available time slots", "Book appointments automatically", "Sync with calendars", "Send reminders", "Reschedule meetings", "Reduce no-shows"] },
      { type: "p", text: "Especially valuable for agencies, clinics, consultants, salons, and real estate businesses." },

      { type: "h2", text: "5. CRM Updates & Data Entry" },
      { type: "p", text: "Sales teams often spend hours updating customer records, logging conversations, tracking lead status, and organizing notes. AI can automate this entire process." },
      { type: "h3", text: "What AI Can Automatically Track" },
      { type: "ul", items: ["Record conversations", "Update lead stages", "Summarize meetings", "Create tasks", "Track customer interactions", "Organize contact data"] },

      { type: "h2", text: "6. Invoice Reminders & Payment Follow-Ups" },
      { type: "p", text: "Many businesses lose cash flow because invoices are not followed up consistently. Manual reminders are time-consuming, uncomfortable, and inconsistent." },
      { type: "h3", text: "Automated Financial Workflows" },
      { type: "ul", items: ["Send invoice reminders", "Follow up on overdue payments", "Notify customers before due dates", "Track payment status", "Escalate unpaid invoices"] },

      { type: "h2", text: "7. Internal Operations & Team Workflows" },
      { type: "p", text: "Businesses are automating task assignments, reporting, notifications, document generation, meeting summaries, and internal communication." },
      { type: "h3", text: "AI as an Operational Assistant" },
      { type: "ul", items: ["Summarize meetings automatically", "Create action items", "Notify team members", "Generate reports", "Organize project workflows"] },
      { type: "p", text: "Teams spend more time on strategy, creativity, growth, and customer relationships — and less on repetitive administration." },

      { type: "h2", text: "Why AI Automation Matters More Than Ever" },
      { type: "p", text: "Businesses are no longer competing only on products or pricing. They are competing on speed, responsiveness, efficiency, and customer experience." },
      { type: "ul", items: ["Operate faster", "Reduce workload", "Improve consistency", "Create better customer experiences", "Scale without massive operational overhead"] },
      { type: "p", text: "The businesses growing fastest in 2026 are not necessarily hiring the most people. They are building the smartest systems." },

      { type: "h2", text: "Final Thoughts" },
      { type: "p", text: "AI automation is not about replacing humans completely. It is about removing repetitive operational friction so businesses can focus on growth, creativity, strategy, and customer relationships." },
      { type: "p", text: "From WhatsApp automation to AI-driven lead qualification and operational workflows, businesses now have access to systems that were previously available only to large enterprises." },
      { type: "quote", text: "The question is no longer ‘Should businesses use AI?’ — it is ‘How long can businesses afford not to?’" },
    ],
  },
  {
    id: "when-a-chatbot-becomes-a-colleague",
    cat: "AI",
    date: "May 2026",
    readTime: "7 min read",
    image: blogChatbotColleague,
    title: "When a chatbot becomes a colleague.",
    excerpt: "How the best AI agents disappear into the workflow — and why that's the design goal.",
    content: [
      { type: "p", text: "The best AI agents we build don't feel like chatbots. They feel like a quiet colleague who already knows the context, already has access to the right systems, and just gets things done in the background." },
      { type: "quote", text: "The goal isn't an AI you talk to. It's an AI you stop noticing." },
      { type: "h2", text: "From novelty to infrastructure" },
      { type: "p", text: "Most businesses bolt a chatbot onto a website, watch it answer three FAQs, and call it a day. That's the novelty layer. The infrastructure layer is different — it lives inside the operations: the CRM, the inbox, the scheduling system, the order pipeline." },
      { type: "h2", text: "What good AI colleagues do" },
      { type: "ul", items: ["Pick up context from past conversations and CRM data", "Hand off to a human at the exact right moment", "Write back to the systems of record automatically", "Stay quiet when they have nothing useful to add"] },
      { type: "h2", text: "How to design for invisibility" },
      { type: "p", text: "Strip the personality. Drop the cute name. Stop forcing the user to know they're talking to AI. Focus on outcomes: did the lead get qualified, did the appointment get booked, did the customer get an answer in under thirty seconds?" },
      { type: "h3", text: "Three questions we ask before building any agent" },
      { type: "ul", items: ["What specific job is this agent hired to do?", "Which systems does it need read and write access to?", "What's the escalation path when it doesn't know?"] },
      { type: "p", text: "If you can't answer all three in one sentence each, you don't have an agent yet — you have a demo." },
      { type: "h2", text: "The compounding effect" },
      { type: "p", text: "A single well-designed AI workflow saves a few hours a week. Five of them, wired into the same operations, change the shape of the company. That's when the chatbot stops being a feature and starts being a colleague." },
    ],
  },
  {
    id: "the-website-is-not-the-brand",
    cat: "Strategy",
    date: "Apr 2026",
    readTime: "6 min read",
    image: blogSystemBrand,
    title: "The website is not the brand. The system is.",
    excerpt: "Why we stopped designing pages and started designing operating systems for companies.",
    content: [
      { type: "p", text: "For years, agencies sold websites as if the website was the product. The deliverable was a Figma file, a CMS, and a launch announcement. Then the client went back to running their business with the same broken pipes underneath." },
      { type: "quote", text: "A beautiful homepage doesn't fix a broken intake form. A new font doesn't shorten a forty-eight-hour reply time." },
      { type: "h2", text: "The brand lives in the system" },
      { type: "p", text: "What people actually experience of your brand is the whole loop: the ad, the landing page, the form, the auto-reply, the follow-up email, the booking link, the invoice, the onboarding doc. Every one of those is a brand surface." },
      { type: "h2", text: "Designing the operating system" },
      { type: "ul", items: ["Map every touchpoint from first click to fifth invoice", "Treat the CRM, inbox, and scheduler as part of the brand experience", "Automate the boring parts so the human parts get more attention", "Measure speed-to-reply as a brand metric"] },
      { type: "h2", text: "What changes when you think this way" },
      { type: "p", text: "You stop arguing about hero images and start arguing about response times. You stop redesigning the about page and start redesigning the lead pipeline. The website becomes one node in a much larger graph — and the graph is the brand." },
      { type: "h2", text: "How to start" },
      { type: "p", text: "Open a doc. List every system a customer touches between discovering you and paying you for the third time. That list — not your style guide — is your real brand book." },
    ],
  },
  {
    id: "replace-the-meeting-not-the-human",
    cat: "Automation",
    date: "Apr 2026",
    readTime: "5 min read",
    image: blogReplaceMeeting,
    title: "Replace the meeting, not the human.",
    excerpt: "A short field guide to deciding which workflows deserve automation — and which don't.",
    content: [
      { type: "p", text: "The fastest way to ruin a good team with automation is to point it at the wrong things. Automate the wrong workflow and you don't save time — you just hide the problem behind a Zapier flow." },
      { type: "h2", text: "Two questions before you automate anything" },
      { type: "ul", items: ["Is this work repetitive enough that a human is bored doing it?", "Is the outcome the same every time, or does it require judgment?"] },
      { type: "p", text: "If the answer to both is yes-and-yes, automate. If the second one is no, leave it alone." },
      { type: "quote", text: "Automate the meeting. Keep the conversation." },
      { type: "h2", text: "Good candidates" },
      { type: "ul", items: ["Status updates pulled from the CRM", "Appointment reminders", "Invoice nudges", "Lead routing and tagging", "Onboarding email sequences"] },
      { type: "h2", text: "Bad candidates" },
      { type: "ul", items: ["Initial discovery calls", "Negotiation", "Performance feedback", "Anything where empathy is the deliverable"] },
      { type: "h2", text: "The principle" },
      { type: "p", text: "Replace the recurring sync that everyone dreads. Replace the weekly report nobody reads. Replace the manual data entry between two SaaS tools. Don't replace the person who actually owns the relationship." },
    ],
  },
  {
    id: "compounding-content-in-fewer-hours",
    cat: "SEO",
    date: "Mar 2026",
    readTime: "8 min read",
    image: blogSeoContent,
    title: "Compounding content, in fewer hours.",
    excerpt: "Programmatic SEO without the spam: a model for sustainable, defensible organic growth.",
    content: [
      { type: "p", text: "Programmatic SEO got a bad reputation because most of it was thin, templated junk shipped at scale. That doesn't mean the underlying idea is wrong. It means most people executed it lazily." },
      { type: "h2", text: "The compounding model" },
      { type: "p", text: "Pick a category your customers already search inside. Build one excellent template page. Feed it real, structured, non-trivial data. Ship many — but only when each one is genuinely useful to a human reading it." },
      { type: "h2", text: "What makes a programmatic page actually work" },
      { type: "ul", items: ["Unique data per page (not just a swapped keyword)", "Real internal linking to deeper resources", "Original commentary or analysis on top of the data", "Genuine answer to the searcher's intent"] },
      { type: "quote", text: "If you wouldn't read it, Google won't either." },
      { type: "h2", text: "A simple workflow" },
      { type: "ul", items: ["Source clean structured data", "Design one template with strong information density", "Use AI to draft, humans to edit, editors to approve", "Publish in batches, monitor by cohort"] },
      { type: "h2", text: "Why this still works in 2026" },
      { type: "p", text: "Search is more competitive, but the bar for shallow content keeps rising. Pages that combine real data with real judgment compound — they earn links, they get cited by AI answers, and they keep working for years with light maintenance." },
    ],
  },
  {
    id: "restraint-as-a-competitive-advantage",
    cat: "Design",
    date: "Mar 2026",
    readTime: "5 min read",
    image: blogRestraintDesign,
    title: "Restraint as a competitive advantage.",
    excerpt: "The case for editorial typography, generous whitespace and saying less, online.",
    content: [
      { type: "p", text: "Every site is shouting. Pop-ups, parallax, gradient walls, sticky banners, animated CTAs that arrive before the user has read the first sentence. The result is a flat market where everything feels the same — loud." },
      { type: "quote", text: "Whitespace is what tells the visitor you have nothing to hide." },
      { type: "h2", text: "What restraint actually communicates" },
      { type: "ul", items: ["Confidence in the offer", "Respect for the visitor's attention", "Editorial seriousness", "Premium positioning without saying the word premium"] },
      { type: "h2", text: "How to apply it" },
      { type: "p", text: "Pick one typeface that can carry the whole site. Use it like a magazine would — restrained at body, expressive at display. Let sections breathe. Cut every word that doesn't earn its place. Replace stock photography with one strong piece of art or none at all." },
      { type: "h2", text: "The business case" },
      { type: "p", text: "Restrained sites convert better in the segments that matter most: considered purchases, B2B services, premium products. Cheap looks fight on price. Restrained looks fight on trust." },
    ],
  },
  {
    id: "why-we-dont-take-more-than-four-clients",
    cat: "Studio",
    date: "Feb 2026",
    readTime: "4 min read",
    image: blogFourClients,
    title: "Why we don't take more than four clients at a time.",
    excerpt: "On attention, craft and what it means to actually be a partner.",
    content: [
      { type: "p", text: "Most agencies grow by adding clients. We grew by removing them. Four active engagements at a time. No exceptions, no overflow, no junior team picking up the slack." },
      { type: "h2", text: "Why four" },
      { type: "p", text: "Four is the number that lets us know every client's product, pipeline, and team well enough to give real opinions. Beyond four, we become a vendor. Below four, we're not paying rent." },
      { type: "quote", text: "Attention is the only resource we can't manufacture." },
      { type: "h2", text: "What the cap forces us to do" },
      { type: "ul", items: ["Say no to projects that don't fit", "Build systems instead of one-off deliverables", "Make the work last so we're not constantly re-pitching", "Be honest when something we built can be retired"] },
      { type: "h2", text: "What clients get" },
      { type: "p", text: "Direct access to the people doing the work. Decisions in hours, not weeks. A studio that remembers their customers' names. A partner who treats their business like a long game — because we only get to play four of them at a time." },
    ],
  },
];

export function getPost(id: string): Post | undefined {
  return posts.find((p) => p.id === id);
}
