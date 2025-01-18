import { useState } from "react";
import Deal1 from "../../assets/Deal1.jpg";
import Deal2 from "../../assets/Deal2.jpg";
import Deal3 from "../../assets/Deal3.jpg";
import Dropdown from "./Dropdown";

const BuyUsedCar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    type: "",
    price: "",
    kms: "",
    listing: "",
    fuel: "",
    year: "",
    transmission: "",
    color: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  const carData = [
    {
      id: 1,
      image: Deal1,
      heading: "Honda City 8549",
      details: [
        "2015",
        "68,884 km",
        "Automatic",
        "Petrol",
        "Front-wheel Drive",
      ],
      price: "Rs540,000",
    },
    {
      id: 2,
      image: Deal2,
      heading: "Toyota Corolla Altis",
      details: ["2018", "45,123 km", "Manual", "Diesel", "Front-wheel Drive"],
      price: "Rs850,000",
    },
    {
      id: 3,
      image: Deal3,
      heading: "Maruti Suzuki Swift",
      details: [
        "2020",
        "20,321 km",
        "Automatic",
        "Petrol",
        "Front-wheel Drive",
      ],
      price: "Rs600,000",
    },
  ];

  const handleFilterChange = (filter, value) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  const handleSearch = () => {
    
    const filteredData = carData.filter((car) => {
      return (
        (!filters.make || car.heading.includes(filters.make)) &&
        (!filters.model || car.heading.includes(filters.model)) &&
        (!filters.type || car.details.includes(filters.type)) &&
        (!filters.price ||
          parseInt(car.price.replace(/[^0-9]/g, "")) <=
            parseInt(filters.price.replace(/[^0-9]/g, ""))) &&
        (!filters.kms ||
          car.details.some((detail) => detail.includes(filters.kms))) &&
        (!filters.listing || car.details.includes(filters.listing)) &&
        (!filters.fuel || car.details.includes(filters.fuel)) &&
        (!filters.year || car.details.includes(filters.year)) &&
        (!filters.transmission || car.details.includes(filters.transmission)) &&
        (!filters.color || car.details.includes(filters.color))
      );
    });
    setFilteredCars(filteredData);
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setFilters({
      make: "",
      model: "",
      type: "",
      price: "",
      kms: "",
      listing: "",
      fuel: "",
      year: "",
      transmission: "",
      color: "",
    });
    setSearchTerm("");
    setFilteredCars(carData);
    setCurrentPage(1);
  };

  const [filteredCars, setFilteredCars] = useState(carData);

  const makeOptions = [
    "BMW",
    "Hyundai",
    "Honda",
    "Maruti Suzuki",
    "Mercedes",
    "Tata",
    "Toyota",
    "Volkswagen",
    "Audi",
    "Chevrolet",
    "Citroen",
    "Datsun",
    "Fiat",
    "Ford",
    "Isuzu",
    "Jaguar",
    "Jeep",
    "Kia",
    "Mahindra",
    "Mazda",
    "MG Motors",
    "Mitsubishi",
    "Nissan",
    "Renault",
    "Skoda",
    "Volvo",
  ];

  const modelOptions = {
    BMW: ["X5", "3 Series", "X3"],
    Hyundai: ["Verna", "i20", "Creta"],
    Maruti: ["Swift", "Baleno", "Alto"],
  };

  const typeOptions = ["Hatchback", "Sedan", "SUV"];
  const priceOptions = Array.from(
    { length: 58 },
    (_, i) => `Rs ${(i + 6) * 50000}`
  );
  const kmsOptions = [
    "<50,000 km",
    "<100,000 km",
    "<150,000 km",
    "<200,000 km",
    "200,000 km+",
  ];
  const listingOptions = ["Primary Car", "Used Car"];
  const fuelOptions = [
    "Diesel",
    "Petrol",
    "Petrol/CNG",
    "CNG",
    "Electric",
    "Hybrid",
  ];
  const yearOptions = Array.from({ length: 18 }, (_, i) =>
    (2008 + i).toString()
  );
  const transmissionOptions = ["Automatic", "Manual", "Semi-automatic"];
  const colorOptions = [
    "Red",
    "Blue",
    "Black",
    "White",
    "Silver",
    "Gray",
    "Green",
    "Yellow",
    "Brown",
    "Purple",
    "Orange",
  ];

  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 mt-28 ml-14 mr-14">
      {/* Filters Section */}
      <div className="grid -ml-16 -mr-16 grid-cols-5 gap-5 bg-gray-100 p-5 mb-20 text-sm">
        <Dropdown
          title="Make"
          options={makeOptions}
          onChange={(value) => handleFilterChange("make", value)}
        />
        <Dropdown
          title="Model"
          options={filters.make ? modelOptions[filters.make] : []}
          onChange={(value) => handleFilterChange("model", value)}
        />
        <Dropdown
          title="Type"
          options={typeOptions}
          onChange={(value) => handleFilterChange("type", value)}
        />
        <Dropdown
          title="Price (less than)"
          options={priceOptions}
          onChange={(value) => handleFilterChange("price", value)}
        />
        <Dropdown
          title="Kms Driven"
          options={kmsOptions}
          onChange={(value) => handleFilterChange("kms", value)}
        />
        <Dropdown
          title="Used / Premium Listing"
          options={listingOptions}
          onChange={(value) => handleFilterChange("listing", value)}
        />
        <Dropdown
          title="Fuel Type"
          options={fuelOptions}
          onChange={(value) => handleFilterChange("fuel", value)}
        />
        <Dropdown
          title="Year"
          options={yearOptions}
          onChange={(value) => handleFilterChange("year", value)}
        />
        <Dropdown
          title="Transmission"
          options={transmissionOptions}
          onChange={(value) => handleFilterChange("transmission", value)}
        />
        <Dropdown
          title="Color"
          options={colorOptions}
          onChange={(value) => handleFilterChange("color", value)}
        />

        {/* Search Button In Dropdown Section */}
        <div className="grid grid-cols-5 gap-4 mb-8 bg-gray-100 p-4 mt-16">
          <div className="col-span-5 flex items-center">
            <input
              type="text"
              className="p-2 rounded-lg"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="ml-1 px-4 py-2 bg-red-500 text-white rounded-xl"
            >
              Search
            </button>
            <button
              onClick={handleClearAll}
              className="ml-1 px-4 py-2 bg-red-500 text-white rounded-xl"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {paginatedCars.map((car) => (
        <div
          key={car.id}
          className="w-full flex p-4 mb-4 rounded-lg border-2 border-gray-300 hover:border-red-500 transition-all duration-300"
        >
          <img
            src={car.image}
            alt="Car"
            className="w-[220px] h-[150px] rounded-lg border"
          />

          <div className="flex-grow px-4">
            <h2 className="text-2xl font-bold mb-2 pt-4 ml-5">{car.heading}</h2>
            <ul className="list-none flex gap-6 ml-5 pt-2 text-gray-600">
              {car.details.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full inline-block mr-2"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <p className="text-3xl font-bold mt-10 text-red-600">{car.price}</p>
            <a
              href="/Finance"
              className="text-gray-400 underline text-sm mt-4 block"
            >
              Calculate Financing
            </a>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(filteredCars.length / itemsPerPage))
            )
          }
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={
            currentPage === Math.ceil(filteredCars.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BuyUsedCar;
