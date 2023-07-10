import DashboardHeader from "@/components/header";
import { getCurrentUser } from "@/lib/session";
import UserForm from "@/components/user-form";

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return (
    <div>
      <div className="mt-2 border-b">
        <DashboardHeader
          title="Profile"
          description="Manage your profile settings"
        />
      </div>
      <div className="mt-4">
        <UserForm user={{ id: user?.id || " " }} />
      </div>
    </div>
  );
}
