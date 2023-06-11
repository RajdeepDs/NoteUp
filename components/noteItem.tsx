import Link from "next/link";

import { INote } from "@/types";
import { cn, formatDate } from "@/lib/utils";
import { DeleteNoteItem } from "./deleteNoteItem";
import { buttonVariants } from "./ui/button";

interface NoteItemProps {
  note: INote;
}

export function NoteItem({ note }: NoteItemProps) {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-md border">
      <div className="bg-muted"></div>
      <div className="flex flex-col space-y-4 py-4">
        <div className="">
          <h1 className="font-semibold">{note.title}</h1>
          {/* Tags comes here */}
          <div className="">
            {note?.tags?.map((tag) => (
              <span
                key={tag.id}
                className="inline-block rounded-full bg-gray-200 px-2 text-sm font-semibold text-gray-700"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground">{formatDate(note.createdAt)}</p>
        </div>
        <div className="flex space-x-2">
          <button className={cn(buttonVariants({ variant: "secondary" }))}>
            <Link href={`/editor/${note.id}`}>Edit</Link>
          </button>
          <DeleteNoteItem note={{ id: note.id, title: note.title }} />
        </div>
      </div>
    </div>
  );
}
