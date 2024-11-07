import { Helmet } from "react-helmet-async";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics - The Stats Shows In Here</title>
        <meta
          name="description"
          content="View and manage your shopping cart and wishlist on your dashboard."
        />
      </Helmet>
      <div className="bg-[#9538E2] text-center items-center">
        <div className="mx-auto container py-6">
          <h2 className="text-3xl text-white font-bold my-5">Statistics</h2>
          <p className="text-lg text-white my-6">
            Our statistics highlight key metrics such as product pricing,
            customer ratings, and quality assessments. We ensure competitive
            prices, with average product ratings above 4.5 stars, reflecting
            superior quality and customer satisfaction across our gadget range.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Statistics;
