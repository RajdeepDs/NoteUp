import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="">
      <UserProfile path="/dashboard/profile" routing="path" />
    </div>
  );
}
