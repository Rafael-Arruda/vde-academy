import { Skeleton } from "@/components/ui/skeleton"
import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent, 
    CardFooter } 
from "@/components/ui/card"

export function SkeletonChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-40 h-6" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-60 h-4 mt-1" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center w-full h-[250px]">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <Skeleton className="w-32 h-4" />
        </div>
      </CardFooter>
    </Card>
  )
}