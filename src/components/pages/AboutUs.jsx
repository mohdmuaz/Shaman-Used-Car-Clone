import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutImage from "../../assets/AboutImg.jpg";
import AboutImage1 from "../../assets/AboutImg1.jpg";
import AboutImage2 from "../../assets/AboutImg2.jpg";

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); 
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 mt-16">
        <div className="lg:w-1/2 w-full lg:pr-8 mt-14">
          <h1 className="text-4xl font-semibold mb-6 text-gray-800">
            About Us
          </h1>
          <p className="text-black text-base font-medium leading-relaxed">
            We, Shaman Used Cars Pvt. Ltd. located at Kalina, Santacruz(E),
            Mumbai commenced our operations in the year 2002. With an unmatched
            selection of meticulously curated pre-owned vehicles, we offer a
            refined car-buying experience. Our commitment goes beyond
            transactions; it’s about trust. Our mission is to provide a
            seamless, reliable, and hassle-free journey for our customers.
            <br />
            Our extensive inventory boasts top-tier vehicles across various
            segments, each thoroughly inspected for quality and performance.
            What sets us apart is our unwavering dedication to transparency and
            integrity in every interaction. Get exciting offerings like
            trade-ins, a 1-year comprehensive warranty*, free RC transfer,
            Finance, and much more.
            <br />
            Our certified assurance guarantees the authenticity and reliability
            of your chosen vehicle. At Shaman Used Cars, customer satisfaction
            is our priority. Immerse yourself in an unparalleled automotive
            experience, where professionalism, integrity, and excellence
            converge seamlessly. Begin your journey to owning a premium
            pre-owned vehicle with complete peace of mind.
          </p>
        </div>

        <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
          <img
            src={AboutImage}
            alt="Shaman Used Cars"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="w-full m-10">
        <ul className="text-base leading-relaxed list-disc pl-6">
          <li>
            Our certified cars undergo a rigorous 143-point inspection,
            including service history and ownership details.
          </li>
          <li>
            Enjoy peace of mind with a one-year warranty on our certified
            vehicles.
          </li>
          <li>Experience hassle-free ownership transfer services.</li>
          <li>
            Benefit from our extensive service center network, ensuring thorough
            service history verification.
          </li>
          <li>
            Our Finance and Insurance experts provide tailored financial and
            insurance solutions for your convenience.
          </li>
        </ul>
      </div>

      <h1 className="text-center text-4xl font-semibold my-10 py-6">Discover More</h1>


      {/* Das WeltAuto Section */}
      <div
        id="DasWeltAuto"
        className="w-full h-[50vh] flex items-center justify-between p-6 border-2"
      >
        <div className="w-2/5">
          <img
            src={AboutImage1}
            alt="Das WeltAuto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-3/5 pl-6">
          <p className="text-lg font-semibold text-gray-800">
            Das WeltAuto, Volkswagen’s Multi-brand Stop for Buying Certified
            Used Cars or Selling Your Used Cars Online at the Best Price.
          </p>
          <ul className="mt-4 list-disc pl-6 text-base font-medium text-gray-700">
            <li>Buy a certified pre-owned car with genuine parts.</li>
            <li>Sell your car the hassle-free way.</li>
            <li>Exchange your car and upgrade to a new Volkswagen.</li>
          </ul>
        </div>
      </div>

      {/* Auto Terrace Section */}
      <div
        id="AutoTerrace"
        className="w-full h-[50vh] flex items-center justify-between p-6 border-2 mt-16 mb-16"
      >
        <div className="w-3/5 pl-6">
          <p className="text-lg font-semibold text-gray-800">
            Auto Terrace, Honda’s premier platform for buying certified used
            cars or selling your cars with ease.
          </p>
          <ul className="mt-4 list-disc pl-6 text-base font-medium text-gray-700">
            <li>Buy a certified pre-owned car with genuine parts.</li>
            <li>Sell your car the hassle-free way.</li>
            <li>Exchange your car and upgrade to a new Honda.</li>
          </ul>
        </div>
        <div className="w-2/5">
          <img
            src={AboutImage2}
            alt="Auto Terrace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
