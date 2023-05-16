import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create an account",
  description: "Create an account to get started",
};
export default function Page() {
  return (
    <div className=" grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="hidden h-full bg-slate-100 lg:block" />
      <div className="mx-auto">Sign Up</div>
    </div>
  );
}
