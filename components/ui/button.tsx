import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background hover:bg-background hover:text-foreground hover:border hover:border-foreground",
        solidblue:
          "bg-success text-background hover:bg-background hover:text-success hover:border hover:border-success",
        solidred:
          "bg-error text-background hover:bg-background hover:text-error hover:border hover:border-error",
        ghostblack: "bg-background text-foreground hover:bg-accent-2",
        ghostblue: "bg-background text-success hover:bg-success-lighter",
        ghostred: "bg-background text-error hover:bg-error-lighter",
        oauth:
          "bg-background text-foreground border border-accent-3 hover:bg-accent-2",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
