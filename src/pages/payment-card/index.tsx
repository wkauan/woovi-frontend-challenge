import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { PaymentDeadline } from "../../components/payment-deadline";
import { PaymentDetails } from "../../components/payment-details";
import { PaymentId } from "../../components/payment-id";
import { FormCheckout } from "./form-checkout";
import { MainText } from "../../components/mainText";

export function PaymentCard() {
  const navigate = useNavigate();

  function nextPage() {
    navigate("/");
  }
  return (
    <div className="">
      <div className="flex items-center justify-center py-8 flex-col">
        <Header />

        <MainText>João, pague o restante em 1x no cartão</MainText>

        <div className="w-full">
          <FormCheckout />
        </div>
        <div className="py-8 w-full px-3">
          <Button size="full" variant="secondary">
            Pagar
          </Button>
        </div>
        <PaymentDeadline />
        <PaymentDetails isChecked={true} total={"31.500,00"} />
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
