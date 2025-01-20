import { useState } from "react";
import Dropdown from "../home/dropdown";
import BGimage from '../../assets/bgimage.jpg';

const App = () => {
  const [selectedMake, setSelectedMake] = useState("");

  const handleMakeSelect = (make) => {
    setSelectedMake(make);
  };

  return (
    <div 
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center pt-16"
      style={{ backgroundImage: `url(${BGimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white rounded-xl p-8 flex flex-col space-y-4 shadow-lg shadow-gray-100/50 w-full sm:w-auto absolute top-[60%] ">

        <div className="flex flex-wrap items-center space-x-4 w-full sm:w-auto">
          <div className="w-full sm:w-72 border border-gray-200 rounded-md mb-4 sm:mb-0">
            <Dropdown
              title="All Makes"
              options={["Honda", "Hyundai", "Mahindra", "Ford", "Volkswagen", "Renault", "Kia", "Skoda", "Maruti Suzuki", "Tata Motors", "Mg Motor", "Nissan", "Audi", "BMW"]}
              onSelect={handleMakeSelect}
            />
          </div>
          <div className="w-full sm:w-72 border border-gray-200 rounded-md mb-4 sm:mb-0">
            <Dropdown
              title="All Models"
              options={["Creta", "Swift", "Punch", "Thar", "Curvv", "Magnite", "Scorpio", "Alto", "Safari", "Dzire", "Nexon", "Bolero"]}
              isDisabled={!selectedMake}
            />
          </div>
          <div className="w-full sm:w-72 border border-gray-200 rounded-md mb-4 sm:mb-0">
            <Dropdown
              title="Max Price"
              options={["15000", "30000", "50000", "100000", "200000"]}
            />
          </div>

          <div className="w-full sm:w-auto">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
