"use client";
import { useQuery } from "@apollo/client";
import { GET_TAGS } from "@/graphql/queries";
import { ITag } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CategoryBar() {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const { data, loading, error } = useQuery(GET_TAGS);
  const tags: ITag[] = data?.tags;

  const router = useRouter();

  const handleTagSelection = (tag: any) => {
    if (tag.name === "Recents") {
      setSelectedTag("");
      router.push(`/dashboard?tag=${""}`);
    } else {
      setSelectedTag(tag.id.toString());
      router.push(`/dashboard?tag=${tag.id}`);
    }
  };

  return (
    <div className="mt-2 space-x-4 border-b border-accent-2">
      <span
        className={`${
          selectedTag === ""
            ? "border-b-2 border-success text-success"
            : "text-accent-3"
        } cursor-pointer font-medium`}
        onClick={() => handleTagSelection({ name: "Recents", id: "" })}
      >
        Recents
      </span>
      {tags?.map((tag) => (
        <span
          key={tag.id}
          className={`${
            selectedTag === tag.id.toString()
              ? "border-b-2 border-success text-success"
              : "text-accent-3"
          } cursor-pointer font-medium`}
          onClick={() => handleTagSelection(tag)}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}
