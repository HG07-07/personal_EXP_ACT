import { Suspense } from "react"
import { ExpenseInsights } from "@/components/expenses/expense-insights"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

export default function InsightsPage() {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/reports">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Expense Insights</h1>
      </div>
      <p className="text-muted-foreground">Gain deeper insights into your spending patterns and financial habits</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
          <ExpenseInsights />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
          <ExpenseInsights />
        </Suspense>
      </div>
    </div>
  )
}

