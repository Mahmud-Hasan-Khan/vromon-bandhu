import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className = "", ...props }: Props) {
  return (
    <div
      className={`animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-200 ${className}`}
      {...props}
    />
  );
}
