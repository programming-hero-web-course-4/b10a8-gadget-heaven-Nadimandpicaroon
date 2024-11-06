import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import DashProduct from "../DashProduct/DashProduct";

const Dashboard = () => {
  const { cartProducts, removeProduct } = useContext(CartContext);

  return (
    <div>
      <div className="bg-[#9538E2] text-center items-center">
        <h2 className="text-3xl text-white font-bold my-5">Dashboard</h2>
        <p className="text-lg text-white my-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="my-5 items-center">
          <button className="btn rounded-3xl py-3 px-12 font-bold bg-white text-[#9538E2] mr-3">
            Cart
          </button>
          <button className="btn rounded-3xl py-3 px-12 font-bold bg-white text-[#9538E2]">
            Wishlist
          </button>
        </div>
      </div>
      <div>
        {cartProducts.map((dashProduct) => (
          <DashProduct
            dashProduct={dashProduct}
            removeProduct={removeProduct}
            key={dashProduct.product_id}
          ></DashProduct>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
