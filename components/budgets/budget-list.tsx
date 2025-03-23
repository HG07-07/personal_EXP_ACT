"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash } from "lucide-react"

const budgets = [
  {
    id: "BUD-001",
    category: "Food & Dining",
    amount: 600,
    spent: 540,
    remaining: 60,
    period: "Monthly",
    startDate: "2023-07-01",
    endDate: "2023-07-31",
  },
  {
    id: "BUD-002",
    category: "Transportation",
    amount: 300,
    spent: 320,
    remaining: -20,
    period: "Monthly",
    startDate: "2023-07-01",
    endDate: "2023-07-31",
  },
  {
    id: "BUD-003",
    category: "Shopping",
    amount: 500,
    spent: 480,
    remaining: 20,
    period: "Monthly",
    startDate: "2023-07-01",
    endDate: "2023-07-31",
  },
  {
    id: "BUD-004",
    category: "Entertainment",
    amount: 250,
    spent: 230,
    remaining: 20,
    period: "Monthly",
    startDate: "2023-07-01",
    endDate: "2023-07-31",
  },
  {
    id: "BUD-005",
    category: "Utilities",
    amount: 400,
    spent: 350,
    remaining: 50,
    period: "Monthly",
    startDate: "2023-07-01",
    endDate: "2023-07-31",
  },
]

export function BudgetList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Period</TableHead>
            <TableHead>Budget Amount</TableHead>
            <TableHead>Spent</TableHead>
            <TableHead>Remaining</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.amount) * 100
            return (
              <TableRow key={budget.id}>
                <TableCell className="font-medium">{budget.category}</TableCell>
                <TableCell>{budget.period}</TableCell>
                <TableCell>${budget.amount.toFixed(2)}</TableCell>
                <TableCell>${budget.spent.toFixed(2)}</TableCell>
                <TableCell className={budget.remaining < 0 ? "text-destructive" : ""}>
                  ${budget.remaining.toFixed(2)}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress
                      value={percentage > 100 ? 100 : percentage}
                      className="h-2"
                      indicatorClassName={percentage > 100 ? "bg-destructive" : ""}
                    />
                    <span className="text-xs">{percentage.toFixed(0)}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

