import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../components/Layout/Layout";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import DashboardLayout from "../components/Layout/DashboardLayout";
import Profile from "../components/Profile/Profile";
import EditProfile from "../components/EditProfile/EditProfile";

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
        path: "product/:productId",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.productId}`),
      },

      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/editprofile",
            element: <EditProfile />,
          },
        ],
      },
    ],
  },
]);

export default router;
