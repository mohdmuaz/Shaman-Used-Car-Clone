import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Finance1 from '../../assets/finance1.png';
import Finance2 from '../../assets/finance2.png';
import Finance3 from '../../assets/finance3.png';
import Finance4 from '../../assets/finance4.png';
import Finance5 from '../../assets/finance5.png';

const LoanCalculator = () => {
  const [price, setPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [period, setPeriod] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  const calculateEMI = () => {
    const loanAmount = price - downPayment;
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfMonths = period;

    const emi =
      loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfMonths) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    const totalPayment = emi * numberOfMonths;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi: emi || 0,
      totalPayment: totalPayment || 0,
      totalInterest: totalInterest || 0,
    };
  };

  const { emi, totalPayment, totalInterest } = calculateEMI();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-4 mt-24">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mt-14">Loan Calculator</h1>
        <p className="text-black mt-10 mb-10 font-semibold">
          Let us help you calculate car loan EMIs so you can plan your budget accordingly.
        </p>
      </div>

      <div className="bg-white p-6 w-full max-w-xl">
        <div className="space-y-4 text-lg font-semibold">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="block text-gray-700 mb-2">Price *</label>
              <input
                type="number"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Interest Rate (%) *</label>
              <input
                type="number"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={interestRate}
                onChange={(e) => setInterestRate(+e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="block text-gray-700 mb-2">Period (months) *</label>
              <input
                type="number"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={period}
                onChange={(e) => setPeriod(+e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Down Payment</label>
              <input
                type="number"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={downPayment}
                onChange={(e) => setDownPayment(+e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-red-600 rounded-lg p-6 max-w-2xl mt-14 text-lg">
        <div className="grid grid-cols-3 gap-14 ml-5 mr-5 mb-5 text-gray-700">
          <div className="text-center">
            <span className="block font-semibold">Monthly Payment</span>
            <span className="font-medium">₹{emi.toFixed(2)}</span>
          </div>

          <div className="text-center">
            <span className="block font-semibold">Total Interest</span>
            <span className="font-medium">₹{totalInterest.toFixed(2)}</span>
          </div>

          <div className="text-center">
            <span className="block font-semibold">Total Payments</span>
            <span className="font-medium">₹{totalPayment.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 w-full mt-20 ml-24 mr-24">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Form</h2>
        <form className="space-y-10 ml-20 mr-20">
          <div>
            <label className="block text-black font-semibold text-base mb-2">Your Name *</label>
            <input
              type="text"
              placeholder="Name*"
              className="w-full border rounded-lg px-3 p-4  focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-black font-semibold text-base mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border rounded-lg px-3 p-4 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-black font-semibold text-base mb-2">Your Mobile *</label>
            <input
              type="tel"
              placeholder="Mobile*"
              className="w-full border rounded-lg px-3 p-4 focus:outline-none"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="consent" className="w-5 h-5 focus:ring-blue-500" />
            <label htmlFor="consent" className="text-gray-700">
              I hereby give my consent (<a href="#" className="text-blue-500 underline">View Privacy Policy</a>)
            </label>
          </div>

          <div>
            <button
              type="submit"
              className=" bg-red-600 text-white p-4 px-5 rounded-lg hover:bg-red-700 font-semibold focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Sliding Section */}
      <div className="bg-white w-full mt-20 mb-20">
        <h2 className="text-6xl font-bold text-center mb-10">Our Finance Partners</h2>
        <div className="w-full max-w-5xl mx-auto ">
          <Slider {...sliderSettings}>
            <img src={Finance1} alt="Partner 1" className="w-full p-10" />
            <img src={Finance2} alt="Partner 2" className="w-full p-10" />
            <img src={Finance3} alt="Partner 3" className="w-full p-10" />
            <img src={Finance4} alt="Partner 4" className="w-full p-10" />
            <img src={Finance5} alt="Partner 5" className="w-full p-10" />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
