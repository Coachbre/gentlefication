import React from 'react';



export const OrgEventCard = ({event}) => (
<section>
         {/* <button type="button" className="saveButton" onClick={() => handleAddToList(event)}>Save</button> */}
        <h2 className="eventName">{event.name} </h2>
       {/* <div>HOSTED BY: {event.organization.name}</div> */}
        <div className="eventTime"> DATE: {event.date} at {event.time}</div>
        <div className="eventLocation"> LOCATION: {event.location}</div>
        <div className="eventDes"> {event.description}</div>
    </section>
)