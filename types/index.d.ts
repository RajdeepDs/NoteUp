import type { Icon } from "lucide-react";

import { Icons } from "@/components/icons";

export type MainNavItem = {
  title: string;
  href: string;
};

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);
export type SettingsSidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  settingSidebarNav: SettingsSidebarNavItem[];
};

import { Note, Tag } from "@prisma/client";
interface INote extends Note {
  notes: Note[];
  tags?: Tag[];
}

interface ITag extends Tag {
  tags: Tag[];
}
