"use client";
import { useQuery } from "@apollo/client";

import { Editor } from "@/components/editor";
import { GET_NOTE } from "@/graphql/queries";
import { INote } from "@/types";

type Props = {
  params: {
    id: string;
  };
};

export default function EditorPage({ params: { id } }: Props) {
  const { data, loading, error } = useQuery(GET_NOTE, {
    variables: { id },
  });

  const note: INote = data?.note;
  if (loading) {
    <p>Loading...</p>;
  }
  if (error) {
    <p>Oops! Something went wrong...</p>;
  }
  return (
    <div>
      <Editor note={note} />
    </div>
  );
}
