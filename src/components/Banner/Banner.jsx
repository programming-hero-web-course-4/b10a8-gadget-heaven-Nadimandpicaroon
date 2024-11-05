import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto bg-[#9538E2] text-white rounded-lg items-center text-center">
        <h2 className="text-5xl font-bold my-6">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h2>
        <p className="text-md mb-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <button className="btn rounded-xl bg-white text-[#9538E2] mb-64">
          Shop Now
        </button>
      </div>
      <section className=" mx-auto container -translate-y-1/3 relative w-[900px] h-[511px]">
        <div className="absolute inset-0 rounded-lg border-4 border-white">
          <img
            src={bannerImg}
            alt="BannerImage"
            className="w-full h-full rounded-lg object-cover relative"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
