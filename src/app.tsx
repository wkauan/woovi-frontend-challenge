import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaymentMethod } from "./pages/payment-method";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaymentMethod />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
