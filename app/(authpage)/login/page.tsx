import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/loginForm";
import OauthButton from "@/components/oauthButton";
export const metadata: Metadata = {
  title: "Login to your account",
  description: "Login to your account to get started",
};
export default function LoginPage() {
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
            Welcome Back
          </h1>
          <p className="text-sm text-mutedblack">
            Enter Email and Password to sign in to your account
          </p>
        </div>
        <LoginForm />
        <OauthButton />
        <Link
          href={"/register"}
          className="text-center text-sm text-mutedblack underline underline-offset-4 hover:text-black"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </div>
    </div>
  );
}
