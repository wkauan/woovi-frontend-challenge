import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { PixInput } from "./pix-input";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { MainText } from "../../components/mainText";

export function PaymentMethod() {
  const navigate = useNavigate();

  function nextPage() {
    navigate("/paymentQrCode");
  }

  return (
    <div className="">
      <div className="flex items-center justify-center py-8 flex-col">
        <Header />

        <MainText>João, como você quer pagar?</MainText>

        <PixInput />

        <div className="pb-8">
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
