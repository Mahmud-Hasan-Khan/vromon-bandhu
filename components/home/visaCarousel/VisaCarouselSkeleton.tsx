import { Skeleton } from "@/components/ui/skeleton/Skeleton";
import { HOME_SECTION } from "@/lib/ui/homeSectionLayout";

export function VisaCarouselSkeleton() {
  return (
    <div className={`${HOME_SECTION.panelPad}`} aria-hidden>
      <Skeleton className="mx-auto mb-6 h-8 w-64 max-w-[80%] sm:mb-7 sm:h-9 md:mb-8" />

      <Skeleton className="mx-auto h-[min(20rem,72svh)] max-w-full rounded-2xl sm:h-[min(24rem,65vh)] sm:rounded-3xl lg:h-[26rem]" />

      <div className={`flex justify-center gap-2 ${HOME_SECTION.dotsTop}`}>
        <Skeleton className="h-2 w-6 rounded-full" />
        <Skeleton className="h-2 w-2 rounded-full" />
        <Skeleton className="h-2 w-2 rounded-full" />
        <Skeleton className="h-2 w-2 rounded-full" />
        <Skeleton className="h-2 w-2 rounded-full" />
      </div>
    </div>
  );
}
