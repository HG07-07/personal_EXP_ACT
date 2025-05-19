export interface AnonymizedTransaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  type: "debit" | "credit";
}

export interface InsightRequest {
  transactions: AnonymizedTransaction[];
  timeframe: string;
  insightType: "spending" | "budget" | "savings" | "general";
}

export interface InsightResponse {
  insights: string[];
  recommendations: string[];
  summary: string;
}
