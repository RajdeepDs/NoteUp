import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { User } from "next-auth";
import { Button } from "./ui/button";

interface UserAvatarProp extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image">;
}

export default function UserAvatar({ user }: UserAvatarProp) {
  return (
    <>
    <Avatar className="h-8 w-8 ring-2 ring-offset-2 ring-ring-blue">
      {user?.image ? (
          <AvatarImage src={user.image} alt="RD" />
          ) : (
        <AvatarFallback>RD</AvatarFallback>
        )}
    </Avatar>
        </>
  );
}
