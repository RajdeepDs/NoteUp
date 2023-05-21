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
    <>
      <aside className=" flex h-screen w-1/6 flex-col bg-accent-2/50  p-2">
        <div className="flex items-center justify-center border">
          <Avatar user={{ image: user.image || null }} />
          <h1 className="ml-2 font-mono text-lg">{user.name}</h1>
          <ChevronDown className="ml-2 h-4 w-4" />
        </div>
      </aside>
    </>
  );
}
