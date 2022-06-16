import React from 'react';
import './Home.css';
import Card from './Card'


function TripPackageHome() {
    return (
        <div className='home'>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Singapore Marina Experience"
                description="Enjoy a scenic evening with a private boat tour at Marina Bay Sands"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Chill at Sentosa"
                description="Enjoy a relaxing day at the beach at Sentosa"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="History Trills"
                description="Experience the history of Singapore with a guided tour at Fort Canning Park"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Discover new Animals"
                description="Spend a day with a local zoo and learn about Singapore's animals"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Discover new Things"
                description="Learn how to make Kuey Lapis at Bugis or learn how to make a currypuff at Chinatown"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
        </div>
    )
}

export default TripPackageHome
