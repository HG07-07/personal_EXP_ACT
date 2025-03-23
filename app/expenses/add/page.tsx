import type { Metadata } from "next"
import AddExpenseForm from "@/components/expenses/add-expense-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Add Expense | FinTrack",
  description: "Add a new expense to your account",
}

export default function AddExpensePage() {
  return (
    <main className="flex-1 p-6">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/expenses">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Expenses
          </Link>
        </Button>
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add New Expense</h1>
        <AddExpenseForm />
      </div>
    </main>
  )
}

