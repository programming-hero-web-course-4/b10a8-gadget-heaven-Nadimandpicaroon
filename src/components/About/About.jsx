import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - About Us Shows In Here</title>
        <meta
          name="description"
          content="View More Info on your About Section."
        />
      </Helmet>
      <div className="bg-[#9538E2] text-center items-center my-5">
        <div className="mx-auto container py-6">
          <h2 className="text-3xl text-white font-bold my-5">About Us</h2>
          <p className="text-lg text-white my-6">
            At Gadget Heaven, we pride ourselves on delivering top-tier gadgets
            that meet customer expectations. With consistent 5-star reviews
            praising our quality, pricing, and seamless service, we're the
            trusted destination for tech enthusiasts seeking excellence.
          </p>
        </div>
      </div>
      <div className="container mx-auto my-6 items-center">
        <h2 className="text-4xl font-bold my-5 text-center">More Info</h2>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">Efficiency</div>
            <div className="collapse-content">
              <p>
                We optimize every step of our workflow to boost productivity and
                reduce waste, ensuring our gadgets are produced swiftly without
                compromising quality.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">Commitment</div>
            <div className="collapse-content">
              <p>
                Our dedication to customer satisfaction drives us to
                consistently deliver high-quality products and exceptional
                service that exceeds expectations.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">Compliance</div>
            <div className="collapse-content">
              <p>
                We adhere to stringent industry regulations and ethical
                practices, ensuring our gadgets meet safety standards and
                environmental guidelines.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Process & Quality
            </div>
            <div className="collapse-content">
              <p>
                Our process ensures structured development, from ideation to
                delivery, prioritizing user satisfaction. We maintain strict
                quality checks to offer reliable, cutting-edge gadgets.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Manufacturing
            </div>
            <div className="collapse-content">
              <p>
                Our manufacturing emphasizes precision and advanced technology,
                ensuring every gadget is crafted with care. We prioritize high
                standards to deliver reliable, top-quality products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
