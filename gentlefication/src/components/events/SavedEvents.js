// iterates over and populates user's saved events list

import { React, useEffect, useState } from 'react';
import { getSavedInfo, savedEventRemoval } from '../../modules/EventsManager';
import { SavedEventCard } from './SavedEventCard';

import './SavedEvents.css';


export const SavedEvents = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("gentle_user"))

    const [savedEvents, setSavedEvents] = useState([]);
    //savedEvents is current value, setSavedEvents changes value

    const getSavedEvents = () => {


        // returns saved events array from json

        return getSavedInfo(currentUser)
            //fetches json data
            .then((savedEventsFromAPI) => {
                setSavedEvents(savedEventsFromAPI)
                //sets 'savedEvents' equal to API response

            });

    };


    const handleDelete = id => {
        savedEventRemoval(id)
            //handleDelete calls savedEventRemoval() from event manager
            .then(() => getSavedInfo(currentUser)
                // currentUser is passed in (to get specific user info).. if not, nothing is returned
                .then((infoFromAPI) => {
                    setSavedEvents(infoFromAPI)
                    //returns new array
                }))

    }

    useEffect(() => {

        //calls the getSavedEvents function
        getSavedEvents();
    }, []);
    //returns empty array on first run
    return (


            <div className="savedEventsList">
                {savedEvents.map(savedEventObj => {
                    //iterates over the array of saved events
                    return (

                            <SavedEventCard
                                //unique key used by react (not required, but good convention)
                                key={savedEventObj.id}
                                savedEvent={savedEventObj}
                                // savedEventObj (each saved event in the array) is now equal to 'savedEvent' (prop passed into SavedEventCard)
                                handleDelete={handleDelete}
                            />
                    )
                })}
            </div>
   
    );
};