import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MonthlyReport } from "@/components/reports/monthly-report"
import { CategoryReport } from "@/components/reports/category-report"
import { TrendReport } from "@/components/reports/trend-report"
import { ReportSkeleton } from "@/components/skeletons/report-skeleton"

export default function ReportsPage() {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-4">
      <h1 className="text-2xl font-bold tracking-tight">Reports & Analytics</h1>
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="monthly">Monthly Overview</TabsTrigger>
          <TabsTrigger value="category">Category Analysis</TabsTrigger>
          <TabsTrigger value="trends">Spending Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Overview</CardTitle>
              <CardDescription>Your expense summary for the current month</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<ReportSkeleton />}>
                <MonthlyReport />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="category">
          <Card>
            <CardHeader>
              <CardTitle>Category Analysis</CardTitle>
              <CardDescription>Breakdown of expenses by category</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<ReportSkeleton />}>
                <CategoryReport />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Spending Trends</CardTitle>
              <CardDescription>How your spending has changed over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<ReportSkeleton />}>
                <TrendReport />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

