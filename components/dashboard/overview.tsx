"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// More realistic data with current year
const currentYear = new Date().getFullYear()
const data = [
  {
    name: "Jan",
    expenses: 2400,
    income: 4000,
  },
  {
    name: "Feb",
    expenses: 1398,
    income: 3000,
  },
  {
    name: "Mar",
    expenses: 2800,
    income: 3200,
  },
  {
    name: "Apr",
    expenses: 3908,
    income: 4100,
  },
  {
    name: "May",
    expenses: 2800,
    income: 3890,
  },
  {
    name: "Jun",
    expenses: 3800,
    income: 3490,
  },
  {
    name: "Jul",
    expenses: 3500,
    income: 4200,
  },
  {
    name: "Aug",
    expenses: 2950,
    income: 3800,
  },
  {
    name: "Sep",
    expenses: 3100,
    income: 4100,
  },
  {
    name: "Oct",
    expenses: 2700,
    income: 3950,
  },
  {
    name: "Nov",
    expenses: 3200,
    income: 4200,
  },
  {
    name: "Dec",
    expenses: 4100,
    income: 4500,
  },
]

export function Overview() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-sm font-medium text-muted-foreground">{currentYear} Financial Overview</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-xs text-muted-foreground">Expenses</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-muted-foreground">Income</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              borderRadius: "var(--radius)",
            }}
            itemStyle={{ color: "var(--foreground)" }}
            formatter={(value) => [`$${value}`, ""]}
            labelStyle={{ color: "var(--foreground)" }}
          />
          <Bar dataKey="expenses" fill="var(--primary)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="income" fill="#22c55e" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

