import { INote } from "@/types";
import { formatDate } from "@/lib/utils";
import { Icons } from "./icons";
import MoreOperations from "./more-operations";
import { Skeleton } from "@/components/ui/skeleton";
interface NoteItemProps {
  note: INote;
}

export function NoteItem({ note }: NoteItemProps) {
  return (
    <div className="relative flex flex-col space-y-2 rounded-md border p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">{note.title}</h1>
      </div>
      <div className="flex items-center">
        <Icons.calender className="mr-2 h-4 w-4 text-accent-3" />
        <span className="text-accent-3">{formatDate(note.createdAt)}</span>
      </div>
      <div className="flex">
        {note?.tags?.map((tag) => (
          <span
            key={tag.id}
            className="inline-block rounded-full bg-accent-2 px-2 text-sm text-accent-3"
          >
            {tag.name}
          </span>
        ))}
      </div>
      <button className="absolute right-2 top-0 rounded-md">
        <MoreOperations note={note} />
      </button>
    </div>
  );
}
NoteItem.Skeleton = function NoteItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-5 w-2/5" />
      </div>
    </div>
  );
};
