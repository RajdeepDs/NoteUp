"use client";

import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

import { ITag } from "@/types";
import { AddTag } from "./add-tag";
import { GET_TAGSBYNOTEID } from "@/graphql/queries";

export default function Tags() {
  const param = useParams();
  const noteId = param.id;
  const { data, loading, error } = useQuery(GET_TAGSBYNOTEID, {
    variables: { noteId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const tags: ITag[] = data?.tagsByNoteId;
  console.log(tags);

  return (
    <div className="flex space-x-4">
      <ul className="flex space-x-2">
        {tags?.map((tag: ITag) => (
          <li key={tag.id} className="bg-accent-2 text-white rounded px-2">{tag.name}</li>
        ))}
      </ul>
      <AddTag noteId={noteId} />
    </div>
  );
}
