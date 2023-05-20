import Link from "next/link";
import { Note } from "@prisma/client";
import { formatDate } from "@/lib/utils";
import { DeleteNoteItem } from "./deleteNoteItem";

interface NoteItemProps {
  note: Pick<Note, "id" | "title" | "published" | "createdAt">;
}

export function NoteItem({ note }: NoteItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${note.id}`}
          className="font-semibold hover:underline"
        >
          {note.title}
        </Link>
        <div>
          <p className="text-sm text-accent-4">
            {formatDate(note.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <DeleteNoteItem note={{ id: note.id, title: note.title }} />
    </div>
  );
}
