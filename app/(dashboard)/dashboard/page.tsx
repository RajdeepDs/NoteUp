import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import DashboardHeader from "@/components/header";
import CreateNoteButton from "@/components/createNoteButton";

import CategoryBar from "@/components/categorybar";
import  NoteList  from "@/components/noteList";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <div className="">
      <DashboardHeader
        title="All Notes"
        description="Create and manage notes."
      />
      <div className="flex w-full justify-end">
        <CreateNoteButton />
      </div>
      <CategoryBar />
      <main className="mt-4">
        <NoteList />
      </main>
    </div>
  );
}
