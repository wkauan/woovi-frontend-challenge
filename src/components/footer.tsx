import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex gap-1.5 text-[#B2B2B2] text-xs">
      <p className="flex gap-1.5">
        <ShieldCheck className="size-4" />
        Pagamento 100% seguro via:
      </p>
      <img className="h-4" src="./LogoGray.svg" alt="logo" />
    </footer>
  );
}
