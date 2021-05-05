// iterates over and populates full events list

import { React, useEffect, useState } from 'react';
import { getEventOrg } from '../../modules/EventsManager';
import { EventCard } from './EventCard';
import './Events.css';

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


   



    useEffect(() => {
        //useEffect() is used to call the getEvents() function
        //***runs on second render after return reads an empty array***
        getEvents();
    }, []);
    //initially runs with an empty array, then ^^ useEffect() runs after
    return (
        <>
            <div className="eventList">
                <h1 className="eventListHeader">EVENTS LIST</h1>
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