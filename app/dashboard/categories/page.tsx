import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Edit, Trash } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample category data
const categories = [
  { id: 1, name: "Food & Dining", color: "#ec4899", count: 42, budget: 600 },
  { id: 2, name: "Transportation", color: "#8b5cf6", count: 28, budget: 300 },
  { id: 3, name: "Shopping", color: "#3b82f6", count: 35, budget: 500 },
  { id: 4, name: "Entertainment", color: "#10b981", count: 18, budget: 250 },
  { id: 5, name: "Utilities", color: "#f59e0b", count: 12, budget: 400 },
  { id: 6, name: "Housing", color: "#ef4444", count: 8, budget: 1200 },
  { id: 7, name: "Healthcare", color: "#6366f1", count: 15, budget: 300 },
  { id: 8, name: "Education", color: "#0ea5e9", count: 5, budget: 200 },
  { id: 9, name: "Travel", color: "#14b8a6", count: 7, budget: 600 },
  { id: 10, name: "Personal Care", color: "#f97316", count: 10, budget: 150 },
]

export default function CategoriesPage() {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>
      <p className="text-muted-foreground">Manage your expense categories and budgets</p>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>All Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Expenses</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }}></div>
                      <span className="text-xs">{category.color}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{category.count}</Badge>
                  </TableCell>
                  <TableCell>${category.budget}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

