"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BudgetSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Summary</CardTitle>
        <CardDescription>Your overall budget status</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="month">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="quarter">This Quarter</TabsTrigger>
            <TabsTrigger value="year">This Year</TabsTrigger>
          </TabsList>
          <TabsContent value="month" className="pt-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Total Budget</span>
                  <span className="text-sm font-medium">$2,500 / $3,000</span>
                </div>
                <Progress value={83} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>83% used</span>
                  <span>$500 remaining</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="rounded-lg border p-3">
                  <div className="text-sm font-medium mb-1">Essential</div>
                  <div className="text-xl font-bold">$1,650</div>
                  <div className="text-xs text-muted-foreground">66% of total</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-sm font-medium mb-1">Discretionary</div>
                  <div className="text-xl font-bold">$750</div>
                  <div className="text-xs text-muted-foreground">30% of total</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-sm font-medium mb-1">Savings</div>
                  <div className="text-xl font-bold">$100</div>
                  <div className="text-xs text-muted-foreground">4% of total</div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="quarter" className="pt-4">
            <div className="flex h-[150px] items-center justify-center">
              <p className="text-sm text-muted-foreground">Quarterly budget data will appear here</p>
            </div>
          </TabsContent>
          <TabsContent value="year" className="pt-4">
            <div className="flex h-[150px] items-center justify-center">
              <p className="text-sm text-muted-foreground">Yearly budget data will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

