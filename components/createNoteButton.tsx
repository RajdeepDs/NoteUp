import { Icons } from "@/components/icons";
export default function CreateNoteButton() {
  return (
    <button className="flex rounded-lg bg-primary px-4 py-2 text-white">
      <Icons.newNote className="mr-2" />
      New Note
    </button>
  );
}
