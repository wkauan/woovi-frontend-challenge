import { Circle, CircleCheck } from "lucide-react";
import { useState } from "react";

export function PixInstallments() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full px-3 font-medium py-8">
      <div className="relative">
        {/* 2x */}
        <div className="border-solid border-2 border-[#03D69D] px-3 py-3 flex flex-col gap-1.5 rounded-t-xl">
          <span className="absolute -top-3 bg-[#E5E5E5] px-3  text-sm rounded-xl">
            Pix Parcelado
          </span>

          <div>
            <p className=" flex">
              <span className="font-bold mr-1">2x</span> R$ 15.300,00
              <CircleCheck className="ml-auto text-[#03D69D]" />
            </p>
          </div>

          <div>
            <p className="text-xs text-[#AFAFAF]">Total: R$ 30.600,00</p>
          </div>
        </div>

        {/* 3x */}
        <div className="border-solid border-2 border-[#E5E5E5] px-3 py-3 flex flex-col gap-1.5">
          <div>
            <p className=" flex">
              <span className="font-bold mr-1">3x</span> R$ 10.196,66
              <Circle className="ml-auto" />
            </p>
          </div>

          <div>
            <p className="text-xs text-[#AFAFAF]">Total: R$ 30.620,00</p>
          </div>
        </div>

        {/* 4x */}

        {isChecked ? (
          <div className="border-solid border-2 border-[#03D69D] px-3 py-3 flex flex-col gap-1.5">
            <div className="flex">
              <p>
                <span className="font-bold mr-1">4x</span> R$ 7.725,00
              </p>
              <button
                onClick={() => setIsChecked((checked) => !checked)}
                className="ml-auto"
              >
                <CircleCheck className="ml-auto text-[#03D69D]" />
              </button>
            </div>

            <div>
              <p className="text-xs text-[#AFAFAF]">Total: R$ 30.900,00</p>
            </div>

            <div className="relative inline-block">
              <img src="./Rectangle.svg" alt="Retangulo" />
              <p className="absolute inset-0 flex items-center text-white text-xs px-1">
                <span className="font-bold px-1">-3% de juros:</span> Melhor
                opção de parcelamento
              </p>
            </div>
          </div>
        ) : (
          <div className="border-solid border-2 border-[#E5E5E5] px-3 py-3 flex flex-col gap-1.5">
            <div className="flex">
              <p>
                <span className="font-bold mr-1">4x</span> R$ 7.725,00
              </p>
              <button
                onClick={() => setIsChecked((checked) => !checked)}
                className="ml-auto"
              >
                {isChecked ? (
                  <CircleCheck className="ml-auto text-[#03D69D]" />
                ) : (
                  <Circle />
                )}
              </button>
            </div>

            <div>
              <p className="text-xs text-[#AFAFAF]">Total: R$ 30.900,00</p>
            </div>

            <div className="relative inline-block">
              <img src="./Rectangle.svg" alt="Retangulo" />
              <p className="absolute inset-0 flex items-center text-white text-xs px-1">
                <span className="font-bold px-1">-3% de juros:</span> Melhor
                opção de parcelamento
              </p>
            </div>
          </div>
        )}

        {/* 5x */}
        <div className="border-solid border-2 border-[#E5E5E5] px-3 py-3 flex flex-col gap-1.5">
          <div>
            <p className=" flex">
              <span className="font-bold mr-1">5x</span> R$ 6.300,00
              <Circle className="ml-auto" />
            </p>
          </div>

          <div>
            <p className="text-xs text-[#AFAFAF]">Total: R$ 31.500,00</p>
          </div>
        </div>

        {/* 6x */}
        <div className="border-solid border-2 border-[#E5E5E5] px-3 py-3 flex flex-col gap-1.5">
          <div>
            <p className=" flex">
              <span className="font-bold mr-1">6x</span> R$ 5.283,33
              <Circle className="ml-auto" />
            </p>
          </div>

          <div>
            <p className="text-xs text-[#AFAFAF]">Total: R$ 31.699,98</p>
          </div>
        </div>

        <div className="border-solid border-2 border-[#E5E5E5] px-3 py-3 flex flex-col gap-1.5 rounded-b-xl">
          <div>
            <p className=" flex">
              <span className="font-bold mr-1">7x</span> R$ 4.542,85
              <Circle className="ml-auto" />
            </p>
          </div>

          <div>
            <p className="text-xs text-[#AFAFAF]">Total: R$ 31.800,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
