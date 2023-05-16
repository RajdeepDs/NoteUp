import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
export default function OauthButton() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-mutedblack">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Github
        </button>
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Google
        </button>
      </div>
    </>
  );
}
