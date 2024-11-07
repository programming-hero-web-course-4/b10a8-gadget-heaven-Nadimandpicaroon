import { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utilities/LocalStorage";

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
      alert("Product is already selected");

      return;
    }
    const newCartProducts = [...cartProducts, product];
    setCartProducts(newCartProducts);
    setLocalStorage("cartProducts", newCartProducts);
    alert("Added in the cart");
    console.log(cartProducts);
  }
  function removeProduct(product_id) {
    const filteredProducts = cartProducts.filter(
      (cartProduct) => cartProduct.product_id !== product_id
    );
    setLocalStorage("cartProducts", filteredProducts);
    setCartProducts(filteredProducts);
    alert(`Product has been removed`);
  }

  function removeCartProducts() {
    setLocalStorage("cartProducts", []);
    setCartProducts([]);
  }
  function sortCartProduct() {
    const sorted = cartProducts.sort(
      (productA, productB) => productA.price - productB.price
    );
    setCartProducts(sorted);
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
