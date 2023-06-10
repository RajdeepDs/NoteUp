"use client";
import Link from "next/link";
import { User } from "next-auth";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./user-avatar";

interface UserNavProp extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}
export default function UserNav({ user }: UserNavProp) {
  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{
            image: user?.image,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={"/dashboard"}>All Notes</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/dashboard/tasks"}>Tasks</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/dashboard/settings"}>Setting</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/login`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  );
}
