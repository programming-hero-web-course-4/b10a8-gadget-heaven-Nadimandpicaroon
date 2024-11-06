import { createContext, useState } from "react";

export const WishlistContext = createContext({});

export const WishlistContextProvider = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  function addProductToWishlist(product) {
    const isProductInWishlist = wishlistProducts.some(
      (wishlistProduct) => wishlistProduct.product_id === product.product_id
    );

    if (isProductInWishlist) {
      alert("Product is already in the wishlist");
      return;
    }

    setWishlistProducts([...wishlistProducts, product]);
    alert("Added to wishlist");
  }

  function removeProductFromWishlist(product_id) {
    const filteredWishlist = wishlistProducts.filter(
      (wishlistProduct) => wishlistProduct.product_id !== product_id
    );
    setWishlistProducts(filteredWishlist);
    alert("Removed from wishlist");
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistProducts,
        addProductToWishlist,
        removeProductFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
