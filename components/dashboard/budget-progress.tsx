"use client"

import type React from "react"

import { Progress } from "@/components/ui/progress"

const budgets = [
  {
    category: "Food & Dining",
    spent: 540,
    budget: 600,
    color: "#ec4899",
  },
  {
    category: "Transportation",
    spent: 320,
    budget: 300,
    color: "#8b5cf6",
  },
  {
    category: "Shopping",
    spent: 480,
    budget: 500,
    color: "#3b82f6",
  },
  {
    category: "Entertainment",
    spent: 230,
    budget: 250,
    color: "#10b981",
  },
  {
    category: "Utilities",
    spent: 350,
    budget: 400,
    color: "#f59e0b",
  },
]

export function BudgetProgress() {
  return (
    <div className="space-y-4">
      {budgets.map((budget) => {
        const percentage = (budget.spent / budget.budget) * 100
        return (
          <div key={budget.category} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{budget.category}</span>
              <span className={percentage > 100 ? "text-destructive" : ""}>
                ${budget.spent} / ${budget.budget}
              </span>
            </div>
            <Progress
              value={percentage > 100 ? 100 : percentage}
              className="h-2"
              indicatorClassName={percentage > 100 ? "bg-destructive" : ""}
              style={
                {
                  "--progress-background": budget.color,
                } as React.CSSProperties
              }
            />
          </div>
        )
      })}
    </div>
  )
}

