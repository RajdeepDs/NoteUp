"use client";
import DashboardHeader from "@/components/header";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
});
export default async function SettingsPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      <div className="border-b ">
        <DashboardHeader
          title="Profile"
          description="Manage your profile settings"
        />
      </div>
      <div className="mt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example"
                      {...field}
                      className="ml-2 max-w-[320px] text-accent-3"
                    />
                  </FormControl>
                  <FormDescription className="ml-2 text-accent-3 ">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@gmail.com"
                      {...field}
                      className="ml-2 max-w-[320px] text-accent-3"
                    />
                  </FormControl>
                  <FormDescription className="ml-2 text-accent-3 ">This is your email id.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
