"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";

interface MainNavProps {
  items: MainNavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="flex items-start gap-2">
      {items.map((item, index) => {
        return (
          item.href && (
            <Link key={index} href={item.href}>
              <span
                className={cn(
                  "text-accent-3 hover:bg-accent-2 group flex items-center rounded-md px-3 py-2 text-lg font-medium focus-within:text-foreground",
                  path === item.href
                    ? "bg-accent-2 text-foreground"
                    : "transparent"
                )}
              >
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
