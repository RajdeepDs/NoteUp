import Link from "next/link";

import { formatDate } from "@/lib/utils";
import { DeleteNoteItem } from "./deleteNoteItem";
import { INote } from "@/types";

interface NoteItemProps {
  note: INote;
}

export function NoteItem({ note }: NoteItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`http://localhost:3000/editor/${note.id}`}
          className="font-semibold hover:underline"
        >
          {note.title}
        </Link>
        <div>
          <p className="text-sm text-accent-4">
            {/* {formatDate(note.createdAt?.toISOString())} */}
          </p>
        </div>
      </div>
      <DeleteNoteItem note={{ id: note.id, title: note.title }} />
    </div>
  );
}
