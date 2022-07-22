import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  useNavigate,
  Link,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import TourGuide from "./Pages/TourGuide"
import TripsPages from "./Pages/TripsPages";
import TripPackages from "./Pages/TripPackages";
import About from "./Pages/About";
import TravelTips from './Pages/TravelTips';
import BigDiscountForFamilies from './Pages/BigDiscountForFamilies';
import MarinaExperience from './Pages/MarinaExperience';
import ChillAtSentosa from './Pages/ChillAtSentosa';
import HistoryThrill from './Pages/HistoryThrill';
import Zoo from './Pages/Zoo';
import DiscoverNewThings from './Pages/DiscoverNewThings';
import PulauUbin from './Pages/PulauUbin';
import NationalDayDiscount from './Pages/NationalDayDiscount';
import UniqueStays from './Pages/UniqueStays';
import TooCoolForSchool from './Pages/TooCoolForSchool';
import RelaxInLuxury from './Pages/RelaxInLuxury';
import Hawker from './Pages/Hawker';
import Cart from './Pages/Cart';
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx';
import {Account} from "./components/cognito-api/Account"
import Footer from './Pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Account>
    <ShoppingCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage/>} /> 
        <Route path="/signup" element ={<SignupPage/>} />
        <Route path="/tourguide" element={<TourGuide />} />
        <Route path="/Mytrips" element={<TripsPages />} />
        <Route path="/trippackage" element={<TripPackages />} />
        <Route path="/about" element={<About/>} />
        <Route path="/TravelTips" element={<TravelTips/>} />
        <Route path="/bigdiscountforfamilies" element={<BigDiscountForFamilies />} />
        <Route path="/trippackage/MarinaExperience" element={<MarinaExperience />} />
        <Route path="/trippackage/ChillAtSentosa" element={<ChillAtSentosa />} />
        <Route path="/trippackage/HistoryThrill" element={<HistoryThrill />} />
        <Route path="/trippackage/DiscoverNewAnimals" element={<Zoo />} />
        <Route path="/trippackage/DiscoverNewThings" element={<DiscoverNewThings />} />
        <Route path="/trippackage/PulauUbin" element={<PulauUbin />} />
        <Route path="/NationalDayDiscount" element={<NationalDayDiscount />} />
        <Route path="/UniqueStays" element={<UniqueStays />} />
        <Route path="/TooCoolForSchool" element={<TooCoolForSchool />} />
        <Route path="/RelaxInLuxury" element={<RelaxInLuxury />} />
        <Route path="/hawker" element={<Hawker />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </ShoppingCartProvider>
    </Account>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

