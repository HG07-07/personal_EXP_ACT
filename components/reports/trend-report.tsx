"use client"

import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const data = [
  {
    month: "Jan",
    food: 420,
    transportation: 240,
    shopping: 380,
    entertainment: 220,
    utilities: 320,
  },
  {
    month: "Feb",
    food: 450,
    transportation: 260,
    shopping: 400,
    entertainment: 180,
    utilities: 320,
  },
  {
    month: "Mar",
    food: 480,
    transportation: 280,
    shopping: 420,
    entertainment: 210,
    utilities: 350,
  },
  {
    month: "Apr",
    food: 470,
    transportation: 290,
    shopping: 450,
    entertainment: 230,
    utilities: 330,
  },
  {
    month: "May",
    food: 500,
    transportation: 310,
    shopping: 470,
    entertainment: 250,
    utilities: 340,
  },
  {
    month: "Jun",
    food: 520,
    transportation: 300,
    shopping: 460,
    entertainment: 240,
    utilities: 350,
  },
  {
    month: "Jul",
    food: 540,
    transportation: 320,
    shopping: 480,
    entertainment: 230,
    utilities: 350,
  },
]

export function TrendReport() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="grid gap-2">
          <Label htmlFor="timeframe">Timeframe</Label>
          <Select defaultValue="7months">
            <SelectTrigger id="timeframe" className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">Last 3 months</SelectItem>
              <SelectItem value="6months">Last 6 months</SelectItem>
              <SelectItem value="7months">Last 7 months</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            formatter={(value) => [`$${value}`, ""]}
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              borderRadius: "var(--radius)",
            }}
            itemStyle={{ color: "var(--foreground)" }}
            labelStyle={{ color: "var(--foreground)" }}
          />
          <Line type="monotone" dataKey="food" stroke="#ec4899" strokeWidth={2} dot={{ r: 4 }} name="Food & Dining" />
          <Line
            type="monotone"
            dataKey="transportation"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Transportation"
          />
          <Line type="monotone" dataKey="shopping" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} name="Shopping" />
          <Line
            type="monotone"
            dataKey="entertainment"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Entertainment"
          />
          <Line type="monotone" dataKey="utilities" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} name="Utilities" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

