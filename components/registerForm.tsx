"use client";
import * as React from "react";

import * as z from "zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { buttonVariants } from "./ui/button";
import { userAuthSchema } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registered!");
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
        router.push("/login");
      });
  };
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="flex flex-col space-y-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-2">
              <Label className="sr-only" htmlFor="name">
                UserName
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="your name"
                autoCapitalize="none"
                autoCorrect="off"
                className="border placeholder:text-accent-3"
                {...register("name", { required: "This is required" })}
              />
              {errors?.name && (
                <p className="text-secondary px-1 text-xs">
                  {errors.name.message}
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
                className="border placeholder:text-accent-3"
                {...register("email", { required: "This is required" })}
              />
              {errors?.email && (
                <p className="text-secondary px-1 text-xs">
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
                className="border placeholder:text-accent-3"
                {...register("password", { required: "This is required" })}
              />
              {errors?.password && (
                <p className="text-secondary px-1 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={cn(buttonVariants({ variant: "solidblue" }))}
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Register to Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
