"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MoreHorizontal, Eye, Edit, Trash } from "lucide-react"
import Link from "next/link"

// Get current date for more realistic data
const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
const twoDaysAgo = new Date(today)
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)

// Format dates
const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0]
}

const recentExpenses = [
  {
    id: "EXP-001",
    date: formatDate(today),
    merchant: "Starbucks",
    category: "Food & Dining",
    amount: 5.75,
    status: "Approved",
  },
  {
    id: "EXP-002",
    date: formatDate(today),
    merchant: "Amazon",
    category: "Shopping",
    amount: 67.99,
    status: "Pending",
  },
  {
    id: "EXP-003",
    date: formatDate(yesterday),
    merchant: "Uber",
    category: "Transportation",
    amount: 24.5,
    status: "Approved",
  },
  {
    id: "EXP-004",
    date: formatDate(yesterday),
    merchant: "Office Supplies Inc",
    category: "Office",
    amount: 129.99,
    status: "Rejected",
  },
  {
    id: "EXP-005",
    date: formatDate(twoDaysAgo),
    merchant: "Grocery Store",
    category: "Groceries",
    amount: 87.32,
    status: "Approved",
  },
]

export function RecentExpenses() {
  const [viewExpense, setViewExpense] = useState<(typeof recentExpenses)[0] | null>(null)

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentExpenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.merchant}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell className="text-right">${expense.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    expense.status === "Approved" ? "success" : expense.status === "Pending" ? "outline" : "destructive"
                  }
                >
                  {expense.status}
                </Badge>
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
                    <DropdownMenuItem onClick={() => setViewExpense(expense)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
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
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex justify-end">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/expenses">View All Expenses</Link>
        </Button>
      </div>

      <Dialog open={!!viewExpense} onOpenChange={() => setViewExpense(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Expense Details</DialogTitle>
            <DialogDescription>View the complete details of this expense.</DialogDescription>
          </DialogHeader>
          {viewExpense && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">ID</p>
                  <p className="text-sm text-muted-foreground">{viewExpense.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Date</p>
                  <p className="text-sm text-muted-foreground">{viewExpense.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Merchant</p>
                  <p className="text-sm text-muted-foreground">{viewExpense.merchant}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Category</p>
                  <p className="text-sm text-muted-foreground">{viewExpense.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Amount</p>
                  <p className="text-sm text-muted-foreground">${viewExpense.amount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Status</p>
                  <Badge
                    variant={
                      viewExpense.status === "Approved"
                        ? "success"
                        : viewExpense.status === "Pending"
                          ? "outline"
                          : "destructive"
                    }
                  >
                    {viewExpense.status}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setViewExpense(null)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

