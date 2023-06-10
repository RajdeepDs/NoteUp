import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
    },
  ],
  sidebarNav: [
    {
      title: "All Notes",
      href: "/dashboard",
      icon: "inbox",
    },
    {
      title: "Tasks",
      href: "/dashboard/tasks",
      icon: "list",
    },
  ],
  settingSidebarNav: [
    {
      title: "Profile",
      href: "/dashboard/settings",
    },
    {
      title: "Account",
      href: "/dashboard/settings/account",
    },
    {
      title: "Appearance",
      href: "/dashboard/settings/appearance",
    },
  ],
};
