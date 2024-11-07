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
    </div>
  );
};

export default DashProduct;
