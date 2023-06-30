import DashboardHeader from "@/components/header";
import { getCurrentUser } from "@/lib/session";
import UserForm from "@/components/user-form";

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return (
    <div>
      <div className="border-b mt-2">
        <DashboardHeader
          title="Profile"
          description="Manage your profile settings"
        />
      </div>
      <div className="mt-4">
        <UserForm user={{ name: user?.name, email: user?.email || "" }}/>
      </div>
    </div>
  );
}
