import React from 'react';
import './Trips.css'

function Trips({ day, src, title, description, price , tourguide }) {

    
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="trips__info">
                <h2>{day}</h2>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
                <h3>{tourguide}</h3>
            </div>
        </div>
    )
}

export default Trips;
