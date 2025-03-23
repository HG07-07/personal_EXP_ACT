import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SavingsReport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings Report</CardTitle>
        <CardDescription>Track your savings progress</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="goals">Savings Goals</TabsTrigger>
            <TabsTrigger value="forecast">Forecast</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4">
                <div className="text-sm font-medium mb-1">Savings Rate</div>
                <div className="text-2xl font-bold">18.5%</div>
                <div className="text-xs text-muted-foreground">of monthly income</div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm font-medium mb-1">Monthly Average</div>
                <div className="text-2xl font-bold">$925</div>
                <div className="text-xs text-muted-foreground">saved per month</div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm font-medium mb-1">YTD Savings</div>
                <div className="text-2xl font-bold">$2,775</div>
                <div className="text-xs text-muted-foreground">saved this year</div>
              </div>
            </div>
            <div className="mt-6 h-[200px] flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Savings trend chart will appear here</p>
            </div>
          </TabsContent>
          <TabsContent value="goals" className="pt-4">
            <div className="h-[300px] flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Savings goals will appear here</p>
            </div>
          </TabsContent>
          <TabsContent value="forecast" className="pt-4">
            <div className="h-[300px] flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Savings forecast will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

