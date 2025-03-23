"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coffee, Car, Utensils, Smartphone, ShoppingCart, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for recent transactions
const recentTransactions = [
  {
    id: 1,
    merchant: "Grocery Store",
    category: "Groceries",
    amount: 78.52,
    date: "Today",
    icon: ShoppingCart,
    status: "completed",
  },
  {
    id: 2,
    merchant: "Coffee Shop",
    category: "Dining",
    amount: 4.75,
    date: "Today",
    icon: Coffee,
    status: "completed",
  },
  {
    id: 3,
    merchant: "Gas Station",
    category: "Transportation",
    amount: 45.0,
    date: "Yesterday",
    icon: Car,
    status: "completed",
  },
  {
    id: 4,
    merchant: "Internet Provider",
    category: "Utilities",
    amount: 79.99,
    date: "Mar 15, 2025",
    icon: Smartphone,
    status: "pending",
  },
  {
    id: 5,
    merchant: "Restaurant",
    category: "Dining",
    amount: 32.4,
    date: "Mar 14, 2025",
    icon: Utensils,
    status: "completed",
  },
]

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState(recentTransactions)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest expenses and payments</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted p-2">
                  <transaction.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">{transaction.merchant}</p>
                  <p className="text-sm text-muted-foreground">{transaction.category}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium leading-none">-${transaction.amount.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
                <Badge variant={transaction.status === "completed" ? "outline" : "secondary"} className="capitalize">
                  {transaction.status}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Transaction</DropdownMenuItem>
                    <DropdownMenuItem>Add to Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

