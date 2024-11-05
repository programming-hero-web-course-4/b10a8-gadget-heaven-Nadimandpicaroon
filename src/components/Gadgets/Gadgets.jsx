import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Products");

  useEffect(() => {
    fetch("./gadgetsData.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setFilteredGadgets(data);
        const allCategories = [
          "All Products",
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(allCategories);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setFilteredGadgets(
      category === "All Products"
        ? gadgets
        : gadgets.filter((item) => item.category === category)
    );
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center font-bold mt-6 mb-12">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          {categories.map((category) => (
            <button
              key={category}
              className={`w-full py-2 px-3 mb-2 rounded-xl font-bold ${
                activeCategory === category
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGadgets.map((gadget) => (
            <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
