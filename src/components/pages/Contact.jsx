import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 p-6 md:p-8 mt-10 md:mt-20 md:ml-14">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10 mt-8 md:mt-14">
            Contact Us
          </h1>

          <p className="text-gray-700 mb-4 md:mb-6 mt-6 md:mt-16 text-base md:text-lg">
            Award-winning, family-owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </p>

          <p className="text-gray-700 mt-8 md:mt-12 mb-6 md:mb-10 text-sm md:text-base">
            Metro Estate, 178, CST Road, Kolivery Village, MMRDA Area, Kalina,
            Santacruz East, Mumbai, Maharashtra 400098
          </p>

          <div className="flex items-center mb-4">
            <MdCall className="text-red-600 mr-2 text-lg md:text-xl" />
            <p className="text-gray-700 font-medium text-sm md:text-base">
              +91 91671 00686
            </p>
          </div>

          <div className="flex items-center mb-6">
            <MdEmail className="text-red-600 mr-2 text-lg md:text-xl" />
            <p className="text-gray-700 font-medium text-sm md:text-base">
              salesmanager@shamanusedcars.com
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaFacebook className="text-xl md:text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaInstagram className="text-xl md:text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaLinkedin className="text-xl md:text-2xl" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 md:p-8 flex flex-col justify-center">
          <p className="text-black mb-8 md:mb-12 mt-8 md:mt-28 text-base md:text-lg font-semibold">
            Fill out the form below and one of our representatives will contact
            you soon.
          </p>
          <form className="space-y-6 md:space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm md:text-base font-semibold text-black mb-2"
              >
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name*"
                className="w-full border border-gray-300 p-3 rounded-md text-sm md:text-base"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base font-semibold text-black mb-2"
              >
                Your Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email address*"
                className="w-full border border-gray-300 p-3 rounded-md text-sm md:text-base"
                required
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-sm md:text-base font-semibold text-black mb-2"
              >
                Your Mobile*
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Mobile*"
                className="w-full border border-gray-300 p-3 rounded-md text-sm md:text-base"
                required
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label
                htmlFor="consent"
                className="ml-2 text-sm md:text-base text-black"
              >
                I hereby give my consent (
                <a href="/privacy-policy" className="text-blue-500 underline">
                  View Privacy Policy
                </a>
                )
              </label>
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div
        className="w-full"
        style={{
          height: "60vh",
          marginTop: "2rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5067972.79711772!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84b772b50c5%3A0x26c94352a7d4bb3a!2sShaman%20Used%20Cars!5e0!3m2!1sen!2sin!4v1683567856672!5m2!1sen!2sin&zoom=3"
          className="w-full h-full border-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
