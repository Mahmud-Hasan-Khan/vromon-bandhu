/**
 * Shared spacing for home page section cards (offers, airlines, visa carousel).
 * Change values here to keep padding, margin, and gaps consistent.
 */
export const HOME_SECTION = {
  /** Vertical space between stacked section cards */
  stack: "my-10",

  /** White card shell */
  panel: "bg-white rounded-md shadow-lg",

  /** Inner padding for title + carousel + dots inside each card */
  panelPad: "px-4 sm:px-6 md:px-8 py-5 sm:py-6",

  /** Margin above dot pagination (below carousel) */
  dotsTop: "mt-4",

  /** Per-slide gutter inside Embla tracks */
  slideCell: "p-2 sm:p-3",
} as const;

/** SectionTitle block — space below heading + subheading before main content */
export const SECTION_TITLE_BLOCK = "pb-2 md:pb-3";

/** Page hero / top intro horizontal padding (aligns with section cards) */
// export const PAGE_HERO_PAD = "px-4 sm:px-6";
