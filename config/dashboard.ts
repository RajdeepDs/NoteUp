import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "All Notes",
      href: "/dashboard",
      icon: "inbox",
    },
    // {
    //   title: "Tasks",
    //   href: "/dashboard/tasks",
    //   icon: "list",
    // },
    {
      title: "Profile",
      href: "/dashboard/settings",
      icon: "profile",
    },
  ],
};
