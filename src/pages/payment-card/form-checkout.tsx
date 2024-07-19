import { paymentOptions } from "../../lib/data";

export function FormCheckout() {
  return (
    <form className="space-y-4">
      <div className="relative text-xs">
        <span className="absolute -top-2 px-3 font-medium ml-2">
          Nome completo
        </span>
        <input
          className="w-11/12 ml-2 border-2 border-[#E5E5E5] rounded-md px-2 py-3 outline-none"
          type="text"
        />
      </div>

      <div className="relative text-xs">
        <span className="absolute -top-2 px-3 font-medium ml-2">CPF</span>
        <input
          className="w-11/12 ml-2 border-2 border-[#E5E5E5] rounded-md px-2 py-3 outline-none"
          type="text"
        />
      </div>

      <div className="relative text-xs">
        <span className="absolute -top-2 px-3 font-medium ml-2">
          Número do cartão
        </span>
        <input
          className="w-11/12 ml-2 border-2 border-[#E5E5E5] rounded-md px-2 py-3 outline-none"
          type="text"
        />
      </div>

      <div className="flex">
        <div className="relative text-xs">
          <span className="absolute -top-2 px-3 font-medium ml-2">
            Vencimento
          </span>
          <input
            className="w-11/12 ml-2 border-2 border-[#E5E5E5] rounded-md px-2 py-3 outline-none"
            type="text"
          />
        </div>

        <div className="relative text-xs">
          <span className="absolute -top-2 px-3 font-medium ml-2">CVV</span>
          <input
            className="w-10/12 ml-2 border-2 border-[#E5E5E5] rounded-md px-2 py-3 outline-none"
            type="Number"
          />
        </div>
      </div>

      <div className="relative text-xs">
        <span className="absolute -top-2 px-3 font-medium ml-2">Parcelas</span>

        <select className="w-11/12 ml-2 border-2 border-[#E5E5E5] rounded-md px-2 py-3 outline-none">
          {paymentOptions.map((option, index) => (
            <option key={index} value={option.installments}>
              {option.installments}x {option.amount}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
