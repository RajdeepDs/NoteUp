import { DashboardNav } from "@/components/DashboardNav";
import { MainNav } from "@/components/main-nav";
import { dashboardConfig } from "@/config/dashboard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Settings",
  description: "Settings Page",
};
interface SettingsLayoutProps {
  children: React.ReactNode;
}
export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="container">
      <header className="border-b py-2">
        <MainNav items={dashboardConfig.mainNav} />
      </header>
      <div className="container mt-4 grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.settingSidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
