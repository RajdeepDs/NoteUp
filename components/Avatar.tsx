import { SignedIn, UserButton } from "@clerk/nextjs";
export default function Avatar() {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
