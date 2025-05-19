"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Home,
  PieChart,
  Receipt,
  Settings,
  UserCheck,
  Upload,
  Sparkles,
} from "lucide-react";

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Expenses",
    href: "/dashboard/expenses",
    icon: Receipt,
  },
  {
    title: "Budgets",
    href: "/dashboard/budgets",
    icon: DollarSign,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "AI Insights",
    href: "/dashboard/insights",
    icon: Sparkles,
  },
  {
    title: "Import Data",
    href: "/dashboard/import",
    icon: Upload,
  },
  {
    title: "Approvals",
    href: "/dashboard/approvals",
    icon: UserCheck,
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: PieChart,
  },
  {
    title: "Payment Methods",
    href: "/dashboard/payment-methods",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-background md:block">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <DollarSign className="h-6 w-6" />
            <span className="hidden lg:inline-block">ExpenseEase</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 lg:px-4">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "transparent",
                )}
              >
                <link.icon className="h-4 w-4" />
                <span>{link.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
