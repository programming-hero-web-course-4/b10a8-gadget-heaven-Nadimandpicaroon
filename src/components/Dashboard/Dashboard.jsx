import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../WishList/WishListContext";
import { useContext, useState } from "react";
import DashProduct from "../DashProduct/DashProduct";

const Dashboard = () => {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const { wishlistProducts, removeProductFromWishlist } =
    useContext(WishlistContext);
  const [view, setView] = useState("cart");

  return (
    <div>
      <div className="bg-[#9538E2] text-center items-center">
        <h2 className="text-3xl text-white font-bold my-5">Dashboard</h2>
        <p className="text-lg text-white my-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="my-5 items-center">
          <button
            className={`btn rounded-3xl py-3 px-12 font-bold ${
              view === "cart"
                ? "bg-white text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
            onClick={() => setView("cart")}
          >
            Cart
          </button>
          <button
            className={`btn rounded-3xl py-3 px-12 font-bold ${
              view === "wishlist"
                ? "bg-white text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
            onClick={() => setView("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>
      {view === "cart" ? (
        <div>
          {cartProducts && cartProducts.length > 0 ? (
            cartProducts.map((dashProduct) => (
              <DashProduct
                dashProduct={dashProduct}
                removeProduct={removeProduct}
                key={dashProduct.product_id}
              />
            ))
          ) : (
            <p className="text-center font-bold text-3xl text-gray-700">
              No products in the cart.
            </p>
          )}
        </div>
      ) : (
        <div>
          {wishlistProducts && wishlistProducts.length > 0 ? (
            wishlistProducts.map((wishlistProduct) => (
              <DashProduct
                dashProduct={wishlistProduct}
                key={wishlistProduct.product_id}
                removeProduct={() => {
                  removeProductFromWishlist(wishlistProduct.product_id);
                  addProduct(wishlistProduct);
                }}
                isWishlistView
              />
            ))
          ) : (
            <p className="text-center font-bold text-3xl text-gray-700">
              No products in the wishlist.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
