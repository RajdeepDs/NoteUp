"use client";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";

import { INote } from "@/types";
import { NoteItem } from "./noteItem";
import { GET_NOTES, GET_NOTESBYTAG } from "@/graphql/queries";

export default function NoteList() {
  const searchParams = useSearchParams();
  const tagId = searchParams.get("tag") || "";

  const { data, loading, error } = useQuery(
    tagId === "" ? GET_NOTES : GET_NOTESBYTAG,
    {
      variables: { id: tagId },
    }
  );
  if (loading) {
    return <>Loading....</>;
  } else if (error) {
    return <p>Error: {error.message}</p>;
  } else {
    const notes = data?.notesByTag || data?.notes;
    return (
      <>
        {notes?.length ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {notes?.map((note: INote) => (
              <NoteItem key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-32 space-y-4">
            <h1 className="noteup">No Notes created</h1>
            <p className="text-accent-2 font-medium text-xl">You don&apos;t have any notes created. Start creating notes</p>
          </div>
        )}
      </>
    );
  }
}
