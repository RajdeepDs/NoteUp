import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronDown } from "lucide-react";

import Avatar from "@/components/Avatar";
import { getCurrentUser } from "@/lib/session";
import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "@/components/DashboardNav";
import { MainNav } from "@/components/main-nav";
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
    return notFound();
  }

  return (
    <div className="flex flex-col">
      <header className="flex border-b py-2">
        <div className="flex items-center space-x-4 rounded-md border p-2">
          <div className="h-5 w-5 rounded-sm bg-purple-400" />
          <h1 className="text-lg">Rajdeep Das</h1>
        </div>
        <div className="flex">
          <MainNav items={dashboardConfig.mainNav} />
        </div>
        <UserNav
          user={{
            name: user.name,
            email: user.email,
            image: user.image,
          }}
        />
      </header>
      <aside className=" flex h-screen min-w-[12rem] flex-col space-y-8 p-2">
        {/* <div className="flex items-center justify-start">
          <Avatar user={{ image: user.image || null }} />
          <h1 className="ml-2 font-mono text-lg">{user.name}</h1>
          <ChevronDown className="ml-2 h-4 w-4" />
        </div> */}
        <div className="flex flex-col">
          {/* <DashboardNav items={dashboardConfig.sidebarNav} /> */}
        </div>
      </aside>
      <main className="flex w-full flex-1 flex-col overflow-hidden px-12 pt-12">
        {/* {children} */}
      </main>
    </div>
  );
}
