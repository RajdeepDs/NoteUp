import { Metadata } from "next";
import { redirect } from "next/navigation";
import Image from "next/image";

import { getCurrentUser } from "@/lib/session";
import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "@/components/DashboardNav";
import UserNav from "@/components/user-nav";
import Link from "next/link";

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
      <header className="border-border bg-background sticky top-0 z-40 border-b">
        <div className="container flex h-16 items-center py-4 justify-between">
          <Link
            href={"/dashboard/settings"}
            className="border-border mr-20 hidden cursor-pointer items-center space-x-4 rounded-md border p-2 md:flex"
          >
            <div className="h-5 w-5 rounded-sm bg-purple-400" />
            <h1 className="text-lg">{user.name}</h1>
          </Link>
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="logo" width="35" height="35" />
              <span className="noteup text-2xl leading-none">NoteUp</span>
            </div>
          </Link>
          <div className=" flex">
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
