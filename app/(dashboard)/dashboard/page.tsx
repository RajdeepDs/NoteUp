import CreateNoteButton from "@/components/createNoteButton";
import DashboardHeader from "@/components/header";
export default async function DashboardPage() {
  return (
    <div className="">
      <DashboardHeader title="Notes" description="Create and manage notes.">
        <CreateNoteButton />
      </DashboardHeader>
      <main className="">Notes.....</main>
    </div>
  );
}
