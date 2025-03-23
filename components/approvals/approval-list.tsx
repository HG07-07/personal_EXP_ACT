"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Check, X, Eye, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const pendingApprovals = [
  {
    id: "EXP-002",
    date: "2023-07-14",
    submittedBy: "John Doe",
    merchant: "Amazon",
    category: "Shopping",
    amount: 67.99,
    description: "Office supplies",
    receipt: true,
  },
  {
    id: "EXP-008",
    date: "2023-07-08",
    submittedBy: "Jane Smith",
    merchant: "Internet Provider",
    category: "Utilities",
    amount: 89.99,
    description: "Monthly internet bill",
    receipt: true,
  },
  {
    id: "EXP-011",
    date: "2023-07-05",
    submittedBy: "Mike Johnson",
    merchant: "Flight Booking",
    category: "Travel",
    amount: 450.0,
    description: "Business trip to New York",
    receipt: true,
  },
]

export function ApprovalList() {
  const [viewExpense, setViewExpense] = useState<(typeof pendingApprovals)[0] | null>(null)
  const [approvals, setApprovals] = useState(pendingApprovals)
  const { toast } = useToast()

  const handleApprove = (id: string) => {
    setApprovals(approvals.filter((approval) => approval.id !== id))
    toast({
      title: "Expense approved",
      description: `Expense ${id} has been approved.`,
    })
  }

  const handleReject = (id: string) => {
    setApprovals(approvals.filter((approval) => approval.id !== id))
    toast({
      title: "Expense rejected",
      description: `Expense ${id} has been rejected.`,
    })
  }

  return (
    <>
      {approvals.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <Check className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">All caught up!</h3>
          <p className="mt-2 text-sm text-muted-foreground">You have no pending expenses to approve.</p>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Submitted By</TableHead>
                <TableHead>Merchant</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Receipt</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {approvals.map((approval) => (
                <TableRow key={approval.id}>
                  <TableCell>{approval.id}</TableCell>
                  <TableCell>{approval.date}</TableCell>
                  <TableCell>{approval.submittedBy}</TableCell>
                  <TableCell>{approval.merchant}</TableCell>
                  <TableCell>{approval.category}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{approval.description}</TableCell>
                  <TableCell className="text-right">${approval.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    {approval.receipt ? (
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">View receipt</span>
                      </Button>
                    ) : (
                      <span className="text-muted-foreground text-sm">None</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => setViewExpense(approval)}>
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-green-500 hover:text-green-600 hover:bg-green-100"
                        onClick={() => handleApprove(approval.id)}
                      >
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Approve</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:bg-destructive/10"
                        onClick={() => handleReject(approval.id)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Reject</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Dialog open={!!viewExpense} onOpenChange={() => setViewExpense(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Expense Details</DialogTitle>
            <DialogDescription>Review the expense details before approving or rejecting.</DialogDescription>
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
                  <p className="text-sm font-medium">Submitted By</p>
                  <p className="text-sm text-muted-foreground">{viewExpense.submittedBy}</p>
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
                <div className="col-span-2">
                  <p className="text-sm font-medium">Description</p>
                  <p className="text-sm text-muted-foreground">{viewExpense.description}</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter className="flex justify-between">
            <Button
              variant="destructive"
              onClick={() => {
                if (viewExpense) {
                  handleReject(viewExpense.id)
                  setViewExpense(null)
                }
              }}
            >
              <X className="mr-2 h-4 w-4" />
              Reject
            </Button>
            <Button
              onClick={() => {
                if (viewExpense) {
                  handleApprove(viewExpense.id)
                  setViewExpense(null)
                }
              }}
            >
              <Check className="mr-2 h-4 w-4" />
              Approve
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

