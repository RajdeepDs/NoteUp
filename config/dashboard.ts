import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Settings",
      href: "/settings",
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
      href: "/settings",
      icon: "profile",
    },
    {
      title: "Account",
      href: "/settings/account",
      icon: "account",
    },
    {
      title: "Appearance",
      href: "/settings/appearance",
      icon: "appearance",
    },
  ],
};
