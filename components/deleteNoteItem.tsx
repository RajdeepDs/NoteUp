"use client";

import { Note } from "@prisma/client";
import * as React from "react";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { useMutation } from "@apollo/client";
import { DELETE_NOTE } from "@/graphql/mutations";
import { GET_NOTES } from "@/graphql/queries";

interface NoteDeleteItemProps {
  note: Pick<Note, "id" | "title">;
}

export function DeleteNoteItem({ note }: NoteDeleteItemProps) {
  const [isDeleteLoading, setIsDeleteLoading] = React.useState(false);
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: { id: note.id },
    refetchQueries: [{ query: GET_NOTES }],
  });
  async function onClick() {
    setIsDeleteLoading(true);
    const deleted = await deleteNote({ variables: { id: note.id } });
    if (deleted) {
      setIsDeleteLoading(false);
    }
  }
  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ variant: "ghostred" }))}
      disabled={isDeleteLoading}
    >
      {isDeleteLoading && (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      )}
      Delete
    </button>
  );
}
