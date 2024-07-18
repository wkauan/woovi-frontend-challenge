import { Circle, ChevronUp } from "lucide-react";

interface PaymentDetailsProps {
  total: string;
}

export function PaymentDetails({ total }: PaymentDetailsProps) {
  return (
    <div className="space-y-4 text-xs py-4 w-full">
      <div className="px-3">
        <div className="flex gap-2">
          <Circle className="size-4 text-[#03D69D]" />
          <p>1ª entrada no Pix</p>
          <p className="font-semibold ml-auto">R$ 15.300,00</p>
        </div>

        <div className="w-px h-3 bg-[#E5E5E5] ml-2" />

        <div className="flex gap-2">
          <Circle className="size-4 text-[#E5E5E5]" />

          <p>2ª no cartão</p>
          <p className="font-semibold ml-auto">R$ 15.300,00</p>
        </div>
      </div>

      <div className="w-11/12 h-px bg-[#E5E5E5] ml-3" />

      <div className="px-3">
        <div className="flex px-1">
          <p>CET: 0,5%</p>
          <p className="ml-auto">Total: R$ {total}</p>
        </div>
      </div>

      <div className="w-11/12 h-px bg-[#E5E5E5] ml-3" />

      <div className="px-3">
        <div className="flex px-1">
          <p className="font-semibold">Como funciona?</p>
          <button className="ml-auto">
            <ChevronUp className="size-4" />
          </button>
        </div>
      </div>
      <div className="w-11/12 h-px bg-[#E5E5E5] ml-3" />
    </div>
  );
}
