import LogoImage from "../assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center p-2 transition-all duration-500 z-50 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-black text-white"
      }`}
    >
      <div className="mr-12 ml-5">
        <a href="/">
          <img
            src={LogoImage}
            alt="Logo"
            className={`cursor-pointer transition-all duration-500 ${
              isScrolled ? "h-[65px] w-[90px]" : "h-[70px] w-[120px]"
            }`}
          />
        </a>
      </div>

      <div className="ml-auto flex lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </div>

      <div
        className={`hidden lg:flex space-x-6 font-semibold transition-all duration-500`}
      >
        <div className="p-2 cursor-pointer">
          <a href="/BuyUsedCar" className="hover:text-red-500">
            Buy Used Cars
          </a>
        </div>
        <div className="p-2 cursor-pointer">
          <a href="/SellCar" className="hover:text-red-500">
            Sell Cars
          </a>
        </div>
        <div className="p-2 cursor-pointer">
          <a href="/Finance" className="hover:text-red-500">
            Finance
          </a>
        </div>
        <div className="p-2 cursor-pointer">
          <a href="/AboutUs" className="hover:text-red-500">
            About Us
          </a>
        </div>
        <div className="p-2 cursor-pointer">
          <a href="/Contact" className="hover:text-red-500">
            Contact
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute top-full right-0 w-full bg-black text-white lg:hidden`}
        >
          <div className="flex flex-col space-y-4 p-4 font-semibold">
            <a href="/BuyUsedCar" className="hover:text-red-500">
              Buy Used Cars
            </a>
            <a href="/SellCar" className="hover:text-red-500">
              Sell Cars
            </a>
            <a href="/Finance" className="hover:text-red-500">
              Finance
            </a>
            <a href="/AboutUs" className="hover:text-red-500">
              About Us
            </a>
            <a href="/Contact" className="hover:text-red-500">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
