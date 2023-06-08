"use client";
import * as React from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { ButtonProps, buttonVariants } from "./ui/button";
import { CREATE_NOTE } from "@/graphql/mutations";

interface CreateNoteButtonProps extends ButtonProps {}

export const CreateNoteButton = ({
  className,
  variant,
  ...props
}: CreateNoteButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [createNote] = useMutation(CREATE_NOTE);

  const handleCreateNote = async () => {
    setIsLoading(true);
    try {
      const { data } = await createNote({
        variables: {
          title: "Untitled Note",
        },
      });
      setIsLoading(false);
      const noteId = data.createNote.id;
      router.push(`/editor/${noteId}`);
    } catch (error) {
      setIsLoading(false);
      console.error("Error creating note:", error);
    }
  };

  return (
    <button
      onClick={handleCreateNote}
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
};
