"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { MoreHorizontal, Eye, Edit, Trash, FileText } from "lucide-react"
import Link from "next/link"

// Get current date for more realistic data
const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
const twoDaysAgo = new Date(today)
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)
const threeDaysAgo = new Date(today)
threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)

// Format dates
const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0]
}

const expenses = [
  {
    id: "EXP-001",
    date: formatDate(today),
    merchant: "Starbucks",
    category: "Food & Dining",
    amount: 5.75,
    status: "Approved",
    paymentMethod: "Credit Card",
    description: "Coffee during meeting",
    receipt: true,
  },
  {
    id: "EXP-002",
    date: formatDate(today),
    merchant: "Amazon",
    category: "Shopping",
    amount: 67.99,
    status: "Pending",
    paymentMethod: "Credit Card",
    description: "Office supplies",
    receipt: true,
  },
  {
    id: "EXP-003",
    date: formatDate(yesterday),
    merchant: "Uber",
    category: "Transportation",
    amount: 24.5,
    status: "Approved",
    paymentMethod: "Credit Card",
    description: "Ride to client meeting",
    receipt: false,
  },
  {
    id: "EXP-004",
    date: formatDate(yesterday),
    merchant: "Office Supplies Inc",
    category: "Office",
    amount: 129.99,
    status: "Rejected",
    paymentMethod: "Credit Card",
    description: "New monitor",
    receipt: true,
  },
  {
    id: "EXP-005",
    date: formatDate(twoDaysAgo),
    merchant: "Grocery Store",
    category: "Groceries",
    amount: 87.32,
    status: "Approved",
    paymentMethod: "Debit Card",
    description: "Weekly groceries",
    receipt: true,
  },
  {
    id: "EXP-006",
    date: formatDate(twoDaysAgo),
    merchant: "Gas Station",
    category: "Transportation",
    amount: 45.0,
    status: "Approved",
    paymentMethod: "Credit Card",
    description: "Fuel",
    receipt: false,
  },
  {
    id: "EXP-007",
    date: formatDate(threeDaysAgo),
    merchant: "Restaurant",
    category: "Food & Dining",
    amount: 78.5,
    status: "Approved",
    paymentMethod: "Credit Card",
    description: "Dinner with client",
    receipt: true,
  },
  {
    id: "EXP-008",
    date: formatDate(threeDaysAgo),
    merchant: "Internet Provider",
    category: "Utilities",
    amount: 89.99,
    status: "Pending",
    paymentMethod: "Bank Transfer",
    description: "Monthly internet bill",
    receipt: true,
  },
  {
    id: "EXP-009",
    date: formatDate(threeDaysAgo),
    merchant: "Movie Theater",
    category: "Entertainment",
    amount: 24.0,
    status: "Approved",
    paymentMethod: "Credit Card",
    description: "Movie tickets",
    receipt: true,
  },
  {
    id: "EXP-010",
    date: formatDate(threeDaysAgo),
    merchant: "Clothing Store",
    category: "Shopping",
    amount: 145.75,
    status: "Approved",
    paymentMethod: "Credit Card",
    description: "Business attire",
    receipt: true,
  },
]

export function ExpenseList() {
  const [viewExpense, setViewExpense] = useState<(typeof expenses)[0] | null>(null)
  const [selectedExpenses, setSelectedExpenses] = useState<string[]>([])

  const toggleExpenseSelection = (id: string) => {
    setSelectedExpenses((prev) => (prev.includes(id) ? prev.filter((expenseId) => expenseId !== id) : [...prev, id]))
  }

  const toggleAllExpenses = () => {
    if (selectedExpenses.length === expenses.length) {
      setSelectedExpenses([])
    } else {
      setSelectedExpenses(expenses.map((expense) => expense.id))
    }
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedExpenses.length === expenses.length && expenses.length > 0}
                  onCheckedChange={toggleAllExpenses}
                  aria-label="Select all expenses"
                />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Merchant</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Receipt</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedExpenses.includes(expense.id)}
                    onCheckedChange={() => toggleExpenseSelection(expense.id)}
                    aria-label={`Select expense ${expense.id}`}
                  />
                </TableCell>
                <TableCell>{expense.id}</TableCell>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.merchant}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell className="max-w-[200px] truncate">{expense.description}</TableCell>
                <TableCell className="text-right">${expense.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      expense.status === "Approved"
                        ? "success"
                        : expense.status === "Pending"
                          ? "outline"
                          : "destructive"
                    }
                  >
                    {expense.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {expense.receipt ? (
                    <Button variant="ghost" size="icon">
                      <FileText className="h-4 w-4" />
                      <span className="sr-only">View receipt</span>
                    </Button>
                  ) : (
                    <span className="text-muted-foreground text-sm">None</span>
                  )}
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
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/expenses/edit/${expense.id}`} className="flex w-full">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
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
      </div>

      <Dialog open={!!viewExpense} onOpenChange={() => setViewExpense(null)}>
        <DialogContent className="sm:max-w-[425px]">
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
                <div>
                  <p className="text-sm font-medium">Payment Method</p>
                  <p className="text-sm text-muted-foreground">{viewExpense.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Receipt</p>
                  <p className="text-sm text-muted-foreground">{viewExpense.receipt ? "Available" : "Not available"}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Description</p>
                <p className="text-sm text-muted-foreground">{viewExpense.description}</p>
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

