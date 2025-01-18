import { useState } from "react";
import Dealership1 from "../../assets/dealership1.png";
import Dealership2 from "../../assets/dealership2.png";
import Dealership3 from "../../assets/dealership3.png";
import Dealership4 from "../../assets/dealership4.png";
import {
  AiOutlineClockCircle,
  AiOutlineSafetyCertificate,
  AiOutlineDollarCircle,
} from "react-icons/ai";

const DealershipPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    brand: "",
    model: "",
    regNo: "",
    year: "",
    kilometers: "",
    consent: false,
  });

  const [activeStep, setActiveStep] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-full h-full bg-white p-6 sm:p-12">
        <div className="h-auto flex flex-col justify-between">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-6 sm:mb-8 mt-10 sm:mt-20">
            Want to sell your car?
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex flex-col items-center p-4">
              <img
                src={Dealership1}
                alt="Logo 1"
                className="mb-2 h-28 w-28 object-contain"
              />
              <p className="text-center text-xl font-semibold">
                Free Evaluation
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <img
                src={Dealership2}
                alt="Logo 2"
                className="mb-2 h-28 w-28 object-contain"
              />
              <p className="text-center text-xl font-semibold">Best Price</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <img
                src={Dealership3}
                alt="Logo 3"
                className="mb-2 h-28 w-28 object-contain"
              />
              <p className="text-center text-xl font-semibold">Quick Payment</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <img
                src={Dealership4}
                alt="Logo 4"
                className="mb-2 h-28 w-28 object-contain"
              />
              <p className="text-center text-base font-bold">
                Hassle Free Transfer
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6 mt-5">
        Answer a few questions and connect with our expert advisor for free
        consultation.
      </h2>

      <div className="w-full max-w-5xl bg-blue-50 p-6 sm:p-10 shadow-lg rounded-3xl mt-10 mb-10">
        <form onSubmit={handleSubmit} className="space-y-6 m-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 shadow rounded-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full p-3 mt-2 shadow rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Your Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile"
                className="w-full p-3 mt-2 shadow rounded-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700"
              >
                Brand
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-3 mt-2 shadow rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            <div className="mt-4">
              <label
                htmlFor="model"
                className="block text-sm font-medium text-gray-700"
              >
                Car Model
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="w-full p-3 mt-2 shadow rounded-lg"
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="regNo"
                className="block text-sm font-medium text-gray-700"
              >
                Registration Number
              </label>
              <input
                type="text"
                id="regNo"
                name="regNo"
                value={formData.regNo}
                onChange={handleChange}
                className="w-full p-3 mt-2 shadow rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            <div className="mt-4">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700"
              >
                Year
              </label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-3 mt-2 shadow rounded-lg"
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="kilometers"
                className="block text-sm font-medium text-gray-700"
              >
                Kilometers
              </label>
              <input
                type="number"
                id="kilometers"
                name="kilometers"
                value={formData.kilometers}
                onChange={handleChange}
                className="w-full p-3 mt-2 shadow rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              I hereby give my consent{" "}
              <a href="/privacy-policy" className="text-blue-600">
                View Privacy policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className=" py-3 mt-6 bg-red-600 text-white text-lg rounded-md hover:bg-red-700 transition p-5 font-semibold"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full max-w-5xl p-6 sm:p-10 mb-10">
        <h2 className="text-5xl font-semibold text-gray-800 text-center mb-14">
          How it works?
        </h2>
        <div className="flex justify-around">
          <button
            onClick={() => setActiveStep(1)}
            className="text-lg font-bold text-gray-700 hover:border hover:bg-gray-200 p-2 "
          >
            Step 1: You contact us
          </button>
          <button
            onClick={() => setActiveStep(2)}
            className="text-lg font-bold text-gray-700 hover:border hover:bg-gray-200 p-2 "
          >
            Step 2: We inspect your Car
          </button>
          <button
            onClick={() => setActiveStep(3)}
            className="text-lg font-bold text-gray-700 hover:border p-2 hover:bg-gray-200
           "
          >
            Step 3: You get a value estimate
          </button>
        </div>
        <div className="mt-2 ml-10 text-gray-700 bg-gray-100 p-2 ">
          {activeStep === 1 && (
            <p>
              Fill in the form with required details and receive a call from us.
            </p>
          )}
          {activeStep === 2 && (
            <p>
              Our certified technicians will visit your place and evaluate your
              car.
            </p>
          )}
          {activeStep === 3 && (
            <p>
              Our representative will share with you the digital report with the
              car estimate.
            </p>
          )}
        </div>
      </div>

      <div className="w-full max-w-6xl p-6 sm:p-10 mb-10">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Benefits of selling your car to us
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center p-6  shadow-2xl  w-1/3 mx-2">
            <AiOutlineClockCircle className="h-16 w-16 mb-4 text-gray-500" />
            <p className="text-center text-lg font-semibold">
              Quick and Easy Process
            </p>
          </div>
          <div className="flex flex-col items-center p-6  shadow-2xl  w-1/3 mx-2">
            <AiOutlineSafetyCertificate className="h-16 w-16 mb-4 text-gray-500" />
            <p className="text-center text-lg font-semibold">
              Total Transparency
            </p>
          </div>
          <div className="flex flex-col items-center p-6  shadow-2xl  w-1/3 mx-2">
            <AiOutlineDollarCircle className="h-16 w-16 mb-4 text-gray-500" />
            <p className="text-center text-lg font-semibold">
              Get Instantly Paid
            </p>
          </div>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6385837696317!2d72.870217!3d19.0732555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84b772b50c5%3A0x26c94352a7d4bb3a!2sShaman%20Used%20Cars!5e0!3m2!1sen!2sin!4v1683567856672!5m2!1sen!2sin&zoom=8"
          className="w-full h-full border-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default DealershipPage;
