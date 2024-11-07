import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

const DashProduct = ({ dashProduct, removeProduct, isWishlistView }) => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center rounded-xl my-4 p-3 bg-gray-100 gap-2">
        <div>
          <img
            className="h-full w-[8rem] rounded-xl"
            src={dashProduct.product_image}
            alt="product.image"
          />
        </div>
        <div className="flex justify-center  flex-col">
          <h2 className="font-bold text-2xl my-2 text-black">
            {dashProduct.product_title}
          </h2>
          <p className="text-black mb-2">{dashProduct.description}</p>
          <p className="text-black font-semibold texl-xl mb-2">
            Price: ${dashProduct.price}
          </p>
        </div>
        <div>
          {/* remove button */}
          <button
            onClick={() => removeProduct(dashProduct.product_id)}
            className={`btn rounded-full ${
              isWishlistView
                ? "text-blue-600 border-blue-600"
                : "text-red-600 border-red-600"
            }`}
          >
            {isWishlistView ? "Add to Cart" : "X"}
          </button>
        </div>
      </div>

      {/* cart section price,  sort by price , purchase */}

      <div className="flex justify-between items-center container mx-auto">
        <div>
          <h3 className="text-3xl font-bold">Cart</h3>
        </div>
        <div className="flex items-center gap-x-6">
          <span>
            <h3 className="text-3xl font-bold">Total Cost: Amount</h3>
          </span>
          {/* sort By Price */}
          <span>
            <button className="btn font-bold rounded-3xl text-[#9538E2] bg-white text-lg py-2 px-4 border-[#7c2ebd]">
              Sort By Price
              <FontAwesomeIcon icon={faChartSimple} />
            </button>
          </span>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <span>
            <button
              className="btn bg-[#9538E2] text-white rounded-3xl text-lg font-bold hover:bg-white hover:text-[#9538E2] hover:border-[#7c2ebd]"
              onClick={() => document.getElementById("my_modal_5").showModal()}
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
                <h3 className="text-2xl font-bold">Payment Successfully </h3>
                <div className="border-t-2 text-gray-800 my-4"></div>
                <p className="mb-2 text-lg font-semibold text-gray-600">
                  Thanks For Purchasing
                </p>
                <p className="mb-4 text-lg font-semibold text-gray-600">
                  Total: amount
                </p>
                <div className="items-center">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn rounded-2xl font-bold  w-full">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashProduct;
