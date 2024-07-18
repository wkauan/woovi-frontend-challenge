import { Circle, ChevronUp, ChevronDown, CircleCheck } from "lucide-react";
import { useState } from "react";
import { InformationModal } from "../../pages/pix-payment-qrcode/information-modal";

interface PaymentDetailsProps {
  total: string;
  isChecked: boolean;
}

export function PaymentDetails({ total, isChecked }: PaymentDetailsProps) {
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);

  function toggleInformationModal() {
    setIsInformationModalOpen((prevState) => !prevState);
  }

  const borderColor = isChecked ? "#03D69D" : "#E5E5E5";
  const circleIcon = isChecked ? (
    <CircleCheck className="size-4 text-[#03D69D]" />
  ) : (
    <Circle className="size-4 text-[#03D69D]" />
  );

  return (
    <div className="space-y-4 text-xs py-4 w-full">
      <div className="px-3">
        <div className="flex gap-2">
          {circleIcon}
          <p>1ª entrada no Pix</p>
          <p className="font-semibold ml-auto">R$ 15.300,00</p>
        </div>

        <div className={`w-px h-3 bg-[${borderColor}] ml-2`} />

        <div className="flex gap-2">
          {isChecked ? (
            <Circle className="size-4 text-[#03D69D]" />
          ) : (
            <Circle className="size-4 text-[#E5E5E5]" />
          )}
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
          <button onClick={toggleInformationModal} className="ml-auto">
            {isInformationModalOpen ? (
              <ChevronDown className="size-4" />
            ) : (
              <ChevronUp className="size-4" />
            )}
          </button>
        </div>
      </div>
      <div className="w-11/12 h-px bg-[#E5E5E5] ml-3" />

      {isInformationModalOpen && <InformationModal />}
    </div>
  );
}
