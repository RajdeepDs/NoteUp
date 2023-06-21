import CategoryBar from "@/components/categorybar";
import { CreateNoteButton } from "@/components/createNoteButton";
import DashboardHeader from "@/components/header";
import { NoteItem } from "@/components/noteItem";
import { DashboardShell } from "@/components/shell";

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        title="All Notes"
        description="Create and manage notes."
      />
      <div className="flex w-full justify-end">
        <CreateNoteButton />
      </div>
      <CategoryBar />
      <main className="mt-4">
        <NoteItem.Skeleton />
        <NoteItem.Skeleton />
        <NoteItem.Skeleton />
        <NoteItem.Skeleton />
      </main>
    </DashboardShell>
  );
}
