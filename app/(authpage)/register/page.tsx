import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import OauthButton from "@/components/oauthButton";
import RegisterForm from "@/components/registerForm";

export const metadata: Metadata = {
  title: "Create an account | NoteUp",
  description: "Create an account to get started",
};

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={48}
              height={48}
              priority={true}
              className="mx-auto"
            />
          </Link>
          <h1 className="font-mono text-2xl font-semibold text-black">
            Create an Account
          </h1>
          <p className="text-sm text-accent-2">
            Enter below to create your account
          </p>
        </div>
        <RegisterForm />
        <OauthButton />
        <Link
          href={"/login"}
          className="text-center text-sm text-accent-2 underline underline-offset-4 hover:text-black"
        >
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
}
