"use client";

import * as React from "react";
import { Note } from "@prisma/client";
import { useMutation } from "@apollo/client";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
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
