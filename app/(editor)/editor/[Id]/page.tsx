"use client";

import { GET_NOTE } from "@/graphql/queries";
import { INote } from "@/types";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

export default function EditorPage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_NOTE, {
    variables: { id },
  });

  console.log(data?.note);

  return <>EditorPage</>;
}
