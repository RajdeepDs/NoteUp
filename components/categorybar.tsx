"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useQuery } from "@apollo/client";
import { GET_TAGS } from "@/graphql/queries";
import { ITag } from "@/types";

export default function CategoryBar() {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const { data } = useQuery(GET_TAGS);
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
    <div className="mt-2 space-x-4">
      <span
        className={`${
          selectedTag === ""
            ? "border-b-2 border-primary text-primary"
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
              ? "border-b-2 border-primary text-primary"
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
