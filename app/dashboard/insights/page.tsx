import { AIInsights } from "@/components/insights/ai-insights";
import { PrivacyNotice } from "@/components/privacy-notice";

export default function InsightsPage() {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          AI-Powered Insights
        </h1>
        <p className="text-muted-foreground">
          Get personalized financial insights and recommendations.
        </p>
      </div>

      <div className="mb-4">
        <PrivacyNotice variant="inline" />
      </div>

      <div className="grid gap-6">
        <AIInsights />
      </div>
    </div>
  );
}
