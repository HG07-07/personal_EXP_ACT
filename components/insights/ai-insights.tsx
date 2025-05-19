"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface InsightResponse {
  insights: string[];
  recommendations: string[];
  summary: string;
}

export function AIInsights() {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<InsightResponse | null>(null);
  const [timeframe, setTimeframe] = useState("last-30-days");
  const [insightType, setInsightType] = useState("spending");
  const { toast } = useToast();
  const supabase = createClientComponentClient();

  // Sample transaction data for demo purposes
  const sampleTransactions = [
    {
      id: "tx_1",
      amount: 120,
      category: "Groceries",
      date: "2023-07-01",
      type: "debit",
    },
    {
      id: "tx_2",
      amount: 45,
      category: "Dining",
      date: "2023-07-03",
      type: "debit",
    },
    {
      id: "tx_3",
      amount: 60,
      category: "Transportation",
      date: "2023-07-05",
      type: "debit",
    },
    {
      id: "tx_4",
      amount: 1200,
      category: "Salary",
      date: "2023-07-01",
      type: "credit",
    },
    {
      id: "tx_5",
      amount: 85,
      category: "Utilities",
      date: "2023-07-10",
      type: "debit",
    },
    {
      id: "tx_6",
      amount: 35,
      category: "Entertainment",
      date: "2023-07-15",
      type: "debit",
    },
    {
      id: "tx_7",
      amount: 200,
      category: "Shopping",
      date: "2023-07-18",
      type: "debit",
    },
    {
      id: "tx_8",
      amount: 50,
      category: "Dining",
      date: "2023-07-22",
      type: "debit",
    },
    {
      id: "tx_9",
      amount: 40,
      category: "Transportation",
      date: "2023-07-25",
      type: "debit",
    },
    {
      id: "tx_10",
      amount: 75,
      category: "Groceries",
      date: "2023-07-28",
      type: "debit",
    },
  ];

  const generateInsights = async () => {
    setLoading(true);
    try {
      // In a real app, you would fetch actual transaction data from your database
      // const { data: transactions } = await supabase.from('transactions').select('*').order('date', { ascending: false }).limit(100)

      // Call the Edge Function to generate insights
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-generate-insights",
        {
          body: {
            transactions: sampleTransactions,
            timeframe: timeframe,
            insightType: insightType,
          },
        },
      );

      if (error) {
        throw new Error(error.message);
      }

      setInsights(data as InsightResponse);
    } catch (error) {
      console.error("Error generating insights:", error);
      toast({
        title: "Error generating insights",
        description:
          "There was a problem connecting to the AI service. Please try again later.",
        variant: "destructive",
      });

      // Fallback to sample insights for demo purposes
      setInsights({
        insights: [
          "Your highest spending category is Groceries at $195 (23% of total expenses).",
          "You spent $95 on Dining this month, which is 15% more than your monthly average.",
          "Transportation costs are consistent at around $100 per month.",
        ],
        recommendations: [
          "Consider meal planning to reduce your grocery expenses by 10-15%.",
          "Setting up automatic transfers to savings could help you save an additional $150 per month.",
        ],
        summary:
          "Your spending is generally well-balanced across categories. Your income covers your expenses with about 20% remaining for savings or debt reduction.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI-Powered Financial Insights
        </CardTitle>
        <CardDescription>
          Get personalized insights and recommendations based on your financial
          data.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Time Period</label>
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-7-days">Last 7 days</SelectItem>
                  <SelectItem value="last-30-days">Last 30 days</SelectItem>
                  <SelectItem value="last-90-days">Last 90 days</SelectItem>
                  <SelectItem value="year-to-date">Year to date</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Insight Type</label>
              <Select value={insightType} onValueChange={setInsightType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select insight type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spending">Spending Analysis</SelectItem>
                  <SelectItem value="budget">Budget Recommendations</SelectItem>
                  <SelectItem value="savings">Savings Opportunities</SelectItem>
                  <SelectItem value="general">
                    General Financial Health
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={generateInsights}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating Insights...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Insights
              </>
            )}
          </Button>

          {insights && (
            <div className="mt-4">
              <Tabs defaultValue="insights">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                  <TabsTrigger value="recommendations">
                    Recommendations
                  </TabsTrigger>
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                </TabsList>
                <TabsContent value="insights" className="space-y-4 pt-4">
                  <ul className="space-y-2">
                    {insights.insights.map((insight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="recommendations" className="space-y-4 pt-4">
                  <ul className="space-y-2">
                    {insights.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="summary" className="pt-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <p>{insights.summary}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start border-t pt-4">
        <p className="text-xs text-muted-foreground">
          <strong>Privacy Note:</strong> Your financial data is anonymized
          before processing. No personally identifiable information is shared
          with AI services.
        </p>
      </CardFooter>
    </Card>
  );
}
