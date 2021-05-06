// iterates over and populates full events list
//handles add events to saved list ******************

import { React, useEffect, useState } from 'react';
import { getEventOrg, addToSavedList, getEventById, getAllSaved } from '../../modules/EventsManager';
import { EventCard } from './EventCard';
import './Events.css';
import { SavedEvents } from './SavedEvents';

import { SavedEventsPreview } from "./SavedEventsPreview";

export const Events = () => {

    const [events, setEvents] = useState([]);
    //'events' is always the current value, 'setEvents' is used to change it, and 'useState' is the initial value
    const getEvents = () => {
        // getEvents() ultimately returns events array from json
        return getEventOrg()
            //fetches json info
            .then((eventsFromAPI /*taco*/) => {
                setEvents(eventsFromAPI)
                // waits for response then sets 'events' variable equal to the API data
            });

    };
//*********************************** */
    const [saved, setSaved] = useState({
        eventId: parseInt(events.id)
        
    });

    
    const getSingleEvent = () => {
        // getSingleEvent() ultimately returns single event object from json array
        return getEventById()
            //fetches json info
            .then(singleEvent => { 
                setSaved(singleEvent)
                // waits for response then sets 'saved' variable equal to the API data
            });
    };

    const handleAddToList = (id) => {

        const saved = {
        
            eventId: parseInt(id)
        }
        addToSavedList(saved)
        .then(() => getAllSaved())
    };

 //******************************************* */

    useEffect(() => {
        //useEffect() is used to call the getEvents() function
        //***runs on second render after return reads an empty array***
        getEvents();
        getSingleEvent();
    }, []);
    //initially runs with an empty array, then ^^ useEffect() runs after
    return (
        <>
            <div className="eventList">
                <h1 className="eventListHeader">COME GET TO KNOW YOUR NEIGHBORS!</h1>
                <div className="eventCard">
                    {events.map(eventObj => {
                        //iterates over the array of events
                        return (

                            <ul>
                                <EventCard
                                    key={eventObj.id}
                                    //unique key used by react (not required, but good convention)
                                    event={eventObj}
                                // eventObj (each event in the array) is now equal to 'event' (prop passed into EventCard)
                                handleAddToList={handleAddToList}
                                />
                            </ul>


                        )
                    })}
                    <aside>
                        <SavedEventsPreview

                        />
                    </aside>
                </div>

            </div>
        </>
    );
};