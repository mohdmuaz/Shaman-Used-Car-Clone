import Dealership1 from '../../assets/dealership1.png';
import Dealership2 from '../../assets/dealership2.png';
import Dealership3 from '../../assets/dealership3.png';
import Dealership4 from '../../assets/dealership4.png';

const DealershipPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      
      <div className="w-full h-full bg-white p-6 sm:p-12">
        
        <div className="h-auto flex flex-col justify-between">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-6 sm:mb-8 mt-6 sm:mt-10">
            Mumbai Most Trusted Used Car Dealership
          </h1>


          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex flex-col items-center p-4">
              <img src={Dealership1} alt="Logo 1" className="mb-2 h-28 w-28 object-contain" />
              <p className="text-center text-base font-bold">Upto 100% Finance*</p>
            </div>

            <div className="flex flex-col items-center p-4">
              <img src={Dealership2} alt="Logo 2" className="mb-2 h-28 w-28 object-contain" />
              <p className="text-center text-base font-bold">Hassle Free RC Transfer</p>
            </div>

            <div className="flex flex-col items-center p-4">
              <img src={Dealership3} alt="Logo 3" className="mb-2 h-28 w-28 object-contain" />
              <p className="text-center text-base font-bold">No Hidden Cost*</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <img src={Dealership4} alt="Logo 4" className="mb-2 h-28 w-28 object-contain" />
              <p className="text-center text-base font-bold">1yr Comprehensive Warranty*</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealershipPage;
