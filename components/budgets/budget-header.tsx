import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function BudgetHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Budgets</h1>
        <p className="text-muted-foreground">Set and manage your spending limits</p>
      </div>
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create Budget
      </Button>
    </div>
  )
}

