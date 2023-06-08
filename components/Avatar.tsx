import Image from "next/image";
import { User } from "@prisma/client";

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
          width={45}
          height={45}
          priority={true}
          className="rounded-full"
        />
      )}
    </div>
  );
}
