import { Circle, CircleCheck } from "lucide-react";
import { useState } from "react";

const paymentOptions = [
  {
    installments: 1,
    amount: "R$ 30.500,00",
    total: "R$ 30.500,00",
    bestOption: false,
  },
  {
    installments: 2,
    amount: "R$ 15.300,00",
    total: "R$ 30.600,00",
    bestOption: false,
  },
  {
    installments: 3,
    amount: "R$ 10.196,66",
    total: "R$ 30.620,00",
    bestOption: false,
  },
  {
    installments: 4,
    amount: "R$ 7.725,00",
    total: "R$ 30.900,00",
    bestOption: true,
  },
  {
    installments: 5,
    amount: "R$ 6.300,00",
    total: "R$ 31.500,00",
    bestOption: false,
  },
  {
    installments: 6,
    amount: "R$ 5.283,33",
    total: "R$ 31.699,98",
    bestOption: false,
  },
  {
    installments: 7,
    amount: "R$ 4.542,85",
    total: "R$ 31.800,00",
    bestOption: false,
  },
];

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
                <p className="text-xs text-[#03D69D]">
                  Ganhe <span className="font-bold">3%</span> de Cashback
                </p>
              )}
            </div>

            <div className="relative inline-block">
              {option.installments === 1 && (
                <>
                  <img src="./Rectangle.svg" alt="Retangulo" />
                  <p className="absolute inset-0 flex items-center text-white text-xs px-1">
                    🤑 <span className="font-bold px-1">R$ 300,00</span> de
                    volta no seu Pix na hora
                  </p>
                </>
              )}
            </div>

            {option.installments !== 1 && (
              <div>
                <p className="text-xs text-[#AFAFAF]">Total: {option.total}</p>
              </div>
            )}

            {option.bestOption && (
              <div className="relative inline-block">
                <img src="./Rectangle.svg" alt="Retangulo" />
                <p className="absolute inset-0 flex items-center text-white text-xs px-1">
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
