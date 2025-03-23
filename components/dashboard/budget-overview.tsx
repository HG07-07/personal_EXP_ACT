"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data for budgets
const budgets = [
  {
    id: 1,
    category: "Groceries",
    spent: 320,
    limit: 400,
    percentage: 80,
  },
  {
    id: 2,
    category: "Dining",
    spent: 180,
    limit: 200,
    percentage: 90,
  },
  {
    id: 3,
    category: "Entertainment",
    spent: 75,
    limit: 150,
    percentage: 50,
  },
  {
    id: 4,
    category: "Transportation",
    spent: 120,
    limit: 200,
    percentage: 60,
  },
]

export default function BudgetOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
        <CardDescription>Your monthly budget status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {budgets.map((budget) => (
            <div key={budget.id} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{budget.category}</span>
                <span className="text-sm text-muted-foreground">
                  ${budget.spent} / ${budget.limit}
                </span>
              </div>
              <Progress
                value={budget.percentage}
                className={
                  budget.percentage >= 90 ? "bg-muted h-2" : budget.percentage >= 75 ? "bg-muted h-2" : "bg-muted h-2"
                }
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{budget.percentage}% used</span>
                <span>
                  {budget.percentage >= 90 ? "Almost depleted" : budget.percentage >= 75 ? "Warning" : "On track"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

