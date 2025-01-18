import LogoImage from "../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center p-2 transition-all duration-500 z-50 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-black text-white"
      }`}
    >
      <div className="mr-12 ml-5">
        <Link to="/">
          <img
            src={LogoImage}
            alt="Logo"
            className={`cursor-pointer transition-all duration-500 ${
              isScrolled ? "h-[65px] w-[90px]" : "h-[70px] w-[120px]"
            }`}
          />
        </Link>
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
          <Link to="/BuyUsedCar" className="hover:text-red-500">
            Buy Used Cars
          </Link>
        </div>
        <div className="p-2 cursor-pointer">
          <Link to="/SellCar" className="hover:text-red-500">
            Sell Cars
          </Link>
        </div>
        <div className="p-2 cursor-pointer">
          <Link to="/Finance" className="hover:text-red-500">
            Finance
          </Link>
        </div>
        <div
          className="p-2 cursor-pointer relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="/AboutUs" className="hover:text-red-500">
            About Us ˇ
          </Link>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md w-48">
              <Link
                to="/AboutUs#DasWeltAuto"
                className="block px-6 py-1.5 mt-3 text-red-600 text-lg font-normal text-left hover:text-red-400"
              >
                Das WeltAuto
              </Link>
              <Link
                to="/AboutUs#AutoTerrace"
                className="block px-6 py-1.5 mb-4 text-red-600 text-lg font-normal text-left hover:text-red-400"
              >
                Auto Terrace
              </Link>
            </div>
          )}
        </div>
        <div className="p-2 cursor-pointer">
          <Link to="/Contact" className="hover:text-red-500">
            Contact
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute top-full right-0 w-full bg-black text-white lg:hidden`}
        >
          <div className="flex flex-col space-y-4 p-4 font-semibold">
            <Link to="/BuyUsedCar" className="hover:text-red-500">
              Buy Used Cars
            </Link>
            <Link to="/SellCar" className="hover:text-red-500">
              Sell Cars
            </Link>
            <Link to="/Finance" className="hover:text-red-500">
              Finance
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleScrollToSection("DasWeltAuto");
              }}
              className="hover:text-red-500 text-left"
            >
              Das WeltAuto
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleScrollToSection("AutoTerrace");
              }}
              className="hover:text-red-500 text-left"
            >
              Auto Terrace
            </button>
            <Link to="/Contact" className="hover:text-red-500">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
