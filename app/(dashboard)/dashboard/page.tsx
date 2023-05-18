"use client";
import CreateNoteButton from "@/components/createNoteButton";
import DashboardHeader from "@/components/header";
import { signOut } from "next-auth/react";
export default async function DashboardPage() {
  return (
    <div className="">
      <DashboardHeader title="Notes" description="Create and manage notes.">
        <CreateNoteButton />
      </DashboardHeader>
      <main className="">
        <button onClick={() => signOut()}>Sign Out</button>
      </main>
    </div>
  );
}
