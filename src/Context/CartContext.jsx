import { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utilities/LocalStorage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    getLocalStorage("cartProducts")
  );

  function addProduct(product) {
    const isProductInCart = cartProducts.some(
      (cartProduct) => cartProduct.product_id === product.product_id
    );

    if (isProductInCart) {
      toast.warn("Product is already selected", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      return;
    }
    const newCartProducts = [...cartProducts, product];
    setCartProducts(newCartProducts);
    setLocalStorage("cartProducts", newCartProducts);
    toast.success("Added to the cart", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    console.log(cartProducts);
  }
  function removeProduct(product_id) {
    const filteredProducts = cartProducts.filter(
      (cartProduct) => cartProduct.product_id !== product_id
    );
    setLocalStorage("cartProducts", filteredProducts);
    setCartProducts(filteredProducts);
    toast.info("Product has been removed", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  function removeCartProducts() {
    setLocalStorage("cartProducts", []);
    setCartProducts([]);
  }
  function sortCartProduct() {
    const sorted = cartProducts.sort((a, b) => b.price - a.price);
    setCartProducts([...sorted]);
  }
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProduct,
        removeProduct,
        removeCartProducts,
        sortCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
