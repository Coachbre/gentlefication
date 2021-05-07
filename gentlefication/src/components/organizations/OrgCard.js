//handles layout of each organization card

import React from 'react';
import { Link } from "react-router-dom";
import './Organizations.css';


export const OrgCard = ({ org }) => (
    // 'org' is a prop being passed in from OrgList()
    <section>

        <Link to={`/organizations/events/${org.id}`}>
            <button type="button" className="eventsButton">VIEW SCHEDULED EVENTS</button>
          
        </Link>

        <img className="orgImage" src={org.image} alt="Local organization image" />

        <h2 className="orgName">{org.name} </h2>
        <div className="orgDes"> {org.description}</div>
        <div className="orgContact">
            <h3>CONTACT INFORMATION</h3>
            <div className="orgAddress"> {org.address}</div>
            <div className="orgPhone"> {org.phone}</div>
            <div className="orgwebsite"> {org.website}</div>
        </div>

    </section>
)