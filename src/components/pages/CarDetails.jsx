import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const CarDetails = () => {
  const location = useLocation();
  const { car } = location.state || {};
  if (!car) {
    return <p>Car data not found</p>;
  }

  return (
    <div className="p-8">
      {/* Top Section with Image */}
      <div className="flex flex-col items-center">
        <img
          src={car.image}
          alt={car.heading}
          className="w-[800px] h-[600px] rounded-lg mb-8"
        />
      </div>

      {/* Car Information Section */}
      <div className="flex justify-between mb-8">
        {/* Left Section with Heading and Details */}
        <div className="flex-grow pr-8">
          <h1 className="text-4xl font-bold mb-4">{car.heading}</h1>
          <p className="text-gray-600 mb-4">{car.details.join(", ")}</p>

          {/* Description Section */}
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <ul className="list-none">
            {car.description &&
              Object.entries(car.description).map(([key, value]) => (
                <li key={key} className="mb-2">
                  <span className="font-semibold">{key}:</span> {value}
                </li>
              ))}
          </ul>
        </div>

        {/* Right Section with Price and Overview */}
        <div className="w-[400px]">
          <div className="flex text-center align-center">
            <p className="text-4xl font-semibold">Price: </p>
            <p className="text-4xl font-bold text-red-600 mb-8">{car.price}</p>
          </div>

          {/* Car Overview Section */}
          <h2 className="text-2xl font-semibold mb-4">Car Overview</h2>
          <div className="p-5 bg-blue-100 rounded-lg flex content-evenly">
            <ul className="list-none">
              {car.overview &&
                Object.entries(car.overview).map(([key, value]) => (
                  <li key={key} className="mb-2">
                    <span className="font-semibold">{key}:</span> {value}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>



      {/* Form Section */}
      <div className="mt-24 mb-10">
        <h2 className=" text-center text-4xl font-bold mb-6">Book a Test Drive / Enquire Now</h2>

        <form className="mx-auto p-6">
          
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-4">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
              required
              className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
            />
          </div>

         
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-4">
              Your Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address*"
              required
              className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
            />
          </div>

          {/* Mobile Input */}
          <div className="mb-4">
            <label htmlFor="mobile" className="block font-semibold mb-4">
              Your Mobile*
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile*"
              required
              className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="consent" className="ml-3 text-gray-700 text-sm">
              I hereby give my consent (<a href="#" className="text-blue-600 underline">View Privacy policy</a>)
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className=" bg-red-600 text-white p-4 font-semibold rounded-md hover:bg-red-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

CarDetails.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.object,
    overview: PropTypes.object,
  }),
};

export default CarDetails;
