"use client";

import { Note } from "@prisma/client";
import * as React from "react";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

interface NoteDeleteItemProps {
  note: Pick<Note, "id" | "title">;
}
async function deleteNote(noteId: string) {
  const response = await fetch(`/api/notes/${noteId}`, {
    method: "DELETE",
  });

  if (!response?.ok) {
    toast({
      title: "Something went wrong.",
      description: "Your note was not deleted. Please try again.",
      variant: "destructive",
    });
  }

  return true;
}

export function DeleteNoteItem({ note }: NoteDeleteItemProps) {
  const router = useRouter();
  const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false);
  async function onClick() {
    setIsDeleteLoading(true);

    const deleted = await deleteNote(note.id);
    if (deleted) {
      setIsDeleteLoading(false);
      router.refresh();
    }
  }
  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ variant: "destructive" }))}
      disabled={isDeleteLoading}
    >
      {isDeleteLoading && (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      )}
      Delete
    </button>
  );
}
