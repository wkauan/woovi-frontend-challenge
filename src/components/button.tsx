import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "text-white rounded-xl px-2 font-semibold flex gap-2",

  variants: {
    variant: {
      primary: "bg-[#03D69D]",
      secondary: "bg-[#133A6F]",
    },
    size: {
      default: "py-0.5",
      medium: "py-1 text-xs",
      full: "w-full",
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
