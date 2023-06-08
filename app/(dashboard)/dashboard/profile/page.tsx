import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import DashboardHeader from "@/components/header";
import UserProfile from "@/components/userProfile";

export const metadata: Metadata = {
  title: "Profile | NoteUp",
  description: "Manage your profile.",
};

export default async function ProfilePage() {
  const user = await getCurrentUser();
  if (!user) {
    return notFound();
  }
  return (
    <div className="mt-2">
      <DashboardHeader title="Profile" description="Manage your profile." />
      <main className="mt-4">
        <UserProfile
          user={{
            image: user.image || null,
            name: user.name || null,
            email: user.email || null,
          }}
        />
      </main>
    </div>
  );
}
