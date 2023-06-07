"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "./ui/button";
import { toast } from "./ui/use-toast";
import { CREATE_NOTE } from "@/graphql/mutations";
import { GET_NOTES } from "@/graphql/queries";

interface NoteCreateButtonProps extends ButtonProps {}

export default function CreateNoteButton({
  className,
  variant,
  ...props
}: NoteCreateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [createNote] = useMutation(CREATE_NOTE);
  async function onClick() {
    try {
      const { data } = await createNote({
        variables: { title: "Untitled Note" },
        refetchQueries: [{ query: GET_NOTES }],
      });
      if (data?.createNote?.id) {
        router.refresh();
        router.push(`/editor/${data.createNote.id}`);
      } else {
        throw new Error("Failed to create note");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "Your note was not created. Please try again",
        variant: "destructive",
      });
    }
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
