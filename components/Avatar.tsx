import Image from "next/image";
import { User } from "@prisma/client";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
interface UserAvatarProps {
  user: Pick<User, "image">;
}

export default function Avatar({ user }: UserAvatarProps) {
  return (
    <>
      <Avatar>
        <AvatarImage src={user.image} alt="user image"/>
        <AvatarFallback>RD</AvatarFallback>
      </Avatar>
    </>
  );
}
