const DashProduct = ({ dashProduct, removeProduct }) => {
  return (
    <div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center rounded-xl my-4 bg-gray-100 gap-2">
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
          className="btn rounded-full text-red-600 border-red-600"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default DashProduct;