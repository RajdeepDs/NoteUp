import { Metadata } from "next";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { DashboardNav } from "@/components/DashboardNav";
import { dashboardConfig } from "@/config/dashboard";
import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";
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
    <div>
      <header className="container flex items-center justify-between border-b border-accent-2 py-2">
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="logo" width={35} height={35} />
          <h1 className="noteup text-2xl">NoteUp</h1>
        </div>
        <Avatar user={{ image: user.image || null }} />
      </header>
      <div className="container mt-4 grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
