import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import DashboardHeader from "@/components/header";
import CreateNoteButton from "@/components/createNoteButton";
import { NoteItem } from "@/components/noteItem";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  const notes = await db.note.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return (
    <div className="">
      <DashboardHeader title="Notes" description="Create and manage notes.">
        <CreateNoteButton />
      </DashboardHeader>
      <main className="mt-4">
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
      </main>
    </div>
  );
}
