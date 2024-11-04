const Footer = () => {
  return (
    <footer className="container mx-auto bg-white text-black p-20">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Gadget Heaven</h2>
        <p className="text-gray-800 my-4">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <hr className="border-t border-gray-300 w-3/4 mx-auto mb-8" />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-x-48">
        <nav className="mb-6 md:mb-0">
          <h6 className="footer-title font-bold mb-4">Services</h6>
          <a className="block text-gray-600 hover:text-black">
            Product Support
          </a>
          <a className="block text-gray-600 hover:text-black">Order Tracking</a>
          <a className="block text-gray-600 hover:text-black">
            Shipping & Delivery
          </a>
          <a className="block text-gray-600 hover:text-black">Returns</a>
        </nav>
        <nav className="mb-6 md:mb-0">
          <h6 className="footer-title font-bold mb-4">Company</h6>
          <a className="block text-gray-600 hover:text-black">About Us</a>
          <a className="block text-gray-600 hover:text-black">Careers</a>
          <a className="block text-gray-600 hover:text-black">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold mb-4">Legal</h6>
          <a className="block text-gray-600 hover:text-black">
            Terms of Service
          </a>
          <a className="block text-gray-600 hover:text-black">Privacy Policy</a>
          <a className="block text-gray-600 hover:text-black">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
