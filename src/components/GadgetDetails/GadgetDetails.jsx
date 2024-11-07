import { useLoaderData, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../WishList/WishListContext";

const GadgetDetails = () => {
  const { addProduct } = useContext(CartContext);
  const { addProductToWishlist } = useContext(WishlistContext);
  console.log(addProductToWishlist);
  const { product_id } = useParams();
  const id = parseInt(product_id);

  const data = useLoaderData();

  const gadget = data.find((gadget) => gadget.product_id === id);
  console.log(gadget, product_id, data, id);

  const {
    product_id: productId,
    product_title,
    price,
    description,
    product_image,
    Specification,
    availability,
    rating,
  } = gadget;

  return (
    <div>
      <div className="bg-[#9538E2] h-[400px]">
        <div className="container mx-auto text-white rounded-lg items-center text-center">
          <h2 className="text-5xl font-bold my-6">Product Details</h2>
          <p className="text-md ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      {/* card Details */}

      <div className="flex justify-center -translate-y-1/3">
        <div className="hero border-8 border-white bg-base-200 w-[1100px] h-[507px] flex justify-center items-center rounded-xl">
          <div className="hero-content flex-col lg:flex-row">
            <img src={product_image} className="max-w-lg h-60" />
            <div>
              <h1 className="text-5xl font-bold">{product_title}</h1>
              <h2 className="text-xl py-5 font-semibold">Price: $ {price}</h2>

              <span
                className={`${
                  availability
                    ? "bg-[#eefde9] text-[#3c7228] py-1 px-4 rounded-2xl border-2 border-[#309C08]"
                    : "bg-[#f4e4e4] text-[#FF0000] py-1 px-4 rounded-2xl border-2 border-[#FF0000]"
                } mb-4`}
              >
                {availability ? "In Stock" : "Out of Stock"}
              </span>

              <p className="py-6">{description}</p>
              <h4 className="font-bold">Specification:</h4>
              <p className="py-6">{Specification}</p>
              <div>
                <h4 className="font-bold">
                  Rating
                  <FontAwesomeIcon className="text-[#f1c636]" icon={faStar} />
                </h4>
                <div className="flex gap-x-3 text-center items-center my-3">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-[#F9C004]"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-[#F9C004]"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-[#F9C004]"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-[#F9C004]"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-[#F9C004]"
                    />
                  </div>
                  <span className=" bg-gray-300 rounded-3xl p-2">{rating}</span>
                </div>
              </div>

              <div className="flex gap-x-2">
                <button
                  onClick={() => addProduct(gadget)}
                  className="btn gap-2 rounded-3xl bg-[#9538E2] text-white font-bold hover:bg-[#57158c]"
                >
                  Add To Cart <FontAwesomeIcon icon={faCartShopping} />
                </button>
                <span>
                  <button
                    onClick={() => addProductToWishlist(gadget)}
                    className="btn bg-white border-2 rounded-full"
                  >
                    Wishlist
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
