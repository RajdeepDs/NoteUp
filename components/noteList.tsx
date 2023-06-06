"use client";
import { useQuery } from "@apollo/client";

import { GET_NOTES } from "@/graphql/queries";
import { INote } from "@/types";
import { NoteItem } from "./noteItem";

export const NoteList = () => {
  const { data, loading, error } = useQuery(GET_NOTES);

  const notes: INote[] = data?.notes;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {notes?.length ? (
        <div className="divide-border divide-y rounded-md border border-accent-2">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="my-auto flex flex-col items-center justify-center overflow-hidden">
          <h1 className="noteup ">Start creating note</h1>
          <p className=" text-center text-xl text-accent-4">
            You don&apos;t have any notes yet. Start creating note
          </p>
        </div>
      )}
    </>
  );
};
