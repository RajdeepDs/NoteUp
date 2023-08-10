import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function Navigations({ user }: any) {
  return (
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
        className={cn(buttonVariants({ variant: "outline" }))}
        href={user ? "/dashboard" : "/login"}
      >
        {user ? "Dashboard" : "Sign Up"}
      </Link>
    </div>
  );
}
