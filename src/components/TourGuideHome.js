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
                title="Dick Harrison"
                description="Expert in local food. Message @DH on telegram to contact me."
                price="⭐️⭐️⭐️⭐️⭐️"
            />
            <Card
                src={nat}
                title="Nat Ho"
                description="Specialise in tourist attractions. Contact me +6581234567."
                price="⭐️⭐️⭐️"
            />
            <Card
                src={kelvin}
                title="Kelly Lim"
                description="Loves exploring Singapore's creepiest districts. Whatsapp me +6591234567."
                price="⭐️⭐️⭐️⭐️"
            />
            </div>
        </div>
    )
}

export default TourGuideHome
