import { Circle } from "lucide-react";

export function PixInput() {
  return (
    <div className="w-full px-3 font-medium">
      <div className="relative">
        <div className="border-solid border-2 border-[#E5E5E5] px-3 py-3 flex flex-col gap-1.5 rounded-xl">
          <span className="absolute -top-3 bg-[#E5E5E5] px-3  text-sm rounded-xl">
            Pix
          </span>

          <div>
            <p className="flex">
              <span className="font-bold mr-1">1x</span> R$ 30.500,00
              <Circle className="ml-auto" />
            </p>
          </div>

          <div>
            <p className="text-xs text-[#03D69D]">
              Ganhe <span className="font-bold">3%</span> de Cashback
            </p>
          </div>

          <div className="relative inline-block">
            <img src="./Rectangle.svg" alt="Retangulo" />
            <p className="absolute inset-0 flex items-center text-white text-xs px-1">
              🤑 <span className="font-bold px-1">R$ 300,00</span> de volta no
              seu Pix na hora
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
