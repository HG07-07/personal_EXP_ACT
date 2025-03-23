import { Suspense } from "react"
import { ExpenseList } from "@/components/expenses/expense-list"
import { ExpenseFilters } from "@/components/expenses/expense-filters"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { ExpenseListSkeleton } from "@/components/skeletons/expense-list-skeleton"

export default function ExpensesPage() {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Expenses</h1>
        <Button asChild>
          <Link href="/dashboard/expenses/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Expense
          </Link>
        </Button>
      </div>
      <ExpenseFilters />
      <Suspense fallback={<ExpenseListSkeleton />}>
        <ExpenseList />
      </Suspense>
    </div>
  )
}

