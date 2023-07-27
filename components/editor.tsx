"use client";
import * as React from "react";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TextareaAutosize from "react-textarea-autosize";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import EditorJS from "@editorjs/editorjs";
import { useMutation } from "@apollo/client";

import { cn } from "@/lib/utils";
import Tags from "./tags";
import { Icons } from "./icons";
import { INote } from "@/types";
import { buttonVariants } from "./ui/button";
import { notePatchSchema } from "@/lib/validations/note";
import { UPDATE_NOTE } from "@/graphql/mutations";

type EditorProps = {
  note: INote;
};

type FormData = z.infer<typeof notePatchSchema>;

export function Editor({ note }: EditorProps) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(notePatchSchema),
  });
  const ref = React.useRef<EditorJS>();
  const router = useRouter();
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const initializeEditor = React.useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Table = (await import("@editorjs/table")).default;
    const List = (await import("@editorjs/list")).default;
    const Code = (await import("@editorjs/code")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;

    const body = note ? notePatchSchema.parse(note) : null;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Type here to write your note...",
        inlineToolbar: true,
        data: body?.content,
        tools: {
          header: Header,
          // linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      });
    }
  }, [note]);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);
  React.useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);
  const [updateNote] = useMutation(UPDATE_NOTE);
  async function onSubmit(data: FormData) {
    setIsSaving(true);
    try {
      const blocks = await ref.current?.save();
      const response = await updateNote({
        variables: {
          id: note.id,
          title: data.title,
          content: blocks,
        },
      });
      setIsSaving(false);
      router.refresh();
      console.log("Note updated: ", response.data.updateNote);
    } catch (error) {
      console.error("Error updating note: ", error);
    }
  }
  if (!isMounted) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link
              href={"/dashboard"}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <>
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                Back
              </>
            </Link>
          </div>
          <button type="submit" className={cn(buttonVariants())}>
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Save</span>
          </button>
        </div>
        <div className="mx-auto w-[800px]">
          <TextareaAutosize
            autoFocus
            id="title"
            defaultValue={note?.title}
            placeholder="Note title"
            className="bg-background w-full resize-none appearance-none overflow-hidden text-5xl font-bold focus:outline-none"
            {...register("title", { required: true })}
          />
          <div className="mt-2 flex flex-col border-b p-2">
            <Tags />
          </div>
          <div id="editor" className="min-h-[500px]" />
          <p className="bottom-9 text-sm text-gray-500">
            Use <kbd className="rounded bg-slate-200 p-1">Tab</kbd> to open the
            command menu.
          </p>
        </div>
      </div>
    </form>
  );
}
