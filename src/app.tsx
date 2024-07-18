import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaymentMethod } from "./pages/payment-method";
import { PixPaymentQrCode } from "./pages/pix-payment-qrcode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaymentMethod />,
  },
  {
    path: "/paymentQrCode",
    element: <PixPaymentQrCode />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
