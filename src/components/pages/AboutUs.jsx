import AboutImage from '../../assets/AboutImg.jpg';

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 mt-16">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full lg:pr-8 mt-14">
          <h1 className="text-4xl font-semibold mb-6 text-gray-800">About Us</h1>
          <p className="text-black text-base font-medium leading-relaxed">
            We, Shaman Used Cars Pvt. Ltd. located at Kalina, Santacruz(E), Mumbai commenced our operations in the year 2002. With an unmatched selection of meticulously curated pre-owned vehicles, we offer a refined car-buying experience. Our commitment goes beyond transactions; it’s about trust. Our mission is to provide a seamless, reliable, and hassle-free journey for our customers.
            <br />
            Our extensive inventory boasts top-tier vehicles across various segments, each thoroughly inspected for quality and performance. What sets us apart is our unwavering dedication to transparency and integrity in every interaction. Get exciting offerings like trade-ins, a 1-year comprehensive warranty*, free RC transfer, Finance, and much more.
            <br />
            Our certified assurance guarantees the authenticity and reliability of your chosen vehicle. At Shaman Used Cars, customer satisfaction is our priority. Immerse yourself in an unparalleled automotive experience, where professionalism, integrity, and excellence converge seamlessly. Begin your journey to owning a premium pre-owned vehicle with complete peace of mind.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
          <img 
            src={AboutImage}
            alt="Shaman Used Cars" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="w-full m-10 ">
        <ul className="text-base leading-relaxed list-disc pl-6">
          <li>Our certified cars undergo a rigorous 143-point inspection, including service history and ownership details.</li>
          <li>Enjoy peace of mind with a one-year warranty on our certified vehicles.</li>
          <li>Experience hassle-free ownership transfer services.</li>
          <li>Benefit from our extensive service center network, ensuring thorough service history verification.</li>
          <li>Our Finance and Insurance experts provide tailored financial and insurance solutions for your convenience.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
