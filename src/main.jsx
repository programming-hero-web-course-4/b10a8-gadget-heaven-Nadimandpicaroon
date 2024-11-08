import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import GadgetDetails from "./components/GadgetDetails/GadgetDetails.jsx";
import { CartContextProvider } from "./Context/CartContext.jsx";
import { WishlistContextProvider } from "./components/WishList/WishListContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import About from "./components/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "gadgets/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/gadgetsData.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <RouterProvider router={router} />
        </WishlistContextProvider>
      </CartContextProvider>
    </HelmetProvider>
  </StrictMode>
);
