"use client";
import Link from "next/link";
import TextareaAutosize from "react-textarea-autosize";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { INote } from "@/types";

type EditorProps = {
  note: INote;
};

export function Editor({ note }: EditorProps) {
  return (
    <form>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link
              href={"/dashboard"}
              className={cn(buttonVariants({ variant: "ghostblack" }))}
            >
              <>
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                Back
              </>
            </Link>
          </div>
          <button type="submit" className={cn(buttonVariants())}>
            {}
            <span>Save</span>
          </button>
        </div>
        <div className="mx-auto w-[800px]">
          <TextareaAutosize
            autoFocus
            id="title"
            defaultValue={note?.title}
            placeholder="Note title"
            className="w-full resize-none appearance-none overflow-hidden bg-background text-5xl font-bold focus:outline-none"
          />
          <div className="mt-2 flex rounded-md bg-accent-1 p-2">
            <ul className="flex space-x-3">
              {note?.tags?.map((tag) => (
                <li
                  key={tag.id}
                  className="rounded-sm bg-accent-2 p-1 text-xs text-accent-5 "
                >
                  {tag.name}
                  <button className="ml-1 p-1 hover:bg-accent-3/50">x</button>
                </li>
              ))}
              <button className="rounded-sm bg-accent-2 p-1 text-xs text-accent-5">
                + Add Tag
              </button>
            </ul>
          </div>
          <div id="editor" className="min-h-[500px]" />
          <p className="text-gray-500 text-sm">
            Use <kbd>Tab</kbd> to open the command menu.
          </p>
        </div>
      </div>
    </form>
  );
}
