const WhyChooseUs = () => {
  return (
    <div className="bg-white flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Why Choose Us?</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full px-10 max-w-8xl">

        <div className="bg-zinc-500 hover:bg-red-500 shadow-inner-left rounded-lg p-12 flex items-center ">
          <div className="text-blue-500 text-5xl mr-4">🎯</div>
          <h2 className="text-xl font-semibold text-white">
            Certified cars go through 143 quality checklist
          </h2>
        </div>
        <div className="bg-zinc-500 hover:bg-red-600 shadow-inner-left rounded-lg p-12 flex items-center">
          <div className="text-green-500 text-5xl mr-4">🌱</div>
          <h2 className="text-xl font-semibold text-white">1-year warranty on certified cars</h2>
        </div>
        <div className="bg-zinc-500 hover:bg-red-600 shadow-inner-left rounded-lg p-12 flex items-center">
          <div className="text-yellow-500 text-5xl mr-4">💡</div>
          <h2 className="text-xl font-semibold text-white">
            Hassle-free transfer of ownership
          </h2>
        </div>


        <div className="bg-zinc-500 hover:bg-red-600 shadow-inner-left  rounded-lg p-12 flex items-center">
          <div className="text-red-500 text-5xl mr-4">🤝</div>
          <h2 className="text-xl font-semibold text-white">
            Wide network of service centers
          </h2>
        </div>
        <div className="bg-zinc-500 hover:bg-red-600 shadow-inner-left rounded-lg p-12 flex items-center">
          <div className="text-purple-500 text-5xl mr-4">📈</div>
          <h2 className="text-xl font-semibold text-white">Finance & Insurance consultancy</h2>
        </div>
        <div className="bg-zinc-500 hover:bg-red-600 shadow-inner-left rounded-lg p-12 flex items-center">
          <div className="text-teal-500 text-5xl mr-4">🛠️</div>
          <h2 className="text-xl font-semibold text-white">
            Auto Terrace & Das WeltAuto Cars Available
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
