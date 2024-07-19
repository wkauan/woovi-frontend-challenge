import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaymentMethod } from "./pages/payment-method";
import { PixPaymentQrCode } from "./pages/pix-payment-qrcode";
import { PaymentCard } from "./pages/payment-card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaymentMethod />,
  },
  {
    path: "/paymentQrCode",
    element: <PixPaymentQrCode />,
  },
  {
    path: "/paymentCreditCard",
    element: <PaymentCard />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
