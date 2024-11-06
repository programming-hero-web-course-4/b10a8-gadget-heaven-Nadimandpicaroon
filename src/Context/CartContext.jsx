import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  function addProduct(product) {
    const isProductInCart = cartProducts.some(
      (cartProduct) => cartProduct.product_id === product.product_id
    );

    if (isProductInCart) {
      alert("Product is already selected");

      return;
    }

    setCartProducts([...cartProducts, product]);
    alert("Added in the cart");
    console.log(cartProducts);
  }
  function removeProduct(product_id, product_title) {
    const filteredProducts = cartProducts.filter(
      (cartProduct) => cartProduct.product_id !== product_id
    );
    setCartProducts(filteredProducts);
    alert(`Product has been removed`);
  }
  return (
    <CartContext.Provider value={{ cartProducts, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
