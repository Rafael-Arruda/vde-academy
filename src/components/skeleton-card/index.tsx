import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className="w-full h-full flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-center gap-4">
                <Skeleton className="w-10 h-10 rounded-xl" />
                <Skeleton className="h-6 w-full" />
            </div>
            <div className="flex items-end justify-between mt-5">
                <div className="flex-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-8 w-full mt-2" />
                </div>
            </div>
        </div>
    )
}
