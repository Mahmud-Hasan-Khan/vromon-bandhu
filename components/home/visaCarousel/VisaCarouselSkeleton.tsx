import { Skeleton } from "@/components/ui/skeleton/Skeleton";

export function VisaCarouselSkeleton() {
  return (
    <section className="py-10 sm:py-16 lg:py-20" aria-hidden>
      <Skeleton className="mx-auto mb-8 h-8 w-64 max-w-[80%] sm:mb-10 sm:h-9 lg:mb-12 lg:h-10" />

      <div className="px-3 sm:px-4">
        <Skeleton className="mx-auto h-[min(20rem,72svh)] max-w-full rounded-2xl sm:h-[min(24rem,65vh)] sm:rounded-3xl lg:h-[26rem]" />
      </div>

      <div className="mt-3 flex justify-center gap-2 sm:mt-4">
        <Skeleton className="h-2 w-6 rounded-full" />
        <Skeleton className="h-2 w-2 rounded-full" />
        <Skeleton className="h-2 w-2 rounded-full" />
        <Skeleton className="h-2 w-2 rounded-full" />
        <Skeleton className="h-2 w-2 rounded-full" />
      </div>
    </section>
  );
}
