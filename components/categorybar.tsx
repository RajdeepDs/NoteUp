"use client";
import { useQuery } from "@apollo/client";
import { GET_TAGS } from "@/graphql/queries";
import { ITag } from "@/types";
export default function CategoryBar() {
  const { data, loading, error } = useQuery(GET_TAGS);
  const tags: ITag[] = data?.tags;

  return (
    <div className="mt-2 space-x-4 border-b border-accent-2">
      <span className="border-b-2 border-success font-medium text-success">
        Recents
      </span>
      {tags?.map((tag) => (
        <span className="border-b-2 border-success font-medium text-success">
          {tag.name}
        </span>
      ))}
    </div>
  );
}
