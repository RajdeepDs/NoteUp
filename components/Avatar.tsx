import { User } from "@prisma/client";
import Image from "next/image";
interface UserAvatarProps {
  user: Pick<User, "image">;
}
export default function Avatar({ user }: UserAvatarProps) {
  return (
    <div>
      {user.image && (
        <Image
          src={user.image}
          alt="avatar"
          width={35}
          height={35}
          priority={true}
          className="rounded-full"
        />
      )}
    </div>
  );
}
