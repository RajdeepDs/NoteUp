"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./ui/button";

export default function Navigations() {
  const [userExists, setUserExists] = useState<boolean>(true);
  //   Need to add a useEffect to check if user exists

  return (
    <>
      <div className="flex items-center space-x-4">
        <Link
          href="#about"
          className="hidden text-accent-3 hover:text-primary md:flex"
        >
          About
        </Link>
        <Link
          href="#feature"
          className="hidden text-accent-3 hover:text-primary md:flex"
        >
          Feature
        </Link>
        <Link
          className={cn(buttonVariants({ variant: "ghost" }))}
          href={userExists ? "/dashboard" : "/login"}
        >
          {userExists ? "Dashboard" : "Sign Up"}
        </Link>
      </div>
    </>
  );
}
