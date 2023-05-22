import { Metadata } from "next";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { DashboardNav } from "@/components/DashboardNav";
import { dashboardConfig } from "@/config/dashboard";
import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";
import { Icons } from "@/components/icons";
import { ChevronDown } from "lucide-react";
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
    return notFound();
  }
  return (
    <div className="flex">
      <aside className=" flex h-screen w-1/6 flex-col space-y-8 bg-accent-2/50 p-2">
        <div className="flex items-center justify-start">
          <Avatar user={{ image: user.image || null }} />
          <h1 className="ml-2 font-mono text-lg">{user.name}</h1>
          <ChevronDown className="ml-2 h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </div>
      </aside>
      <main className="flex w-full flex-1 flex-col overflow-hidden px-12 pt-12">
        {children}
      </main>
    </div>
  );
}
