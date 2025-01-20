import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './components/home/homepage';
import Dealership from './components/home/dealership';
import Deals from './components/home/deals';
import Brands from './components/home/brands';
import ChooseUs from './components/home/chooseus';
import Testimonials from './components/home/testimonials';
import SellCar from './components/pages/SellCar';
import Finance from './components/pages/Finance';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/Contact';
import BuyUsedCar from './components/pages/BuyUsedCar';
import CarDetails from './components/pages/CarDetails';

function Home() {
  return (
    <div>
      <HomePage />
      <Dealership />
      <Deals />
      <Brands />
      <ChooseUs />
      <Testimonials />
    </div>
  );
}


function App() {
  return (
    <div>
      <Router>

        <Navbar />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SellCar" element={<SellCar />} />
        <Route path="/Finance" element={<Finance />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/BuyUsedCar" element={<BuyUsedCar />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App
