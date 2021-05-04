import { React, useEffect, useState } from 'react';
import { getSavedInfo } from '../../modules/EventsManager';
import { SavedPreview } from './SavedEventCard';
import './Events.css';


export const SavedEventPreview = () => {


    const [savedEvents, setSavedEvents] = useState([]);
    //savedEvents is current value, setSavedEvents changes value
    const getSavedPreview = () => {
        
        // returns saved events array from json
        return getSavedInfo()
        //fetches json data
        .then((savedEventsFromAPI) => {
            setSavedEvents(savedEventsFromAPI)
            //sets 'saveEvents' equal to API response
        });
    };

    useEffect(() => {
        //calls the getSavedEvents function
        getSavedPreview();
    }, []);
    //returns empty array on first run
    return (

        <div>
            <h1 className="eventListHeader">YOUR UPCOMING EVENTS</h1>
            <div>
                {savedEvents.map(savedEventObj => {
                    //iterates over the array of saved events
                    return (
                        <ul>
                            <SavedPreview
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