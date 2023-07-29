"use client";
import DashboardHeader from "@/components/header";
import { useToast } from "@/components/ui/use-toast";

export default function TaskPage() {
  const {toast} = useToast();
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
        <button onClick={()=>{
        toast({
          title: "Working Properly",
        })
      }}>Show</button>
      </div>
    </div>
  );
}
