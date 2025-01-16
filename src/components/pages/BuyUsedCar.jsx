import { useState } from "react";
import Deal1 from '../../assets/Deal1.jpg'

const BuyUsedCar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Generate dummy data for 20 divs
  const carData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    image:{Deal1},
    heading: "Honda City 8549",
    details: "2015, Automatic, 68,884 km, Petrol, Front-wheel Drive",
    price: "Rs540,000",
  }));

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = carData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(carData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full p-4 mt-28">
      {currentItems.map((car) => (
        <div
          key={car.id}
          className="w-full flex items-center p-4 mb-4 rounded-lg shadow-md"
        >
          {/* Image */}
          <img
            src={Deal1}
            alt="Car"
            className="w-[180px] h-[150px] rounded-lg"
          />
          {/* Text Content */}
          <div className="flex-grow px-4">
            <h2 className="text-xl font-bold mb-2">{car.heading}</h2>
            <p className="text-gray-600">{car.details}</p>
          </div>
          {/* Price */}
          <div className="text-right">
            <p className="text-2xl font-bold text-black">{car.price}</p>
          </div>
        </div>
      ))}

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(carData.length / itemsPerPage)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BuyUsedCar;
