import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import type { InsightRequest, InsightResponse } from "@shared/types.ts";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders, status: 200 });
  }

  try {
    const { transactions, timeframe, insightType } =
      (await req.json()) as InsightRequest;

    // Validate request
    if (
      !transactions ||
      !Array.isArray(transactions) ||
      transactions.length === 0
    ) {
      return new Response(
        JSON.stringify({
          error: "Invalid request: transactions array is required",
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        },
      );
    }

    // Further anonymize data by rounding amounts and removing any potentially identifying information
    const anonymizedData = transactions.map((t) => ({
      ...t,
      amount: Math.round(t.amount / 5) * 5, // Round to nearest $5
      id: `tx_${Math.random().toString(36).substring(2, 8)}`, // Replace with random ID
    }));

    // Prepare prompt for Gemini API
    const promptText = `
      Analyze the following anonymized financial transaction data and provide insights:
      
      Timeframe: ${timeframe}
      Insight Type Requested: ${insightType}
      
      Transaction Data (anonymized and rounded):
      ${JSON.stringify(anonymizedData, null, 2)}
      
      Please provide:
      1. 3-5 key insights about spending patterns
      2. 2-3 actionable recommendations
      3. A brief summary of overall financial health
      
      Format your response as JSON with the following structure:
      {
        "insights": ["insight 1", "insight 2", ...],
        "recommendations": ["recommendation 1", "recommendation 2", ...],
        "summary": "overall summary text"
      }
    `;

    // Call Gemini API via Pica passthrough
    const modelName = "gemini-1.5-flash";
    const apiUrl = `https://api.picaos.com/v1/passthrough/models/${modelName}:generateContent`;

    const requestBody = {
      contents: [
        {
          parts: [{ text: promptText }],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 1024,
      },
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "x-pica-secret": Deno.env.get("PICA_SECRET_KEY") || "",
        "x-pica-connection-key":
          Deno.env.get("PICA_GEMINI_CONNECTION_KEY") || "",
        "x-pica-action-id": "conn_mod_def::GCmd5BQE388::PISTzTbvRSqXx0N0rMa-Lw",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      return new Response(
        JSON.stringify({ error: "Failed to generate insights" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        },
      );
    }

    const geminiResponse = await response.json();

    // Extract the text content from Gemini response
    const textContent = geminiResponse.candidates[0].content.parts[0].text;

    // Parse the JSON response from the text content
    let insightData: InsightResponse;
    try {
      // Find JSON in the response (it might be wrapped in markdown code blocks)
      const jsonMatch = textContent.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        insightData = JSON.parse(jsonMatch[0]);
      } else {
        // Fallback if JSON parsing fails
        insightData = {
          insights: [
            "Could not generate specific insights from the provided data.",
          ],
          recommendations: [
            "Consider providing more transaction data for better insights.",
          ],
          summary: "Insufficient data for detailed analysis.",
        };
      }
    } catch (e) {
      console.error("Error parsing Gemini response:", e);
      insightData = {
        insights: [
          "Could not generate specific insights from the provided data.",
        ],
        recommendations: [
          "Consider providing more transaction data for better insights.",
        ],
        summary: "Insufficient data for detailed analysis.",
      };
    }

    return new Response(JSON.stringify(insightData), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
