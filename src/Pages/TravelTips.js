import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import "./traveltips.css"


function TravelTips(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <h1>Covid-19 Tests</h1>
        <p>For updated information about the medical procedures to take when travelling to or from Singapore, please access the <a href="https://safetravel.ica.gov.sg/arriving/overview">ICA's website.</a></p>
        <p>Looking to keep your loved ones safe and healthy? You can book a covid test via this <a href="https://www.traveloka.com/en-sg/activities/storefront/covid-19-DLP">link</a>.</p>

        <h1>Getting around Singapore</h1>
        <p><i>Note: You can use your foreign-issued Mastercard® and Visa contactless bank cards issued outside of Singapore for the payment of public transport fares in Singapore.</i></p>
        <p><b>By train:</b> Singapore’s MRT (Mass Rapid Transit) system is probably the fastest way to zip around the city. Most of our popular attractions are just a short walk away from an MRT station, making our trains a great way to get around. Simply go to the TransitLink Ticket Office at selected MRT stations listed <a href="https://www.transitlink.com.sg/concession-cards?ty=cat&Id=21">here</a> to get a store-value card.</p>
        <p><b>By taxi:</b> Taxis are comfortable and especially handy if you want to go to places not accessible by the MRT. Cabs here are metered, but there may be surcharges depending on when, where and which company’s taxi you board. You can check out <a href="https://www.ptc.gov.sg/fare-regulation/taxi-PHC/P2P-Transport-Services">this website</a> for a quick and easy comparison of taxi fares. You can hail a taxi by the roadside at most places, or by queuing for one at a taxi stand, which you’ll find at most malls hotels and attractions.</p>

        <h1>WiFi & SIM cards</h1>
        <p>How can one survive in today's world without being able to connect to others through your mobile phone?</p>
        <p>Check out <a href="https://www.klook.com/en-SG/wifi-sim-card/?spm=CarRental_Vertical.CategoryBar_L2_LIST&clickId=8066da103c">this website</a> to find something that suits your device needs.</p>

        <h1>Singapore must-knows / traveller essentials</h1>
        <li><a href="https://www.visitsingapore.com/travel-guide-tips/about-singapore/">A brief history</a></li>
        <li><a href="https://www.visitsingapore.com/travel-guide-tips/getting-around/tourist-guide-maps-apps/">Maps, Apps & City Guides</a></li>
        <li><a href="https://www.singaporeexpats.com/about-singapore/culture-and-language.htm#:~:text=The%20four%20official%20languages%20of,lose%20contact%20with%20their%20traditions.">Our Demographics, Languages & Cultures</a></li>
        <li><a href="https://www.alajode.com/singapore-facts-things-to-know-before-going-to-singapore/">21 things to know before coming</a></li>
        <li><a href="https://hospitalityinsights.ehl.edu/dos-donts-singapore">Dos and Don'ts</a></li>

        <h1>Need help?</h1>
        <p>Please do not hesitate to email us <u>wanderlust@outlook.com.sg</u>. Any feedback on this webpage is welcomed via email too!</p>
      </div>
    </div>
  );
}

export default TravelTips;