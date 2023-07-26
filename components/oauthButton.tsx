"use client";
import * as React from "react";
import { signIn } from "next-auth/react";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

export default function OauthButton() {
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-accent-1" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-accent-2">Or continue with</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <button
          type="button"
          className={cn(buttonVariants({ variant: "oauth" }))}
          onClick={() => {
            setIsGitHubLoading(true);
            signIn("github", {
              callbackUrl: `${window.location.origin}/dashboard`,
            });
          }}
          disabled={isGoogleLoading || isGitHubLoading}
        >
          {isGitHubLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          Github
        </button>
        <button
          type="button"
          className={cn(buttonVariants({ variant: "oauth" }))}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn("google", {
              callbackUrl: `${window.location.origin}/dashboard`,
            });
          }}
          disabled={isGoogleLoading || isGitHubLoading}
        >
          {isGoogleLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </button>
      </div>
    </>
  );
}
