import { ReactNode } from "react";

interface mainTextProps {
  children: ReactNode;
}

export function MainText({ children }: mainTextProps) {
  return (
    <div className="py-8 text-center">
      <h2 className="text-2xl font-extrabold">{children}</h2>
    </div>
  );
}
