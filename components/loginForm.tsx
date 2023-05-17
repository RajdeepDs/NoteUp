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
import { Icons } from "./icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export default function LoginForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(userAuthSchema) });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="flex flex-col space-y-2">
        <form onSubmit={handleSubmit((data) => {})}>
          <div className="grid gap-2">
            <div className="grid gap-1">
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
                disabled={isLoading}
                {...register("email")}
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
                disabled={isLoading}
                {...register("password")}
              />
              {errors?.password && (
                <p className="px-1 text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={cn(buttonVariants())}
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign in to Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
