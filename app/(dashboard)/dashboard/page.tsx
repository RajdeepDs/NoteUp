import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import DashboardHeader from "@/components/header";
import { CreateNoteButton } from "@/components/createNoteButton";

import CategoryBar from "@/components/categorybar";
import NoteList from "@/components/noteList";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <div className="mt-2 border-b">
        <DashboardHeader
          title="All Notes"
          description="Create and manage notes."
        />
      </div>
      <div className="mt-2 flex w-full justify-end">
        <CreateNoteButton />
      </div>
      <CategoryBar />
      <main className="mt-4">
        <NoteList />
      </main>
    </div>
  );
}
