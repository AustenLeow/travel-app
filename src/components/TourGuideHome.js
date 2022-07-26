import React from 'react';
import './Home.css';
import Card from './Card'
import austen from "../images/austen.jpg"
import kelvin from "../images/kelvin.jpg"
import nat from "../images/rohan.jpg"

// ES7 snippets to do 'rfce'

function TourGuideHome() {
    return (
        <div className='home'>
            <div className='home__section'>
            <Card
                src={austen}
                title="Austen Leow"
                description="The utilmate guide. He maybe new, but he knows his way around Singapore."
                price="$50/day"
            />
            <Card
                src={nat}
                title="Nat Ho"
                description="5 years of experiences of local tours. He has Singapore's history and geography remembered at the back of his head."
                price="$100/day"
            />
            <Card
                src={kelvin}
                title="Kelly Lim"
                description="Anywhere you like to go, she has got you covered. She knows Singapore like the back of her hand"
                price="$120/day"
            />
            </div>
        </div>
    )
}

export default TourGuideHome
