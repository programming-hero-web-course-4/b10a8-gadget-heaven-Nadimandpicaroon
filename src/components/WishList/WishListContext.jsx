import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WishlistContext = createContext({});

export const WishlistContextProvider = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  function addProductToWishlist(product) {
    const isProductInWishlist = wishlistProducts.some(
      (wishlistProduct) => wishlistProduct.product_id === product.product_id
    );

    if (isProductInWishlist) {
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

    setWishlistProducts([...wishlistProducts, product]);
    toast.success("Added to the Wishlist", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  function removeProductFromWishlist(product_id) {
    const filteredWishlist = wishlistProducts.filter(
      (wishlistProduct) => wishlistProduct.product_id !== product_id
    );
    setWishlistProducts(filteredWishlist);
    toast.info("Product has been removed from Wishlist", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
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
