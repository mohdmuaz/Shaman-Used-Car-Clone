import { useState } from "react";
import Googlelogo from '../../assets/google-logo.png';

const Testimonials = () => {
  const reviews = [
    {
      author: "John Doe",
      rating: 5,
      text: "Great experience! The staff was friendly, and the cars were in excellent condition. Highly recommend this dealership for anyone looking for affordable and reliable used cars. The process was smooth and quick! The staff was friendly, and the cars were in excellent condition. Highly recommend this dealership for anyone looking for affordable and reliable used cars",
    },
    {
      author: "Jane Smith",
      rating: 4,
      text: "I got my dream car here! The team was very supportive and helped me with all the paperwork. The selection of cars is great, and the prices are reasonable. The staff was friendly, and the cars were in excellent condition. Highly recommend this dealership for anyone looking for affordable and reliable used cars.",
    },
    {
      author: "Rahul Verma",
      rating: 5,
      text: "Fantastic service and affordable prices. The staff made sure all my queries were answered. The car I bought was in excellent condition, just as advertised The staff was friendly, and the cars were in excellent condition. Highly recommend this dealership for anyone looking for affordable and reliable used cars.",
    },
    {
      author: "Ananya Gupta",
      rating: 4,
      text: "The team was very professional, and the process was hassle-free. The only downside was the limited parking space at the dealership, but overall, a great experience The staff was friendly, and the cars were in excellent condition. Highly recommend this dealership for anyone looking for affordable and reliable used cars.",
    },
    {
      author: "Michael Brown",
      rating: 5,
      text: "This dealership stands out with its amazing selection and great deals! The customer service was top-notch, and I couldn’t be happier with my purchase, The staff was friendly, and the cars were in excellent condition. Highly recommend this dealership for anyone looking for affordable and reliable used cars.",
    },
    {
      author: "Ayesha Khan",
      rating: 3,
      text: "Good options, but the delivery process took longer than expected. The staff was courteous, but there were delays in getting the paperwork done. Hopefully, it’s faster next time, The staff was friendly, and the cars were in excellent condition. Highly recommend this dealership for anyone looking for affordable and reliable used cars.",
    },
    {
      author: "Rohit Sharma",
      rating: 5,
      text: "Excellent customer service! Highly satisfied with my purchase. The staff ensured that everything was handled smoothly, and the car I got is perfect for my family, The staff was friendly, and the cars were in excellent condition. Highly recommend this dealership for anyone looking for affordable and reliable used cars.",
    },
    {
      author: "Sophia Williams",
      rating: 4,
      text: "Great cars at great prices. The selection of cars was impressive, and I found exactly what I was looking for. The team was helpful throughout the buying process, The staff was friendly, and the cars were in excellent condition. Highly recommend this dealership for anyone looking for affordable and reliable used cars.",
    },
    {
      author: "Arjun Mehta",
      rating: 5,
      text: "Top-notch service! The staff helped me find the perfect car for my needs. The dealership is well-maintained, and the cars are in great condition. Highly recommend this place!, The staff was friendly, and the cars were in excellent condition. Highly recommend this dealership for anyone looking for affordable and reliable used cars",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 3) % reviews.length);
  };

  return (
    <div className="bg-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">Testimonials</h1>
      <p className="text-xl text-black mt-5 mb-10 text-center">
        Visit one of the most trusted used car dealerships in Mumbai.
      </p>

      <div className="relative w-full max-w-7xl flex items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 text-blue-500 hover:text-blue-600 text-4xl p-4 bg-white rounded-full shadow-lg z-10"
        >
          &#8249;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-12 md:px-16 mb-20">
          {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start relative"
              style={{ height: "300px" }}
            >
              <img
                src={Googlelogo}
                alt="Google Logo"
                className="w-8 h-8 absolute top-4 right-4"
              />
              <p className="font-semibold text-lg text-blue-800 mb-2">{review.author}</p>
              <p className="text-yellow-500 text-2xl mb-4">
                {"★".repeat(review.rating)}{" "}
                {"☆".repeat(5 - review.rating)}
              </p>
              <div
                className="text-gray-600 overflow-y-auto"
                style={{ height: "150px" }}
              >
                {review.text}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 text-blue-500 hover:text-blue-600 text-4xl p-4 bg-white rounded-full shadow-lg z-10"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
