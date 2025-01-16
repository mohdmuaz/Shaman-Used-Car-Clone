import { useState } from 'react';
import Dealership1 from '../../assets/dealership1.png';
import Dealership2 from '../../assets/dealership2.png';
import Dealership3 from '../../assets/dealership3.png';
import Dealership4 from '../../assets/dealership4.png';

const DealershipPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    brand: '',
    model: '',
    regNo: '',
    year: '',
    kilometers: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
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
              <img src={Dealership1} alt="Logo 1" className="mb-2 h-28 w-28 object-contain" />
              <p className="text-center text-xl font-semibold">Free Evaluation</p>
            </div>

            <div className="flex flex-col items-center p-4">
              <img src={Dealership2} alt="Logo 2" className="mb-2 h-28 w-28 object-contain" />
              <p className="text-center text-xl font-semibold">Best Price</p>
            </div>

            <div className="flex flex-col items-center p-4">
              <img src={Dealership3} alt="Logo 3" className="mb-2 h-28 w-28 object-contain" />
              <p className="text-center text-xl font-semibold">Quick Payment</p>
            </div>

            <div className="flex flex-col items-center p-4">
              <img src={Dealership4} alt="Logo 4" className="mb-2 h-28 w-28 object-contain" />
              <p className="text-center text-base font-bold">Hassle Free Transfer</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6 mt-5">Answer a few questions and connect with our expert advisor for free consultation.</h2>

      <div className="w-full max-w-5xl bg-blue-50 p-6 sm:p-10 shadow-lg rounded-3xl mt-10 mb-10">
        
        <form onSubmit={handleSubmit} className="space-y-6 m-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
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
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Your Mobile</label>
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
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
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
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">Car Model</label>
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
              <label htmlFor="regNo" className="block text-sm font-medium text-gray-700">Registration Number</label>
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
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
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
              <label htmlFor="kilometers" className="block text-sm font-medium text-gray-700">Kilometers</label>
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
              I hereby give my consent <a href="/privacy-policy" className="text-blue-600">View Privacy policy</a>
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
    </div>
  );
};

export default DealershipPage;
