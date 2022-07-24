import React from 'react';
import './Trips.css'

function Trips({ day, src, title, description, price , tourguide }) {

    
    return (
        <div className='card'>
            <img src={src} alt="" />
            
            <div className="trips__info">
                
                <h2>{title}</h2>
                <div className="tripsinfo">
                    <p>Date: {day}</p>
                    <p>Price: {price}</p>
                    <p>Tour Guide (if any): {tourguide}</p>
                </div>
            </div>
        </div>
    )
}

export default Trips;
