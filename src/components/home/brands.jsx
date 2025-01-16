import Brand1 from '../../assets/brand1.png';
import Brand2 from '../../assets/brand2.png';
import Brand3 from '../../assets/brand3.png';
import Brand4 from '../../assets/brand4.png';
import Brand5 from '../../assets/brand5.png';
import Brand6 from '../../assets/brand6.png';
import Brand7 from '../../assets/brand7.png';
import Brand8 from '../../assets/brand8.png';
import Brand9 from '../../assets/brand9.png';
import Brand10 from '../../assets/brand10.png';
import Brand11 from '../../assets/brand11.png';
import Brand12 from '../../assets/brand12.png';
import Brand13 from '../../assets/brand13.png';

const BrandsPage = () => {
  const brandImages = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
    Brand9,
    Brand10,
    Brand11,
    Brand12,
    Brand13,
  ];

  return (
    <div className="h-[40vh] w-full flex flex-col justify-between items-center bg-gray-50 mb-12 mt-5"> 
      <header className="text-center py-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mt-">
          Explore a wide range of Brands
        </h1>
      </header>

      <div className="overflow-hidden relative ml-10 mr-10">
        <div className="flex w-[200%] h-[200%] animate-scroll">
          {brandImages.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[7.69%] h-20 md:h-28 mx-4 flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`Brand Logo ${index + 1}`}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;