import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Search",
      href: "/dashboard/search",
      icon: "searchNote",
    },
    {
      title: "All Notes",
      href: "/dashboard",
      icon: "inbox",
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: "profile",
    },
    {
      title: "Trash",
      href: "/dashboard/trash",
      icon: "trashNote",
    },
  ],
};
