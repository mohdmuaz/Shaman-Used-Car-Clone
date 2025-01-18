import FooterImg from "../assets/footerimg.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 p-8 md:p-12 px-20">
          <div className="flex justify-center md:justify-start mb-8 md:mb-0">
            <img src={FooterImg} alt="Footer Logo" className="h-22 w-22" />
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Buy Used Cars
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Premium Cars
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sell Cars
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <span>example@mail.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>
                  Metro Estate, 178, CST Road, Kolivery Village, MMRDA Area,
                  Kalina, Santacruz East, Mumbai, Maharashtra 400098
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 mt-6 md:mt-0">
            <iframe
              className="w-full h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7541.8483288691715!2d72.86521701472542!3d19.073255499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84b772b50c5%3A0x26c94352a7d4bb3a!2sShaman%20Used%20Cars!5e0!3m2!1sen!2sin!4v1674512401715!5m2!1sen!2sin&z=25"
              title="Google Map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-t border-white pt-4">
          <p className="text-sm mb-4 md:mb-0">
            Copyright Shaman Used Cars © 2023. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
