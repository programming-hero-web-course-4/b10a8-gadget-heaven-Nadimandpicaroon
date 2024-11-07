import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../WishList/WishListContext";
import { useContext, useEffect, useState } from "react";
import DashProduct from "../DashProduct/DashProduct";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const navigate = useNavigate();
  const {
    cartProducts,
    addProduct,
    removeProduct,
    removeCartProducts,
    sortCartProduct,
  } = useContext(CartContext);
  const { wishlistProducts, removeProductFromWishlist } =
    useContext(WishlistContext);
  const [view, setView] = useState("cart");
  const [totalAmount, setTotalAmount] = useState(0);
  function getTotalAmount() {
    const total = cartProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    return total.toFixed(2);
  }

  function handlePurchase() {
    removeCartProducts();
    navigate("/");
  }

  useEffect(() => {
    const totalCost = getTotalAmount();
    setTotalAmount(totalCost);
    console.log(cartProducts);
  }, [cartProducts]);

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
          <div>
            <div className="flex justify-between items-center container mx-auto">
              <div>
                <h3 className="text-3xl font-bold">Cart</h3>
              </div>
              <div className="flex items-center gap-x-6">
                <span>
                  <h3 className="text-3xl font-bold">
                    Total Cost: {totalAmount}
                  </h3>
                </span>
                {/* sort By Price */}
                <span>
                  <button
                    onClick={sortCartProduct}
                    className="btn font-bold rounded-3xl text-[#9538E2] bg-white text-lg py-2 px-4 border-[#7c2ebd]"
                  >
                    Sort By Price
                    <FontAwesomeIcon icon={faChartSimple} />
                  </button>
                </span>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <span>
                  <button
                    className="btn bg-[#9538E2] text-white rounded-3xl text-lg font-bold hover:bg-white hover:text-[#9538E2] hover:border-[#7c2ebd]"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Purchase
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="items-center text-center bg-white p-12 rounded-lg">
                      <span>
                        <FontAwesomeIcon
                          className="h-12 w-12 text-green-400"
                          icon={faSquareCheck}
                        />
                      </span>
                      <h3 className="text-2xl font-bold">
                        Payment Successfully{" "}
                      </h3>
                      <div className="border-t-2 text-gray-800 my-4"></div>
                      <p className="mb-2 text-lg font-semibold text-gray-600">
                        Thanks For Purchasing
                      </p>
                      <p className="mb-4 text-lg font-semibold text-gray-600">
                        Total:
                      </p>
                      <div className="items-center">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button
                            onClick={handlePurchase}
                            className="btn rounded-2xl font-bold  w-full"
                          >
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </span>
              </div>
            </div>
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
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h2>Wishlist</h2>
          </div>
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
