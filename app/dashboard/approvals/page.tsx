import { Suspense } from "react"
import { ApprovalList } from "@/components/approvals/approval-list"
import { ApprovalListSkeleton } from "@/components/skeletons/approval-list-skeleton"

export default function ApprovalsPage() {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-4">
      <h1 className="text-2xl font-bold tracking-tight">Pending Approvals</h1>
      <Suspense fallback={<ApprovalListSkeleton />}>
        <ApprovalList />
      </Suspense>
    </div>
  )
}

