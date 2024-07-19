import { Circle, ChevronUp, CircleCheck } from "lucide-react";

interface PaymentDetailsProps {
  total: string;
  isChecked: boolean;
}

export function PaymentDetails({ total, isChecked }: PaymentDetailsProps) {
  const borderColor = isChecked ? "#03D69D" : "#E5E5E5";
  const circleIcon = isChecked ? (
    <CircleCheck className="size-5 text-[#03D69D]" />
  ) : (
    <Circle className="size-5 text-[#03D69D]" />
  );

  return (
    <div className="space-y-4 text-md py-4 w-full">
      <div className="px-3">
        <div className="flex gap-2 items-center">
          {circleIcon}
          <p>1ª entrada no Pix</p>
          <p className="font-semibold ml-auto">R$ 15.300,00</p>
        </div>

        <div className={`w-px h-4 bg-[${borderColor}] ml-2.5`} />

        <div className="flex gap-2 items-center">
          {isChecked ? (
            <Circle className="size-5 text-[#03D69D]" />
          ) : (
            <Circle className="size-5 text-[#E5E5E5]" />
          )}
          <p>2ª no cartão</p>
          <p className="font-semibold ml-auto">R$ 15.300,00</p>
        </div>
      </div>

      <div className="w-full h-px bg-[#E5E5E5]" />

      <div className="px-3">
        <div className="flex px-1">
          <p>CET: 0,5%</p>
          <p className="ml-auto">Total: R$ {total}</p>
        </div>
      </div>

      <div className="w-full h-px bg-[#E5E5E5]" />

      <div className="px-3">
        <div className="flex px-1 items-center">
          <p className="font-semibold">Como funciona?</p>
          <button className="ml-auto">
            <ChevronUp className="size-5" />
          </button>
        </div>
      </div>
      <div className="w-full h-px bg-[#E5E5E5]" />
    </div>
  );
}
