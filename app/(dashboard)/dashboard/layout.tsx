import { Metadata } from "next";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { DashboardNav } from "@/components/DashboardNav";
import { dashboardConfig } from "@/config/dashboard";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <header className="container flex items-center justify-between border-b py-2">
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="logo" width={35} height={35} />
          <h1 className="noteup text-2xl">NoteUp</h1>
        </div>
        <Avatar />
      </header>
      <div className="container mt-4 grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </>
  );
}
