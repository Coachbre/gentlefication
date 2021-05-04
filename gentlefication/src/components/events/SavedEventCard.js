//handles layout of each saved event card

import React from 'react';
import './Events.css';

export const SavedEventCard = ({savedEvent}) => (
// 'savedEvent' is a prop being passed in from EventsList() LAST return
    <section>
        
        <h2 className="name">{savedEvent.event.name}</h2>
        <div>Organized by: {savedEvent.event.organization}</div>
        <div className="eventTime"> {savedEvent.event.date} at {savedEvent.event.time}</div>
        <div className="eventDes"> description {savedEvent.event.description}</div>
        <div className="savedNotes"> NOTES: {savedEvent.notes}</div>
        <button className="saveButton" type="button">Add Notes</button>
        <button className="deleteButton" type="button">Remove Event</button>
  
    </section>
)

//preview card of saved events that goes into aside on main events view
export const SavedEventPreview = ({savedEvent}) => (
    <section>
        <h2 className="name">{savedEvent.name}'event name' </h2>
        <div className="eventTime"> {savedEvent.date}'date' at {savedEvent.time}'time'</div>
        <button className="deleteButton" type="button">Remove Event</button>
    </section>
)