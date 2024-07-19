import { ArrowRight, Files } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { PaymentDeadline } from "../../components/payment-deadline";
import { PaymentDetails } from "../../components/payment-details";
import { PaymentId } from "../../components/payment-id";

export function PixPaymentQrCode() {
  const navigate = useNavigate();

  function nextPage() {
    navigate("/paymentCreditCard");
  }

  return (
    <div className="">
      <div className="flex items-center justify-center py-8 flex-col">
        <Header />

        <div className="py-8 items-center">
          <h2 className="text-2xl font-extrabold">João, pague a entrada de</h2>
          <h2 className="text-2xl font-extrabold flex justify-center">
            R$ 15.300,00 pelo Pix
          </h2>
        </div>

        <div className="border-2 border-[#03D69D] rounded-xl">
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

        <PaymentDetails isChecked={false} total={"30.600,00"} />

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
