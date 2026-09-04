// Single source of truth for copy + data. Edit words here, not in components.

export const SUBSCRIBE_URL = "https://directedanalysis.substack.com/subscribe";

export const wordmark = "DIRECTED ANALYSIS";

export const hero = {
  line1: "We used to direct the tools.",
  line2: "Now we direct the analysis.",
  about:
    "Building the chart got easy. The analysis is where the value went. Tool-agnostic notes for the analyst in the AI shift.",
};

// segments: [thinkLeft %, assembly %, thinkRight %]
export const plotStates = {
  old: {
    segments: [
      { kind: "think", pct: 8, label: "Thinking" },
      { kind: "assemble", pct: 84, label: "Assembly" },
      { kind: "think", pct: 8, label: "Thinking" },
    ],
    needle: 50,
    caption: "A week spent building. We called it analysis. <b>It wasn't.</b>",
  },
  now: {
    segments: [
      { kind: "think", pct: 44, label: "Thinking" },
      { kind: "assemble", pct: 12, label: "Assembly" },
      { kind: "think", pct: 44, label: "Thinking" },
    ],
    needle: 78,
    caption: "The building is nearly free now. <b>The week is thinking.</b>",
  },
};

export const thesis = {
  label: "THE THESIS",
  text: "AI automated the assembly, not the analysis. The entire value of an analyst just moved into the thinking they were always told to rush past.",
};

export const beats = {
  heading: "The argument, in five beats",
  items: [
    "The old job was mostly assembly, and we mistook the assembly for the job.",
    "The machine got good at assembly. It is nearly free now.",
    "So the value did not vanish. It moved, back to the thinking.",
    "Directing requires understanding, so the skill bar rose. You cannot fake it anymore.",
    "So put your time and your learning into the analysis. It is the valuable part, and now you finally can.",
  ],
};

export const quotes = [
  { html: "Viz is the easy part. <b>Analysis is the valuable part.</b>" },
  { html: "The assembly is free. <b>The thinking is in full view.</b>" },
  { html: "You can't direct <b>what you don't understand.</b>", moat: true, wide: true },
  { html: "The thing you spend your time on is finally the thing that's actually valuable.", wide: true },
];

export const pillars = {
  heading: "What you'll read here",
  items: [
    "How I think through a project before I touch anything.",
    "How I decide what is worth building and what to throw out.",
    "How I work with the person who asked, so I answer the real question.",
    "How I direct a build. What I pay for, and what I refuse to.",
    "Where your time should go now that the assembly is cheap.",
    "Worked examples. Real analytics I have directed, with the reasoning left in.",
  ],
};

export const essay = {
  eyebrow: "THE INAUGURAL ESSAY",
  title: "The Valuable Part",
  sub: "The confession, the reframe, and the moat. Why the automation you were told to fear came for the assembly, not the thinking.",
  cta: "Read the essay",
  // Launch-blocked: essay is being rewritten in Eric's voice. Do not wire to
  // a live URL until that pass clears.
  href: null,
};

export const subscribe = {
  heading: "Subscribe",
  framing:
    "<b>Every essay stays free, in full, always.</b> Paid does not buy the writing. It buys support, the community, and my time.",
  tiers: [
    { name: "FREE", price: "$0", per: "", desc: "Every essay, in full, in your inbox. Always." },
    { name: "SUPPORTER", price: "$8", per: " / mo", desc: "Keeps it independent and ad-free. Full comments and the subscriber chat." },
    { name: "ANNUAL", price: "$80", per: " / yr", desc: "Everything in Supporter, plus one 30-minute strategy session with me each year." },
    { name: "FOUNDING ANALYST", price: "$200", per: " / yr", desc: "Everything, plus direct access and a standing invite to office hours. In your corner.", feature: true },
  ],
};

export const footer = {
  who: "Eric Summers",
  role: "Tableau Ambassador",
  tag: "We used to direct the tools. Now we direct the analysis.",
};
