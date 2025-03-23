"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const incomeData = [
  { day: "1", amount: 120 },
  { day: "2", amount: 0 },
  { day: "3", amount: 0 },
  { day: "4", amount: 0 },
  { day: "5", amount: 0 },
  { day: "6", amount: 0 },
  { day: "7", amount: 0 },
  { day: "8", amount: 0 },
  { day: "9", amount: 0 },
  { day: "10", amount: 2500 },
  { day: "11", amount: 0 },
  { day: "12", amount: 0 },
  { day: "13", amount: 0 },
  { day: "14", amount: 0 },
  { day: "15", amount: 0 },
  { day: "16", amount: 0 },
  { day: "17", amount: 0 },
  { day: "18", amount: 0 },
  { day: "19", amount: 0 },
  { day: "20", amount: 0 },
  { day: "21", amount: 0 },
  { day: "22", amount: 0 },
  { day: "23", amount: 0 },
  { day: "24", amount: 0 },
  { day: "25", amount: 1500 },
  { day: "26", amount: 0 },
  { day: "27", amount: 0 },
  { day: "28", amount: 0 },
  { day: "29", amount: 0 },
  { day: "30", amount: 0 },
]

const expenseData = [
  { day: "1", amount: 45 },
  { day: "2", amount: 15 },
  { day: "3", amount: 98 },
  { day: "4", amount: 0 },
  { day: "5", amount: 75 },
  { day: "6", amount: 125 },
  { day: "7", amount: 35 },
  { day: "8", amount: 55 },
  { day: "9", amount: 0 },
  { day: "10", amount: 85 },
  { day: "11", amount: 65 },
  { day: "12", amount: 45 },
  { day: "13", amount: 0 },
  { day: "14", amount: 125 },
  { day: "15", amount: 45 },
  { day: "16", amount: 65 },
  { day: "17", amount: 0 },
  { day: "18", amount: 35 },
  { day: "19", amount: 95 },
  { day: "20", amount: 145 },
  { day: "21", amount: 0 },
  { day: "22", amount: 65 },
  { day: "23", amount: 125 },
  { day: "24", amount: 45 },
  { day: "25", amount: 85 },
  { day: "26", amount: 35 },
  { day: "27", amount: 0 },
  { day: "28", amount: 65 },
  { day: "29", amount: 95 },
  { day: "30", amount: 125 },
]

export function MonthlyReport() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground">Total Income</div>
            <div className="text-2xl font-bold">$4,120.00</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground">Total Expenses</div>
            <div className="text-2xl font-bold">$1,850.32</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground">Net Savings</div>
            <div className="text-2xl font-bold">$2,269.68</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="expenses">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="income">Income</TabsTrigger>
        </TabsList>
        <TabsContent value="expenses" className="pt-4">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={expenseData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                formatter={(value) => [`$${value}`, "Amount"]}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  borderRadius: "var(--radius)",
                }}
                itemStyle={{ color: "var(--foreground)" }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Bar dataKey="amount" fill="var(--primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="income" className="pt-4">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={incomeData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                formatter={(value) => [`$${value}`, "Amount"]}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  borderRadius: "var(--radius)",
                }}
                itemStyle={{ color: "var(--foreground)" }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Bar dataKey="amount" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </div>
  )
}

