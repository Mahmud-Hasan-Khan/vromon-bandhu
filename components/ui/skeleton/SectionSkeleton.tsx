import { Skeleton } from "./Skeleton";
import { HOME_SECTION } from "@/lib/ui/homeSectionLayout";

type Props = {
  /** Override vertical spacing between sections (default matches `HOME_SECTION.stack`). */
  className?: string;
};

export function SectionSkeleton({ className = HOME_SECTION.stack }: Props) {
  return (
    <div
      className={`${HOME_SECTION.panel} ${className} ${HOME_SECTION.panelPad} space-y-4`}
    >
      <Skeleton className="h-6 w-1/3 max-w-xs mx-auto" />
      <div className="flex gap-4">
        <Skeleton className="h-40 min-h-0 flex-1" />
        <Skeleton className="h-40 min-h-0 flex-1" />
        <Skeleton className="h-40 min-h-0 flex-1" />
      </div>
    </div>
  );
}
