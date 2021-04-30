//handles layout of each event card

import React from 'react';
import './Events.css';

export const EventCard = ({event}) => (
// 'event' is a prop being passed in from EventsList() LAST return
    <section>
        <button className="saveButton" type="button">Save</button>
        <h2 className="name">{event.name} Organized by: {event.OrganizationId}</h2>
        <div className="eventTime"> {event.date} at {event.time}</div>
        <div className="eventDes"> {event.description}</div>
    </section>
)