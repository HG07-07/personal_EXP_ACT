import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  CreditCard,
  DollarSign,
  FileImage,
  FileSpreadsheet,
  LineChart,
  Receipt,
  Shield,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background">
      {/* Header for Landing Page */}
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <DollarSign className="h-6 w-6" />
            <span className="font-bold text-xl">ExpenseEase</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-primary transition-colors hidden md:inline-block"
            >
              Dashboard
            </Link>
            <ThemeToggle />
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />

        <div className="container px-4 py-20 md:py-32 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Simplify Your{" "}
              <span className="text-primary">Personal Finances</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Track expenses, manage budgets, and gain financial insights with
              our intuitive expense management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                asChild
              >
                <Link href="/dashboard">Take a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Glass Card Features */}
      <div className="container px-4 py-20 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need to Manage Your Finances
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative backdrop-blur-md bg-background/50 border border-border/50 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-primary/10 p-3 rounded-2xl w-fit mb-6">
                <Receipt className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expense Tracking</h3>
              <p className="text-muted-foreground mb-4">
                Effortlessly track and categorize your expenses with receipt
                scanning and automatic categorization.
              </p>
              <Link
                href="/dashboard/expenses"
                className="text-primary font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative backdrop-blur-md bg-background/50 border border-border/50 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-blue-500/10 p-3 rounded-2xl w-fit mb-6">
                <DollarSign className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Budget Management</h3>
              <p className="text-muted-foreground mb-4">
                Create and manage budgets for different categories and track
                your spending against them.
              </p>
              <Link
                href="/dashboard/budgets"
                className="text-blue-500 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative backdrop-blur-md bg-background/50 border border-border/50 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-purple-500/10 p-3 rounded-2xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Insights</h3>
              <p className="text-muted-foreground mb-4">
                Gain valuable insights into your spending habits with detailed
                reports and visualizations.
              </p>
              <Link
                href="/dashboard/reports"
                className="text-purple-500 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Feature Card 4 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative backdrop-blur-md bg-background/50 border border-border/50 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-green-500/10 p-3 rounded-2xl w-fit mb-6">
                <LineChart className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trend Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Track your financial progress over time and identify spending
                patterns to optimize your budget.
              </p>
              <Link
                href="/dashboard/reports/insights"
                className="text-green-500 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Feature Card 5 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative backdrop-blur-md bg-background/50 border border-border/50 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-yellow-500/10 p-3 rounded-2xl w-fit mb-6">
                <CreditCard className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Payment Methods</h3>
              <p className="text-muted-foreground mb-4">
                Connect and manage multiple payment methods and accounts in one
                place for comprehensive tracking.
              </p>
              <Link
                href="/dashboard/payment-methods"
                className="text-yellow-500 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Feature Card 6 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-primary/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative backdrop-blur-md bg-background/50 border border-border/50 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-red-500/10 p-3 rounded-2xl w-fit mb-6">
                <Shield className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
              <p className="text-muted-foreground mb-4">
                Your financial data is encrypted and secure. We prioritize your
                privacy and data protection.
              </p>
              <Link
                href="/dashboard/settings"
                className="text-red-500 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Data Import Section */}
      <div className="container px-4 py-20 mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl opacity-70"></div>
          <div className="relative backdrop-blur-md bg-background/30 border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-4">
              Multiple Ways to Import Your Data
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the method that works best for you to easily bring your
              financial data into ExpenseEase.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Manual Entry */}
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Receipt className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Manual Entry</h3>
                <p className="text-sm text-muted-foreground">
                  Quickly add individual expenses and transactions through our
                  simple form.
                </p>
              </div>

              {/* CSV/Excel Import */}
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <div className="bg-green-500/10 p-4 rounded-full mb-4">
                  <FileSpreadsheet className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">CSV/Excel Import</h3>
                <p className="text-sm text-muted-foreground">
                  Upload spreadsheets from your bank or other financial
                  services.
                </p>
              </div>

              {/* Receipt Scanning */}
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <div className="bg-blue-500/10 p-4 rounded-full mb-4">
                  <FileImage className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Receipt Scanning</h3>
                <p className="text-sm text-muted-foreground">
                  Take a photo of your receipts and we'll extract the data
                  automatically.
                </p>
              </div>

              {/* Bank Connection */}
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <div className="bg-purple-500/10 p-4 rounded-full mb-4">
                  <CreditCard className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Bank Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Securely connect your bank accounts for automatic transaction
                  import.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container px-4 py-20 mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-3xl blur-3xl opacity-70"></div>
          <div className="relative backdrop-blur-md bg-background/30 border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
              <blockquote className="text-xl md:text-2xl italic mb-6">
                "ExpenseEase has completely transformed how I manage my
                finances. The insights and budgeting tools have helped me save
                over $500 per month!"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  JD
                </div>
                <div className="ml-4 text-left">
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">
                    Financial Analyst
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container px-4 py-20 mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-70"></div>
          <div className="relative backdrop-blur-md bg-background/30 border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of users who have transformed their financial
                habits with ExpenseEase.
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/dashboard">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <DollarSign className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">ExpenseEase</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ExpenseEase. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
