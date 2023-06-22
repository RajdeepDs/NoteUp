import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "@/components/DashboardNav";
import UserNav from "@/components/user-nav";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="container flex h-16 items-center py-4">
          <div className="mr-20 hidden items-center space-x-4 rounded-md border border-border p-2 md:flex">
            <div className="h-5 w-5 rounded-sm bg-purple-400" />
            <h1 className="text-lg">Rajdeep Das</h1>
          </div>
          <div className="ml-auto flex">
            <UserNav
              user={{
                name: user.name,
                email: user.email,
                image: user.image,
              }}
            />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
