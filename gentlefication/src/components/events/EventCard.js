//handles layout of each event card

import React from 'react';
import './Events.css';


export const EventCard = ({event, handleAddToList}) => (
// 'event' and 'handleAddToList is a prop being passed in from EventsList() LAST return
    <section>
        <button type="button" className="saveButton" onClick={() => handleAddToList(event)}>Save</button>
        <h2 className="eventName">{event.name} </h2>
        <div>HOSTED BY: {event.organization.name}</div>
        <div className="eventTime"> DATE: {event.date} at {event.time}</div>
        <div className="eventLocation"> LOCATION: {event.location}</div>
        <div className="eventDes"> {event.description}</div>
    </section>
)