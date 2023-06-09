import type { Icon } from "lucide-react";

import { Icons } from "@/components/icons";

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

export type DashboardConfig = {
  sidebarNav: SidebarNavItem[];
};

import { Note, Tag, User } from "@prisma/client";
interface INote extends Note {
  notes: Note[];
  tags?: Tag[];
}

interface ITag extends Tag {
  tags: Tag[];
}
interface IUser extends User {
  user: User;
}