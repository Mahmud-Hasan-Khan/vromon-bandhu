import { Skeleton } from "./Skeleton";

type Props = {
  /** Vertical spacing to match the section it replaces (e.g. offers vs airlines). */
  className?: string;
};

export function SectionSkeleton({ className = "my-4" }: Props) {
  return (
    <div
      className={`space-y-4 rounded-md bg-white p-6 shadow-lg ${className}`}
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
