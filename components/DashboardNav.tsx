import Link from "next/link";
import { Icons } from "@/components/Icons";
export default function DashboardNav() {
  return (
    <div className="mx-auto flex flex-col items-start space-y-6 p-2">
      <Link href="/dashboard" className="mr-2 flex items-center">
        <Icons.inbox />
        Notes
      </Link>
      <Link href="/dashboard/settings" className="mr-2 flex items-center">
        <Icons.settings />
        Settings
      </Link>
      <Link href="/dashboard/profile" className="mr-2 flex items-center">
        <Icons.profile />
        Profile
      </Link>
    </div>
  );
}
