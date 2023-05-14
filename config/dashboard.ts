import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Notes",
      href: "/dashboard",
      icon: "inbox",
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: "profile",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
};
