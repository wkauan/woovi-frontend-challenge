import { Circle, CircleCheck } from "lucide-react";
import { useState } from "react";

import { paymentOptions } from "../../lib/data";

export function PixInput() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  return (
    <div className="w-full px-3 font-medium">
      <div className="relative">
        {paymentOptions.map((option, index) => (
          <div
            key={index}
            className={`border-solid border-2 px-3 py-3 flex flex-col space-y-2 ${
              index === 0
                ? "rounded-t-xl"
                : index === paymentOptions.length - 1
                ? "rounded-b-xl"
                : ""
            }`}
            style={{
              borderColor:
                selectedOption === option.installments ? "#03D69D" : "#E5E5E5",
              backgroundColor:
                selectedOption === option.installments
                  ? "#F0FFF4"
                  : "transparent",
            }}
          >
            {index === 0 && (
              <span className="absolute -top-3 bg-[#E5E5E5] px-3 text-sm rounded-xl">
                Pix
              </span>
            )}
            <div className="flex">
              <p>
                <span className="font-bold mr-1">{option.installments}x</span>{" "}
                {option.amount}
              </p>
              <button
                onClick={() => setSelectedOption(option.installments)}
                className={`ml-auto ${
                  selectedOption === option.installments
                    ? "border-[#03D69D]"
                    : ""
                }`}
              >
                {selectedOption === option.installments ? (
                  <CircleCheck className="ml-auto text-[#03D69D]" />
                ) : (
                  <Circle />
                )}
              </button>
            </div>

            <div>
              {option.installments === 1 && (
                <p className="text-sm text-[#03D69D]">
                  Ganhe <span className="font-bold">3%</span> de Cashback
                </p>
              )}
            </div>

            <div className="relative inline-block">
              {option.installments === 1 && (
                <>
                  <img src="./Rectangle.svg" alt="Retangulo" />
                  <p className="absolute inset-0 flex items-center text-white text-sm px-1">
                    🤑 <span className="font-bold px-1">R$ 300,00</span> de
                    volta no seu Pix na hora
                  </p>
                </>
              )}
            </div>

            {option.installments !== 1 && (
              <div>
                <p className="text-sm text-[#AFAFAF]">Total: {option.total}</p>
              </div>
            )}

            {option.bestOption && (
              <div className="relative inline-block">
                <img src="./Rectangle.svg" alt="Retangulo" />
                <p className="absolute inset-0 flex items-center text-white text-sm px-1">
                  <span className="font-bold px-1">-3% de juros:</span> Melhor
                  opção de parcelamento
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
