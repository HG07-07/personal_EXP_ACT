import { Suspense } from "react"
import { BudgetList } from "@/components/budgets/budget-list"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { BudgetListSkeleton } from "@/components/skeletons/budget-list-skeleton"

export default function BudgetsPage() {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Budgets</h1>
        <Button asChild>
          <Link href="/dashboard/budgets/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Budget
          </Link>
        </Button>
      </div>
      <Suspense fallback={<BudgetListSkeleton />}>
        <BudgetList />
      </Suspense>
    </div>
  )
}

