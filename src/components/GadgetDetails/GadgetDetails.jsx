import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetails = () => {
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
        <div className="hero bg-base-200 w-[1100px] h-[507px] flex justify-center items-center rounded-xl">
          <div className="hero-content flex-col lg:flex-row">
            <img src={product_image} className="max-w-lg h-60" />
            <div>
              <h1 className="text-5xl font-bold">{product_title}</h1>
              <h2 className="text-xl py-5 font-semibold">Price: $ {price}</h2>
              <p className="py-6">{description}</p>
              <h4 className="font-bold">Specification:</h4>
              <p className="py-6">{Specification}</p>
              <h4 className="font-bold">Rating</h4>
              <p className="py-6">{rating}</p>
              <button className="btn gap-2 rounded-3xl bg-[#9538E2] text-white font-bold hover:bg-[#57158c]">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
