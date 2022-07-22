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
                day = "Monday 13/6/2022"
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
                price="£130/night"
                tourguide = "Austen Leow"
            />
            <Trips
                day = "Monday 14/6/2022"
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
                price="£130/night"
                tourguide = ""
            />
            <Trips
                day = "Monday 15/6/2022"
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
                price="£130/night"
                tourguide = "Yong Kang"
            />
            </div>
            <div className='home__section'>
            <Trips
                day = "Monday 13/6/2022"
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Trips
                day = "Monday 13/6/2022"
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Trips
                day = "Monday 13/6/2022"
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
        </div>
    )
}

export default TripsHome;
