//handles layout of each city council member card

import React from 'react';


export const CouncilCard = ({council}) => (
    <section>
        <img className="memberImage" src={council.image} alt="council member headshot" />
    
        <div className="memberHeader">
        <h2 className="memberName">{council.name} - {council.district.name}</h2>
        <a href={council.url}>Visit Website</a>
        </div>
        <div className="membercontact">
        <h3>CONTACT INFO</h3>
        <div className="memberPhone">PHONE:{council.phone}</div>
        <div className="memberEmail">EMAIL: {council.email}</div>
        </div>

    </section>
)