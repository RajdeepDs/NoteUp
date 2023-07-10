"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "@/graphql/queries";
import { IUser } from "@/types";
import { UPDATE_USER } from "@/graphql/mutations";

interface UserNameFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<IUser, "id">;
}

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
});

export default function UserForm({ user }: UserNameFormProps) {
  const {data, error} = useQuery(GET_USER, {
    variables: {
      id: user?.id,
    }
  });
  if(error) console.log(error);

  const userData = data?.user;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: userData?.name || "",
      email: userData?.email || "",
    },
  });

  const [updateUser] = useMutation(UPDATE_USER);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const { data } = await updateUser({
        variables: {
          id: userData?.id,
          name: values.username,
          email: values.email,
        },
      });
      console.log(data);
    } catch (error) {
      console.error("Error updating user :", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Username</FormLabel>
              <FormControl>
                <Input
                  id="username"
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
              <FormDescription className="ml-2 text-accent-3 ">
                This is your email id.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
