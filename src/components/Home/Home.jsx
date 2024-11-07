import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Gadget Heaven</title>
        <meta
          name="description"
          content="Explore our latest collection of gadgets including laptops, smartwatches, and more."
        />
      </Helmet>
      <Banner></Banner>
      <Gadgets></Gadgets>
    </div>
  );
};

export default Home;
