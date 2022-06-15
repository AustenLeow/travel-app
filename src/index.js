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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={< LoginPage/>} /> 
        <Route path="/signup" element ={<SignupPage/>} />
        <Route path="/tourguide" element={<TourGuide />} />
        <Route path="/Mytrips" element={<TripsPages />} />
        <Route path="/trippackage" element={<TripPackages />} />
        <Route path="/about" element={<About/>} />
        <Route path="/TravelTips" element={<TravelTips/>} />
        <Route path="/bigdiscountforfamilies" element={<BigDiscountForFamilies />} />
        <Route path="/trippackage/MarinaExperience" element={<MarinaExperience />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

