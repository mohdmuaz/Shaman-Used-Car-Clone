import Deal1 from '../../assets/Deal1.jpg';
import Deal2 from '../../assets/Deal2.jpg';
import Deal3 from '../../assets/Deal3.jpg';
import Deal4 from '../../assets/Deal4.jpg';
import Deal5 from '../../assets/Deal5.jpg';

import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 sm:text-3xl">Deals of the Day</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="col-span-1 h-[calc(100vh-200px)]">
          <Link to="/BuyUsedCar">
            <div className="relative h-full border border-gray-300 bg-white overflow-hidden group rounded-lg hover:border-red-600 transition-colors duration-300">
              <img
                src={Deal1}
                alt="Deal 1"
                className="h-2/3 w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold m-2 sm:text-xl">Honda City 8549</h2>
                <div className="flex justify-between items-center mt-10 text-lg ml-2 sm:text-base">
                  <div className="flex space-x-4">
                    <div className="bg-red-600 p-1 rounded-md text-white pl-3 pr-3">
                      <p>2015</p>
                    </div>
                    <p className="text-gray-400">Automatic</p>
                    <p className="text-gray-400">69,994 km</p>
                  </div>
                  <p className="text-4xl font-bold text-black sm:text-3xl">$540,000</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 gap-4 h-[calc(100vh-200px)]">
          {[Deal2, Deal3, Deal4, Deal5].map((dealImage, index) => (
            <Link to="/BuyUsedCar" key={index}>
              <div className="border border-gray-300 bg-white overflow-hidden group rounded-lg hover:border-red-500 transition-colors duration-300 h-full">
                <img
                  src={dealImage}
                  alt={`Deal image ${index + 2}`}
                  className="h-[60%] w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
                />
                <div className="p-4 flex flex-col justify-between h-[40%]">
                  <h2 className="text-lg font-semibold mb-2 sm:text-base">Maruti Ciaz 6750 {index + 2}</h2>
                  <div className="flex justify-between items-center sm:text-xs">
                    <div className="flex space-x-4">
                      <div className="text-sm bg-red-600 p-1 rounded-md pl-3 pr-3 text-white">
                        <p>2015</p>
                      </div>
                      <p className="text-sm text-gray-400">Automatic</p>
                      <p className="text-sm text-gray-400">68,884 km</p>
                    </div>
                    <p className="text-xl font-bold text-black sm:text-lg">${(index + 2) * 10 + 0.99}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link to="/BuyUsedCar">
          <button className="bg-red-500 text-white font-bold py-2 px-6 rounded hover:bg-red-600 transition-colors duration-300 sm:py-2 sm:px-4 sm:text-sm">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;
