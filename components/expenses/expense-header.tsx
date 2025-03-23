import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function ExpenseHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Expenses</h1>
        <p className="text-muted-foreground">Manage and track all your expenses in one place</p>
      </div>
      <Button asChild>
        <Link href="/expenses/add">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Expense
        </Link>
      </Button>
    </div>
  )
}

