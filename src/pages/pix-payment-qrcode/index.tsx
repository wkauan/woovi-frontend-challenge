import { ArrowRight, Files } from "lucide-react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { PaymentDetails } from "../../components/payment-details";
import { PaymentDeadline } from "../../components/payment-deadline";
import { PaymentId } from "../../components/payment-id";
import { Button } from "../../components/button";

export function PixPaymentQrCode() {
  const navigate = useNavigate();

  function nextPage() {
    navigate("/paymentCreditCard");
  }

  return (
    <div className="max-w-sm bg-white">
      <div className="flex items-center justify-center py-8 flex-col">
        <Header />

        <div className="py-8">
          <h2 className="text-lg font-semibold ">João, pague a entrada de</h2>
          <h2 className="text-lg font-semibold px-4">R$ 15.300,00 pelo Pix</h2>
        </div>

        <div className="border-2 border-[#03D69D] rounded-xl w-2/3">
          <div className="p-1">
            <img src="./qrCode.svg" alt="qrCode" />
          </div>
        </div>

        <div className="py-8">
          <Button variant="secondary" size="medium">
            Clique para copiar QR CODE
            <Files className="size-4" />
          </Button>
        </div>

        <PaymentDeadline />

        <PaymentDetails total={"30.600,00"} />

        <PaymentId />

        <div className="py-8">
          <Button onClick={nextPage}>
            Continuar
            <ArrowRight />
          </Button>
        </div>

        <Footer />
      </div>
    </div>
  );
}
