//handles layout of each saved event card

import React from 'react';
import './Events.css';
import { Link } from 'react-router-dom';

export const SavedEventCard = ({savedEvent, handleDelete}) => (
// savedEvent & handleDelete is a prop being passed in from EventsList() LAST return

    <section>
        
        <h2 className="name">{savedEvent.event.name}</h2>
        <div>Organized by: {savedEvent.event.organization}</div>
        <div className="eventTime"> TIME: {savedEvent.event.date} at {savedEvent.event.time}</div>
        <div className="eventLocation"> LOCATION: {savedEvent.event.location}</div>
        <div className="eventDes">{savedEvent.event.description}</div>
        <div className="savedNotes"> NOTES: {savedEvent.notes}</div>

        <Link to={`/savedEvents/edit/${savedEvent.id}`}>
        <button className="saveButton" type="button">ADD OR CHANGE YOUR NOTES</button>
        </Link>

        <button  type="button" className="deleteButton" onClick={() => handleDelete(savedEvent.id)}>REMOVE EVENT</button>
  
    </section>
)

//preview card of saved events that goes into aside on main events view
export const SavedPreview = ({savedEvent /*handleDelete*/}) => (
    <section>
        <h2 className="name">{savedEvent.event.name} </h2>
        <div className="eventTime"> TIME: {savedEvent.event.date} at {savedEvent.event.time}</div>
        <div className="eventLocation"> LOCATION: {savedEvent.event.location}</div>
        {/* <button className="deleteButton" type="button" onClick={() => handleDelete(savedEvent.id)}>REMOVE EVENT</button> */}
    </section>
)