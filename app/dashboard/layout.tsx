// Replace this

import { Sidebar } from "@/components/sidebar";
import DashboardHeader from "@/components/dashboard/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

// with

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
