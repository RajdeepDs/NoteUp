"use client";

import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

import { ITag } from "@/types";
import { AddTag } from "./add-tag";
import { GET_TAGSBYNOTEID } from "@/graphql/queries";
import { DELETE_TAG } from "@/graphql/mutations";
import { useToast } from "./ui/use-toast";
import { Icons } from "./icons";

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
          <li
            key={tag.id}
            className="flex cursor-default items-center rounded bg-primary-soft px-2 text-primary"
          >
            {tag.name}
            <DeleteTag tagId={tag.id} noteId={noteId} />
          </li>
        ))}
      </ul>
      <AddTag noteId={noteId} />
    </div>
  );
}

export function DeleteTag({ tagId, noteId }: any) {
  const { toast } = useToast();
  const [deleteTag] = useMutation(DELETE_TAG);
  const handleDelete = async () => {
    await deleteTag({
      variables: { id: tagId },
      refetchQueries: [
        { query: GET_TAGSBYNOTEID, variables: { noteId: noteId } },
      ],
    });
    toast({
      title: "Tag deleted",
      description: "Your tag has been deleted.",
    });
  };
  return (
    <Icons.close
      className="ml-1 h-3 w-3 cursor-pointer"
      onClick={handleDelete}
    />
  );
}
