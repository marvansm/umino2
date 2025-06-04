import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import HomePage from "./Featured/Home/pages/home";
import SalesPage from "./Featured/Sales/pages/sales";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/sales",
        element: <SalesPage />,
        index: true,
      },
    ],
  },
]);
