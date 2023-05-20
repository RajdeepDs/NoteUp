"use client";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface UserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}
export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="mb-2 rounded-lg border border-accent-2 p-4">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold">{user.name}</h1>
          <p className="">{user.email}</p>
        </div>
        {user.image && (
          <Image
            src={user.image}
            alt="avatar"
            width={100}
            height={100}
            priority={true}
            className="rounded-full"
          />
        )}
      </div>
      <button
        onClick={() => signOut()}
        className={cn(buttonVariants({ variant: "ghostred", size: "default" }))}
      >
        Sign Out
      </button>
    </div>
  );
}
