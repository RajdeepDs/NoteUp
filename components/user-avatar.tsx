import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { User } from "next-auth";
import { Icons } from "./icons";

interface UserAvatarProp extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image">;
}

export default function UserAvatar({ user }: UserAvatarProp) {
  return (
    <>
      <Avatar className="ring-ring-blue h-8 w-8 ring-2 ring-offset-2">
        {user?.image ? (
          <AvatarImage src={user.image} alt="Img" />
        ) : (
          <AvatarFallback>
            <Icons.profile className="text-accent-3" />
          </AvatarFallback>
        )}
      </Avatar>
    </>
  );
}
