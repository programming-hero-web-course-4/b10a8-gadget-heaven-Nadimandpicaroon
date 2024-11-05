import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product_image} alt="Product_img" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title items-start">{product_title}</h2>
        <p>Price: {price}$</p>
        <div className="card-actions">
          <Link to={`/gadgets/${product_id}`}>
            <button className="btn rounded-3xl bg-white text-[#9538E2] hover:bg-[#9538E2] hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
