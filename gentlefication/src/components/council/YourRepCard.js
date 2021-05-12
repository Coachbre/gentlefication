import React from 'react';
import './Council.css'

export const YourRepCard = ({district}) => (
    <section>
        <h1>WHOS WORKING FOR YOU?</h1>
        <img className="memberImage" src={district.councilMembers[0].image} alt="council member headshot" />
        
        <div className="memberHeader">
        <h2 className="memberName">Knoxville City Council member {district.councilMembers[0].name} serves your District</h2>
        
        </div>
        <div className="membercontact">
        <h3>CONTACT INFO</h3>
        <div className="memberPhone">PHONE: {district.councilMembers[0].phone}</div>
        <div className="memberEmail">EMAIL: {district.councilMembers[0].email}</div>
        <button className><a href={district.councilMembers[0].url}>Visit Website</a></button>
        </div>

    </section>
)
//{district.councilMembers[0].image} starts with the object passed in via props, then accesses councilMembers array and returns index 0 (first object)