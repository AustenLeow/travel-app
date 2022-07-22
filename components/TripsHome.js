import React from 'react';
import './Home.css';
import Trips from './Trips'
import axios from 'axios';
import marinabay from "../images/marinabay.jpg";
// ES7 snippets to do 'rfce'



function TripsHome() {
    return (
        <div className='home'>
            <div className='home__section'>
            <Trips
                day = "Monday 13/6/2022"
                src={marinabay}
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
                price="£130/night"
                tourguide = "Austen Leow"
            />
            </div>
        </div>
    )
}

export default TripsHome
