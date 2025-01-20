import { useState } from "react";
import { Link } from "react-router-dom";

import Car1 from "../../assets/Images/car1.jpg";
import Car2 from "..//../assets/Images/car2.jpeg";
import Car3 from "..//../assets/Images/car3.jpeg";
import Car4 from "..//../assets/Images/car4.jpeg";
import Car5 from "..//../assets/Images/car5.jpeg";
import Car6 from "..//../assets/Images/car6.jpg";
import Car7 from "..//../assets/Images/car7.jpeg";
import Car8 from "..//../assets/Images/car8.jpeg";
import Car9 from "..//../assets/Images/car9.jpeg";
import Car10 from "..//../assets/Images/car10.jpg";
import Car11 from "..//../assets/Images/car11.jpg";
import Car12 from "..//../assets/Images/car12.jpeg";
import Car13 from "..//../assets/Images/car13.jpg";
import Car14 from "..//../assets/Images/car14.jpeg";
import Car15 from "..//../assets/Images/car15.jpg";

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
      image: Car1,
      heading: "BMW X1 1401",
      details: [
        "2017",
        "67,311 km",
        "Automatic",
        "Diesel",
        "Front-wheel Drive",
      ],
      price: "₹1,695,000",
      description: {
        Make: "BMW",
        Model: "X1 S Drive 20D",
        "Fuel Type": "Diesel",
        "Mfg Year": "2017",
        "Reg Year": "2017",
        Kms: "67,311",
        Ownership: "1",
      },
      overview: {
        Make: "BMW",
        Model: "X1",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Automatic",
        Condition: "Used",
        Year: "2017",
        "Kms Driven": "67,311 km",
        "Fuel Type": "Diesel",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 2,
      image: Car2,
      heading: "Volkswagen Taigun 6951",
      details: ["2022", "41,800 km", "Manual", "Petrol", "Front-wheel Drive"],
      price: "₹1,075,000",
      description: {
        Make: "Volkswagen",
        Model: "Taigun",
        "Fuel Type": "Petrol",
        "Mfg Year": "2022",
        "Reg Year": "2022",
        Kms: "41,800",
        Ownership: "1",
      },
      overview: {
        Make: "Volkswagen",
        Model: "Taigun",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Manual",
        Condition: "Used",
        Year: "2022",
        "Kms Driven": "41,800 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 3,
      image: Car3,
      heading: "Honda City 8549",
      details: [
        "2015",
        "69,994 km",
        "Automatic",
        "Petrol",
        "Front-wheel Drive",
      ],
      price: "₹540,000",
      description: {
        Make: "Honda",
        Model: "City 1.5 VX",
        "Fuel Type": "Petrol",
        "Mfg Year": "2015",
        "Reg Year": "2015",
        Kms: "69994",
        Ownership: "1",
      },
      overview: {
        Make: "Honda",
        Model: "City",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Automatic",
        Condition: "Used",
        Year: "2015",
        "Kms Driven": "69,994 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 4,
      image: Car4,
      heading: "Maruti Ciaz 6750",
      details: [
        "2017",
        "47,970 km",
        "Automatic",
        "Petrol",
        "Front-wheel Drive",
      ],
      price: "₹575,000",
      description: {
        Make: "Maruti",
        Model: "Ciaz Alpha",
        "Fuel Type": "Petrol",
        "Mfg Year": "2017",
        "Reg Year": "2017",
        Kms: "47970",
        Ownership: "1",
      },
      overview: {
        Make: "Maruti",
        Model: "Ciaz",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Automatic",
        Condition: "Used",
        Year: "2017",
        "Kms Driven": "47,970 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 5,
      image: Car5,
      heading: "Honda Amaze 4097",
      details: [
        "2022",
        "25,322 km",
        "Automatic",
        "Petrol",
        "Front-wheel Drive",
      ],
      price: "₹750,000",
      description: {
        Make: "Honda",
        Model: "Amaze VX",
        "Fuel Type": "Petrol",
        "Mfg Year": "2022",
        "Reg Year": "2022",
        Kms: "25,322",
        Ownership: "1",
      },
      overview: {
        Make: "Honda",
        Model: "Amaze",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Automatic",
        Condition: "Used",
        Year: "2022",
        "Kms Driven": "25,322 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 6,
      image: Car6,
      heading: "Volkswagen Polo Gt 9415",
      details: [
        "2014",
        "70,200 km",
        "Automatic",
        "Petrol",
        "Front-wheel Drive",
      ],
      price: "₹575,000",
      description: {
        Make: "Volkswagen",
        Model: "Polo Gt 1.2 TSI",
        "Fuel Type": "Petrol",
        "Mfg Year": "2014",
        "Reg Year": "2014",
        Kms: "70,200",
        Ownership: "1",
      },
      overview: {
        Make: "Volkswagen",
        Model: "Polo Gt",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Automatic",
        Condition: "Used",
        Year: "2014",
        "Kms Driven": "70,200 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 7,
      image: Car7,
      heading: "Honda Jazz 0024",
      details: [
        "2017",
        "53,828 km",
        "Automatic",
        "Petrol",
        "Front-wheel Drive",
      ],
      price: "₹550,000",
      description: {
        Make: "Honda",
        Model: "Jazz V",
        "Fuel Type": "Petrol",
        "Mfg Year": "2017",
        "Reg Year": "2017",
        Kms: "53,828",
        Ownership: "1",
      },
      overview: {
        Make: "Honda",
        Model: "Jazz",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Automatic",
        Condition: "Used",
        Year: "2017",
        "Kms Driven": "53,828 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 8,
      image: Car8,
      heading: "Honda Amaze (Diesel) 7478",
      details: [
        "2018",
        "74,300 km",
        "Automatic",
        "Diesel",
        "Front-wheel Drive",
      ],
      price: "₹750,000",
      description: {
        Make: "Honda",
        Model: "Amaze V",
        "Fuel Type": "Diesel",
        "Mfg Year": "2018",
        "Reg Year": "2018",
        Kms: "74,300",
        Ownership: "1",
      },
      overview: {
        Make: "Honda",
        Model: "Amaze",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Automatic",
        Condition: "Used",
        Year: "2018",
        "Kms Driven": "74,300 km",
        "Fuel Type": "Diesel",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 9,
      image: Car9,
      heading: "Maruti Wagon R (CNG) 5754",
      details: [
        "2021",
        "13,950 km",
        "Manual",
        "Petrol/CNG",
        "Front-wheel Drive",
      ],
      price: "₹575,000",
      description: {
        Make: "Maruti",
        Model: "Wagon R VXI",
        "Fuel Type": "Petrol/CNG",
        "Mfg Year": "2021",
        "Reg Year": "2021",
        Kms: "13,950",
        Ownership: "1",
      },
      overview: {
        Make: "Maruti",
        Model: "Wagon R",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Manual",
        Condition: "Used",
        Year: "2021",
        "Kms Driven": "13,950 km",
        "Fuel Type": "Petrol/CNG",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 10,
      image: Car10,
      heading: "Toyota Corolla Altis 4996",
      details: [
        "2017",
        "54,477 km",
        "Automatic",
        "Petrol",
        "Front-wheel Drive",
      ],
      price: "₹800,000",
      description: {
        Make: "Toyota",
        Model: "Corolla Altis 1.8 G",
        "Fuel Type": "Petrol",
        "Mfg Year": "2017",
        "Reg Year": "2017",
        Kms: "54,477",
        Ownership: "1",
      },
      overview: {
        Make: "Toyota",
        Model: "Corolla Altis",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Automatic",
        Condition: "Used",
        Year: "2017",
        "Kms Driven": "54,477 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 11,
      image: Car11,
      heading: "Hyundai Grand i10 2171",
      details: ["2018", "46,588 km", "Manual", "Petrol", "Front-wheel Drive"],
      price: "₹465,000",
      description: {
        Make: "Hyundai",
        Model: "Grand i10 Magna",
        "Fuel Type": "Petrol",
        "Mfg Year": "2018",
        "Reg Year": "2018",
        Kms: "46,588",
        Ownership: "1",
      },
      overview: {
        Make: "Hyundai",
        Model: "Grand i10",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Manual",
        Condition: "Used",
        Year: "2018",
        "Kms Driven": "46,588 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 12,
      image: Car12,
      heading: "Hyundai Creta 9635",
      details: ["2015", "25,561 km", "Manual", "Petrol", "Front-wheel Drive"],
      price: "₹465,000",
      description: {
        Make: "Hyundai",
        Model: "Creta 1.6 S",
        "Fuel Type": "Petrol",
        "Mfg Year": "2015",
        "Reg Year": "2015",
        Kms: "25,561",
        Ownership: "1",
      },
      overview: {
        Make: "Hyundai",
        Model: "Creta",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Manual",
        Condition: "Used",
        Year: "2015",
        "Kms Driven": "25,561 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 13,
      image: Car13,
      heading: "Hyundai i20 2774",
      details: ["2014", "11,416 km", "Manual", "Petrol", "Front-wheel Drive"],
      price: "₹350,000",
      description: {
        Make: "Hyundai",
        Model: "i20 Magna",
        "Fuel Type": "Petrol",
        "Mfg Year": "2014",
        "Reg Year": "2014",
        Kms: "11,416",
        Ownership: "1",
      },
      overview: {
        Make: "Hyundai",
        Model: "i20",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Manual",
        Condition: "Used",
        Year: "2014",
        "Kms Driven": "11,416 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 14,
      image: Car14,
      heading: "Maruti Swift 6964",
      details: [
        "2018",
        "26,435 km",
        "Automatic",
        "Petrol",
        "Front-wheel Drive",
      ],
      price: "₹575,000",
      description: {
        Make: "Maruti",
        Model: "Swift ZXI",
        "Fuel Type": "Petrol",
        "Mfg Year": "2018",
        "Reg Year": "2018",
        Kms: "26,435",
        Ownership: "1",
      },
      overview: {
        Make: "Maruti",
        Model: "Swift",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Automatic",
        Condition: "Used",
        Year: "2018",
        "Kms Driven": "26,435 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
    },

    {
      id: 15,
      image: Car15,
      heading: "Tata Nexon (EV) 6125",
      details: [
        "2022",
        "46,060 km",
        "Automatic",
        "Petrol",
        "Front-wheel Drive",
      ],
      price: "₹575,000",
      description: {
        Make: "Tata",
        Model: "Nexon XZ+",
        "Fuel Type": "Petrol",
        "Mfg Year": "2022",
        "Reg Year": "2022",
        Kms: "46,060",
        Ownership: "1",
      },
      overview: {
        Make: "Tata",
        Model: "Nexon EV",
        "Drive Type": "Front-wheel Drive",
        Transmission: "Automatic",
        Condition: "Used",
        Year: "2022",
        "Kms Driven": "46,060 km",
        "Fuel Type": "Petrol",
        Doors: "4-door",
        Cylinders: "4",
        "Used / Premium Listing": "Used Cars",
      },
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
    "Maruti",
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
    BMW: ["X5", "3 Series", "X3", "X1"],
    Hyundai: ["Verna", "i20", "Creta", "Grand i10"],
    Maruti: ["Swift", "Baleno", "Alto", "Ciaz", "Wagon R"],
    Volkswagen: ["Taigun 6951", "Polo Gt 9415"],
    Honda: ["City", "Amaze 4097", "Amaze (Diesel)"],
    Toyota: ["Corolla Altis"],
    Tata: ["Nexon (EV)"],
  };

  const typeOptions = ["Hatchback", "Sedan", "SUV"];
  const priceOptions = Array.from(
    { length: 58 },
    (_, i) => `Rs ${(i + 6) * 50000}`
  );
  const kmsOptions = [
    "<25,000 km",
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
      <div className="grid -ml-16 -mr-16 grid-cols-5 gap-5 bg-blue-100 p-5 mb-20 text-sm">
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
        <div className="grid grid-cols-5 gap-4 mb-8 p-4 mt-16">
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
        <Link
          to={`/car-details/${car.id}`}
          state={{ car }} // Pass the car details via state
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
            <Link
              to="/Finance"
              className="text-gray-400 underline text-sm mt-4 block"
            >
              Calculate Financing
            </Link>
          </div>
        </Link>
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
