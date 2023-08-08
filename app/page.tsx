import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import EditorPage from "../public/EditorPage.png";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Navigations from "@/components/navigations";

export default function Home() {
  return (
    <div className="container flex flex-col">
      <nav className="flex justify-between py-2">
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="logo" width="35" height="35" />
          <span className="noteup text-2xl leading-none">NoteUp</span>
        </div>
        <Navigations />
      </nav>
      <div className="mt-10" id="about">
        <div className="flex flex-col items-center justify-center space-y-8 md:my-24 md:p-24">
          <h1 className="noteup font-mono text-4xl font-bold md:text-[4rem]">
            Note taking web app.
          </h1>
          <div className="mb-2 flex flex-col">
            <p className="text-center text-xl font-medium text-accent-3">
              I&apos;m building a note taking web app and open sourcing
              everything.
            </p>
            <p className="text-center text-xl font-medium text-accent-3">
              Follow along as we figure this out together.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="/login" className={cn(buttonVariants({}))}>
              Get Started
            </Link>
            <Link
              href="https://github.com/RajdeepDs/NoteUp"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Github
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col-reverse md:my-24 md:grid md:grid-cols-2">
        <div className="flex justify-items-center">
          <div className="flex flex-col justify-center">
            <h1 className="noteup text-center text-2xl md:text-start md:text-5xl">
              Edit your Notes.
            </h1>
            <p className="text-center text-xl font-medium text-accent-3 md:text-start">
              We have text editor so you can edit your notes.
            </p>
          </div>
        </div>
        <div className="mb-10 h-fit rounded-lg border md:mb-0">
          <Image
            src={EditorPage}
            alt="editorPage"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="mt-12" id="feature">
        <div className="flex flex-col items-center justify-center space-y-3 md:p-24">
          <h1 className="noteup text-center text-2xl md:text-5xl">
            Proudly Open Source
          </h1>
          <div className="">
            <p className="text-center text-xl font-medium text-accent-3">
              NoteUp is open source and powered by open source software.
            </p>
            <p className="text-center text-xl font-medium text-accent-3">
              The code is available in Github.
            </p>
          </div>
          <Link
            href="https://github.com/RajdeepDs/NoteUp"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icons.githubIcon className="mr-2 h-4 w-4" />
            Github
          </Link>
        </div>
      </div>
      <footer className="mt-10">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="flex items-center text-center text-sm text-accent-3 md:text-base">
            Build by Rajdeep. The Source code is available on Github.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/RajdeepDs"
              className="text-accent-3 hover:text-black"
            >
              Github
            </Link>
            <Link
              href="https://www.instagram.com/rajdeep__ds/"
              className="text-accent-3 hover:text-black"
            >
              Instagram
            </Link>
            <Link
              href="https://twitter.com/Rajdeep__ds"
              className="text-accent-3 hover:text-black"
            >
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
