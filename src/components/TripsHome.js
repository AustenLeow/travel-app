import React from 'react';
import './Home.css';
import Trips from './Trips'

// ES7 snippets to do 'rfce'

function TripsHome() {
    return (
        <div className='home'>
            {/* <h1>My Profile</h1> */}
            <h1>My past trips</h1>
            <div className='home__section'>
            <Trips
                day = "13/6/2022"
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences at TechHub"
                description="Unique activities we can do together, led by a world of hosts."
                price="$130/entry"
                tourguide = "Sten"
            />
            <Trips
                day = "14/6/2022"
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="A Night To Remember at East Coast Park"
                description="Spaces that are more than just a place to sleep."
                price="$130/night"
                tourguide = "TZ"
            />
            <Trips
                day = "15/6/2022"
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Treehouse at Gardens by the Bay"
                description="Comfortable private places, with room for friends or family."
                price="$130/day"
                tourguide = "Ryan"
            />
            </div>
            <div className='home__section'>
            <Trips
                day = "13/6/2022"
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Sentosa sleepovers"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"
            />
            <Trips
                day = "13/6/2022"
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="The Marina staycation"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/night"
            />
            <Trips
                day = "13/6/2022"
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="Singapore Orhcard staycation"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/entry"
            />
            </div>
        </div>
    )
}

export default TripsHome
