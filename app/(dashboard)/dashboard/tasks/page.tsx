import DashboardHeader from "@/components/header";

export default function TaskPage() {
  return (
    <div>
      <div className="mt-2 border-b">
        <DashboardHeader
          title="Tasks"
          description="Manage your tasks and get things done."
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-center text-xl font-bold text-gray-400">
          This feature is not yet implemented. Please be patient.
        </div>
      </div>
    </div>
  );
}
