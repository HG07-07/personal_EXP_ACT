"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function PrivacyNotice({
  variant = "banner",
}: {
  variant?: "banner" | "dialog" | "inline";
}) {
  const [showDialog, setShowDialog] = useState(false);

  const privacyPoints = [
    {
      icon: Shield,
      title: "Your data stays on our platform",
      description:
        "Your sensitive financial data never leaves our secure servers for any reason.",
    },
    {
      icon: Lock,
      title: "End-to-end encryption",
      description:
        "All your financial information is encrypted in transit and at rest.",
    },
    {
      icon: Eye,
      title: "Anonymized AI processing",
      description:
        "When using AI insights, your data is anonymized and rounded to protect your identity.",
    },
    {
      icon: CheckCircle,
      title: "You're in control",
      description:
        "Opt in or out of features at any time. Your data belongs to you.",
    },
  ];

  if (variant === "dialog") {
    return (
      <>
        <Button variant="link" onClick={() => setShowDialog(true)}>
          Privacy Policy
        </Button>
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Your Privacy is Our Priority</DialogTitle>
              <DialogDescription>
                ExpenseEase is built with privacy at its core. Here's how we
                protect your data.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              {privacyPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-0.5 bg-primary/10 p-2 rounded-full">
                    <point.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
              <p className="text-sm text-muted-foreground mt-2">
                For AI-powered insights, we use advanced anonymization
                techniques to ensure your personal and financial details remain
                private. Our system generates a unique ID for processing that
                cannot be traced back to you by any third-party services.
              </p>
            </div>
            <DialogFooter>
              <Button onClick={() => setShowDialog(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  if (variant === "inline") {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Your Privacy is Our Priority</h3>
        <div className="grid gap-4">
          {privacyPoints.map((point, index) => (
            <div key={index} className="flex gap-3">
              <div className="mt-0.5 bg-primary/10 p-2 rounded-full">
                <point.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">{point.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default banner variant
  return (
    <div className="relative backdrop-blur-md bg-background/50 border border-border/50 rounded-lg p-4 shadow-lg">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="bg-primary/10 p-2 rounded-full">
          <Shield className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium">Your data never leaves our platform</h3>
          <p className="text-sm text-muted-foreground">
            We use advanced anonymization techniques to protect your privacy
            when generating AI insights.
          </p>
        </div>
        <Button size="sm" variant="outline" onClick={() => setShowDialog(true)}>
          Learn More
        </Button>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Your Privacy is Our Priority</DialogTitle>
            <DialogDescription>
              ExpenseEase is built with privacy at its core. Here's how we
              protect your data.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            {privacyPoints.map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-0.5 bg-primary/10 p-2 rounded-full">
                  <point.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
            <p className="text-sm text-muted-foreground mt-2">
              For AI-powered insights, we use advanced anonymization techniques
              to ensure your personal and financial details remain private. Our
              system generates a unique ID for processing that cannot be traced
              back to you by any third-party services.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowDialog(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
