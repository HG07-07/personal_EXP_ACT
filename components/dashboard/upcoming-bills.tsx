"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarClock } from "lucide-react"

// Mock data for upcoming bills
const upcomingBills = [
  {
    id: 1,
    name: "Rent",
    amount: 1200,
    dueDate: "Mar 31, 2025",
    recurring: true,
    status: "upcoming",
  },
  {
    id: 2,
    name: "Electricity",
    amount: 85,
    dueDate: "Apr 5, 2025",
    recurring: true,
    status: "upcoming",
  },
  {
    id: 3,
    name: "Internet",
    amount: 79.99,
    dueDate: "Apr 8, 2025",
    recurring: true,
    status: "upcoming",
  },
  {
    id: 4,
    name: "Phone Bill",
    amount: 65,
    dueDate: "Apr 12, 2025",
    recurring: true,
    status: "upcoming",
  },
]

export default function UpcomingBills() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Upcoming Bills</CardTitle>
          <CardDescription>Bills due in the next 30 days</CardDescription>
        </div>
        <Button variant="ghost" size="icon">
          <CalendarClock className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingBills.map((bill) => (
            <div key={bill.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{bill.name}</p>
                <p className="text-xs text-muted-foreground">Due {bill.dueDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">${bill.amount}</span>
                <Button variant="outline" size="sm">
                  Pay
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

