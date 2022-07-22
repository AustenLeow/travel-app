import React from 'react';
import './Home.css';
import Trips from './Trips'

// ES7 snippets to do 'rfce'

function TripsHome() {
    return (
        <div className='home'>
            <div className='home__section'>
            <Trips
                day = "Monday 13/6/2022"
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
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
