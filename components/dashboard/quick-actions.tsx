"use client"

import { Button } from "@/components/ui/button"
import { Receipt, DollarSign, FileText, Camera, CreditCard, BarChart3 } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button asChild variant="outline" className="h-auto flex-col gap-1 p-4 justify-start items-center">
        <Link href="/dashboard/expenses/new">
          <Receipt className="h-5 w-5 mb-1" />
          <div className="text-sm font-medium">Add Expense</div>
        </Link>
      </Button>
      <Button asChild variant="outline" className="h-auto flex-col gap-1 p-4 justify-start items-center">
        <Link href="/dashboard/expenses/new">
          <Camera className="h-5 w-5 mb-1" />
          <div className="text-sm font-medium">Scan Receipt</div>
        </Link>
      </Button>
      <Button asChild variant="outline" className="h-auto flex-col gap-1 p-4 justify-start items-center">
        <Link href="/dashboard/budgets">
          <DollarSign className="h-5 w-5 mb-1" />
          <div className="text-sm font-medium">Create Budget</div>
        </Link>
      </Button>
      <Button asChild variant="outline" className="h-auto flex-col gap-1 p-4 justify-start items-center">
        <Link href="/dashboard/reports">
          <FileText className="h-5 w-5 mb-1" />
          <div className="text-sm font-medium">View Reports</div>
        </Link>
      </Button>
      <Button asChild variant="outline" className="h-auto flex-col gap-1 p-4 justify-start items-center">
        <Link href="/dashboard/payment-methods">
          <CreditCard className="h-5 w-5 mb-1" />
          <div className="text-sm font-medium">Manage Accounts</div>
        </Link>
      </Button>
      <Button asChild variant="outline" className="h-auto flex-col gap-1 p-4 justify-start items-center">
        <Link href="/dashboard/reports/insights">
          <BarChart3 className="h-5 w-5 mb-1" />
          <div className="text-sm font-medium">Insights</div>
        </Link>
      </Button>
    </div>
  )
}

