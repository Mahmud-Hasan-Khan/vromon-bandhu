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
  panelPad: "px-2 py-3",

  /** Margin above dot pagination (below carousel) */
  dotsTop: "mt-4",

  /** Per-slide gutter inside Embla tracks */
  slideCell: "p-2 md:p-3",
} as const;

