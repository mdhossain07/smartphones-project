import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
