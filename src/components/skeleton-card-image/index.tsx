import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCardImage() {
  return (
    <div className="rounded-lg overflow-hidden border max-w-[288px]">
      <div className="relative">
        <Skeleton className="w-[288px] h-[162px] object-cover aspect-video" />
        <Skeleton className="absolute top-0 right-0 w-24 h-6 rounded-bl-lg" />
      </div>
      
      <div className="p-2 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Skeleton className="w-12 h-4" />
          <Skeleton className="w-32 h-5" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="w-20 h-4" />
          <Skeleton className="w-16 h-5" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-20 h-5" />
        </div>
      </div>
    </div>
  );
}