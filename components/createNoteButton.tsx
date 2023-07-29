"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { ButtonProps, buttonVariants } from "./ui/button";
import { CREATE_NOTE } from "@/graphql/mutations";
import { useToast } from "./ui/use-toast";

interface CreateNoteButtonProps extends ButtonProps {}

export const CreateNoteButton = ({
  className,
  variant,
  ...props
}: CreateNoteButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [createNote] = useMutation(CREATE_NOTE);
  const { toast } = useToast();
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
      toast({
        title: "Note created",
        description:
          "Your note has been created. You can start editing it now.",
      });
      router.push(`/editor/${noteId}`);
    } catch (error) {
      setIsLoading(false);
      console.error("Error creating note:", error);
      toast({
        description: "Error creating note",
      });
    }
  };

  return (
    <button
      onClick={handleCreateNote}
      className={cn(
        buttonVariants({}),
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
