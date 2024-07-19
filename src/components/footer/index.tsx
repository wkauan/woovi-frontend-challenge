import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex gap-1.5 text-[#B2B2B2] text-md">
      <p className="flex gap-1.5 items-center">
        <ShieldCheck className="size-6" />
        Pagamento 100% seguro via:
      </p>
      <img className="h-5" src="./LogoGray.svg" alt="logo" />
    </footer>
  );
}
