import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MonthlyTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Trends</CardTitle>
        <CardDescription>Your spending patterns over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Monthly expense trend chart will appear here</p>
        </div>
      </CardContent>
    </Card>
  )
}

