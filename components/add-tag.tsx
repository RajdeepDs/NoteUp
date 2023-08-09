"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useMutation } from "@apollo/client";
import { CREATE_TAG } from "@/graphql/mutations";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  tagname: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

export function AddTag({ noteId }: any) {
  const router = useRouter();
  const { toast } = useToast();
  const [createTag] = useMutation(CREATE_TAG);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tagname: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { data } = await createTag({
        variables: {
          name: values.tagname,
          id: noteId,
        },
      });
      toast({
        title: "Tag created",
        description: "Your tag has been created.",
      });
      router.refresh();
    } catch (error) {
      toast({
        description: "There was an error creating your tag.",
      });
      console.error("Error creating tag:", error);
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md border border-primary px-2 text-sm text-primary">
          + Add Tag
        </button>
      </DialogTrigger>
      <Form {...form}>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add Tag</DialogTitle>
              <DialogDescription>
                Add tags to filter your notes. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <FormField
                control={form.control}
                name="tagname"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Add Tag"
                        {...field}
                        className="col-span-3 items-center py-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Form>
    </Dialog>
  );
}
