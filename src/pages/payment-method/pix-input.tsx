import { Circle, CircleCheck } from "lucide-react";
import { useState } from "react";
import { paymentOptions } from "../../lib/data";
interface Installment {
  value: number;
  amount: string;
  total: string;
  bestOption: boolean;
}

export interface PaymentOption {
  type: string;
  installments: Installment[];
}

export function PixInput() {
  const [selectedOption, setSelectedOption] = useState<number | undefined>(1);

  return (
    <div className="w-full px-3 font-medium">
      {paymentOptions.map((option: PaymentOption) => (
        <div key={option.type} className="mb-8 relative">
          {option.installments.map(
            (installment: Installment, installmentIndex: number) => (
              <div
                key={installmentIndex}
                className={`border-solid border-2 px-3 py-3 flex flex-col space-y-2 ${
                  installment.value === 1
                    ? "rounded-xl"
                    : installment.value === 2
                    ? "rounded-t-xl"
                    : installment.value ===
                      option.installments[option.installments.length - 1].value
                    ? "rounded-b-xl"
                    : ""
                }`}
                style={{
                  borderColor:
                    selectedOption === installment.value
                      ? "#03D69D"
                      : "#E5E5E5",
                  backgroundColor:
                    selectedOption === installment.value
                      ? "#F0FFF4"
                      : "transparent",
                }}
              >
                {installmentIndex === 0 && (
                  <span className="absolute -top-3 bg-[#E5E5E5] px-3 text-sm rounded-xl">
                    {option.type}
                  </span>
                )}

                <div className="flex">
                  <p>
                    <span className="font-bold mr-1">{installment.value}x</span>{" "}
                    {installment.amount}
                  </p>
                  <button
                    onClick={() => setSelectedOption(installment.value)}
                    className={`ml-auto ${
                      selectedOption === installment.value
                        ? "border-[#03D69D]"
                        : ""
                    }`}
                  >
                    {selectedOption === installment.value ? (
                      <CircleCheck className="ml-auto text-[#03D69D]" />
                    ) : (
                      <Circle />
                    )}
                  </button>
                </div>

                {installment.value === 1 && (
                  <p className="text-sm text-[#03D69D]">
                    Ganhe <span className="font-bold">3%</span> de Cashback
                  </p>
                )}

                {installment.value === 1 && (
                  <div className="relative inline-block">
                    <img src="./Rectangle.svg" alt="Retangulo" />
                    <p className="absolute inset-0 flex items-center text-white text-sm px-1">
                      🤑 <span className="font-bold px-1">R$ 300,00</span> de
                      volta no seu Pix na hora
                    </p>
                  </div>
                )}

                {installment.value !== 1 && (
                  <div>
                    <p className="text-sm text-[#AFAFAF]">
                      Total: {installment.total}
                    </p>
                  </div>
                )}

                {installment.bestOption && (
                  <div className="relative inline-block">
                    <img src="./Rectangle.svg" alt="Retangulo" />
                    <p className="absolute inset-0 flex items-center text-white text-sm px-1">
                      <span className="font-bold px-1">-3% de juros:</span>{" "}
                      Melhor opção de parcelamento
                    </p>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
