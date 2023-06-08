"use client";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { GET_NOTES, GET_NOTESBYTAG } from "@/graphql/queries";
import { INote } from "@/types";
import { NoteItem } from "./noteItem";

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
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error: {error.message}</p>;
  } else {
    const notes = data?.notesByTag || data?.notes;
    return (
      <div className="divide-border divide-y rounded-md border border-accent-2">
        {notes?.map((note: INote) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    );
  }
}
