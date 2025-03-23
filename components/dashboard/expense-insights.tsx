"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExpenseInsights() {
  const [activeTab, setActiveTab] = useState("category")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Insights</CardTitle>
        <CardDescription>Visualize your spending patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="category" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="category">By Category</TabsTrigger>
            <TabsTrigger value="time">By Time</TabsTrigger>
            <TabsTrigger value="merchant">By Merchant</TabsTrigger>
          </TabsList>
          <TabsContent value="category" className="pt-4">
            <div className="flex h-[200px] items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Housing (35%)</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Food (25%)</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm">Transportation (15%)</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm">Entertainment (10%)</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm">Shopping (8%)</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                  <span className="text-sm">Others (7%)</span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="time" className="pt-4">
            <div className="flex h-[200px] items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Time-based expense chart will appear here</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="merchant" className="pt-4">
            <div className="flex h-[200px] items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Merchant-based expense chart will appear here</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

