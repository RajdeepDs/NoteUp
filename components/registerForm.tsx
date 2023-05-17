"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { userAuthSchema } from "@/lib/validations/auth";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export default function RegisterForm({
  className,
  ...props
}: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(userAuthSchema) });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="flex flex-col space-y-2">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="username">
                UserName
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="your name"
                autoCapitalize="none"
                autoCorrect="off"
                className="border"
                {...register("username", { required: "This is required" })}
              />
              {errors?.username && (
                <p className="px-1 text-xs text-red-600">
                  {errors.username.message}
                </p>
              )}
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="name@example.com"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                className="border"
                {...register("email", { required: "This is required" })}
              />
              {errors?.email && (
                <p className="px-1 text-xs text-red-600">
                  {errors.email.message}
                </p>
              )}
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                className="border"
                {...register("password", { required: "This is required" })}
              />
              {errors?.password && (
                <p className="px-1 text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button type="submit" className={cn(buttonVariants())}>
              Register to Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
