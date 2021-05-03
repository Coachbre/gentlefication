// iterates over and populates user's saved events list

import { React, useEffect, useState } from 'react';
import { getAllSaved } from '../../modules/EventsManager';
import { SavedEventCard } from './SavedEventCard';
import './Events.css';

export const SavedEvents = () => {

    const [savedEvents, setSavedEvents] = useState([]);
    //savedEvents is current value, setSavedEvents changes value
    const getSavedEvents = () => {
        // returns saved events array from json
        return getAllSaved()
        //fetches json data
        .then((savedEventsFromAPI) => {
            setSavedEvents(savedEventsFromAPI)
            //sets 'saveEvents' equal to API response
        });
    };

    useEffect(() => {
        //calls the getSavedEvents function
        getSavedEvents();
    }, []);
    //returns empty array on first run
    return (

        <div>
            <h1 className="eventListHeader">Saved Events</h1>
            <div>
                {savedEvents.map(savedEventObj => {
                    //iterates over the array of saved events
                    return (
                        <ul>
                            <SavedEventCard
                            key={savedEventObj.id}
                            //unique key used by react (not required, but good convention)
                            savedEvent={savedEventObj}
                            // savedEventObj (each saved event in the array) is now equal to 'savedEvent' (prop passed into SavedEventCard)
                            />
                        </ul>
                    )
                })}
            </div>
        </div>
    );
};