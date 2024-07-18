import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { PixInput } from "./pix-input";
import { Footer } from "../../components/footer";

export function PaymentMethod() {
  const navigate = useNavigate();

  function nextPage() {
    navigate("/paymentQrCode");
  }

  return (
    <div className="max-w-sm bg-white">
      <div className="flex items-center justify-center py-8 flex-col">
        <Header />

        <div className="py-8">
          <h2 className="text-lg font-semibold ">
            João, como você quer pagar?
          </h2>
        </div>

        <PixInput />

        <div className="py-8">
          <button
            onClick={nextPage}
            className="bg-[#03D69D] text-white rounded-xl px-2 py-0.5 font-semibold flex gap-2"
          >
            Continuar
            <ArrowRight />
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
}
