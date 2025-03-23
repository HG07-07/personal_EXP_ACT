import { Skeleton } from "@/components/ui/skeleton"

export function DashboardSkeleton() {
  return (
    <div className="w-full h-[350px] flex flex-col gap-4">
      <Skeleton className="w-full h-8" />
      <Skeleton className="w-full h-[300px]" />
    </div>
  )
}

