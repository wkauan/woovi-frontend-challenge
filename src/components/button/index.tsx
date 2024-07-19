import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "text-white rounded-xl font-semibold flex gap-2 items-center",

  variants: {
    variant: {
      primary: "bg-[#03D69D]",
      secondary: "bg-[#133A6F]",
    },
    size: {
      default: "py-0.5 px-2",
      medium: "py-1 text-md px-2",
      full: "w-full items-center justify-center",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  );
}
