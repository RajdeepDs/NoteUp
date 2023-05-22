"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "./ui/button";
import { toast } from "./ui/use-toast";

interface NoteCreateButtonProps extends ButtonProps {}

export default function CreateNoteButton({
  className,
  variant,
  ...props
}: NoteCreateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  async function onClick() {
    setIsLoading(true);

    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Note",
      }),
    });

    setIsLoading(false);

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your note was not created. Please try again.",
        variant: "destructive",
      });
    }

    const note = await response.json();

    // This forces a cache invalidation.
    router.refresh();

    router.push(`/editor/${note.id}`);
  }
  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: "softblue" }),
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.newNote className="mr-2 h-4 w-4" />
      )}
      New Note
    </button>
  );
}
