import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { getCurrentUser } from "@/lib/session";

export default async function Navigations() {
  const userExists = await getCurrentUser();
  console.log(userExists);
  
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
