"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = [
  { name: "Food & Dining", value: 540, color: "#ec4899" },
  { name: "Transportation", value: 320, color: "#8b5cf6" },
  { name: "Shopping", value: 480, color: "#3b82f6" },
  { name: "Entertainment", value: 230, color: "#10b981" },
  { name: "Utilities", value: 350, color: "#f59e0b" },
]

export function CategoryReport() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="h-[350px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
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
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Percentage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((category) => {
              const total = data.reduce((sum, item) => sum + item.value, 0)
              const percentage = (category.value / total) * 100
              return (
                <TableRow key={category.name}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                      {category.name}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">${category.value.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{percentage.toFixed(1)}%</TableCell>
                </TableRow>
              )
            })}
            <TableRow>
              <TableCell className="font-bold">Total</TableCell>
              <TableCell className="text-right font-bold">
                ${data.reduce((sum, item) => sum + item.value, 0).toFixed(2)}
              </TableCell>
              <TableCell className="text-right font-bold">100%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

