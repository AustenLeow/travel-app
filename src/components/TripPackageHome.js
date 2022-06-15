import React , {useState} from 'react';
import './Home.css';
import Card from './Card';
import fortcanning from "../images/fortcanning.jpg";
import marinabay from "../images/marinabay.jpg";
import sentosa from "../images/sentosa.jpg";
import zoo from "../images/singaporezoo.jpg";
import bugis from "../images/bugis.jpg";
import pulau from "../images/pulau.jpg";
import { NavLink } from "react-router-dom";


function TripPackageHome() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='home'>
            <div className='home__section'>
            <NavLink
                    exact
                    to="/trippackage/marinaexperience"
                    onClick={handleClick}
                    >   <Card
                        src={marinabay}
                        title="Singapore Marina Experience"
                        description="Enjoy a scenic evening with a private boat tour at Marina Bay Sands"
                        price="$200/night"
                        
                ></Card>
                <p><button class = "button">Add to Cart 🛒</button></p>
                    </NavLink>
            <Card
                src={sentosa}
                title="Chill at Sentosa"
                description="Enjoy a relaxing day at the beach at Sentosa"
            />
            <Card
                src={fortcanning}
                title="History Trills"
                description="Experience the history of Singapore with a guided tour at Fort Canning Park"
                price="$20/session"
            />
            </div>
            <div className='home__section'>
            <Card
                src={zoo}
                title="Discover new Animals"
                description="Spend a day with a local zoo and learn about Singapore's animals"
                price="$30/entry"
            />
            <Card
                src={bugis}
                title="Discover new Things"
                description="Learn how to make Kuey Lapis at Bugis or learn how to make a currypuff at Chinatown"
                price="$30/session"
            />
            <Card
                src={pulau}
                title="Go on an adventure at Pulau Ubin"
                description="Spend a day at Pulau Ubin and learn about the history of the island"
                price="$2/trip"
            />
            </div>
        </div>
    )
}

export default TripPackageHome
