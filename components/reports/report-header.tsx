import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ReportHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">Analyze your spending patterns and financial health</p>
      </div>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Export Reports
      </Button>
    </div>
  )
}

