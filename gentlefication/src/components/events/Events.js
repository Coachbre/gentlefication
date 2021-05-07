// iterates over and populates full events list
//handles add events to saved list ******************

import { React, useEffect, useState } from 'react';
import { getEventOrg, addToSavedList, getEventById, getSavedInfo, savedEventRemoval } from '../../modules/EventsManager';
import { SavedPreview } from './SavedEventCard';
import { EventCard } from './EventCard';
import './Events.css';


export const Events = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("gentle_user"))
    const [savedEvents, setSavedEvents] = useState([])
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




    const handleAddToList = (eventObj /*taco*/) => {
        //
        const saved = {
            eventId: parseInt(eventObj.id),
            userId: currentUser,
            //logs current users id # as userId
            notes: ""
        }
        console.log(saved)
        addToSavedList(saved)
            .then(() => getSavedInfo(currentUser)
                .then((infoFromAPI) => {
                    setSavedEvents(infoFromAPI)
                }));
    };

    //******************************************* */

    useEffect(() => {
        //useEffect() is used to call the getEvents() function
        //***runs on second render after return reads an empty array***
        getEvents();
        getSavedInfo(currentUser)
            .then((savedEventsFromAPI) => {
                setSavedEvents(savedEventsFromAPI)
            })



    }, []);
    console.log('this is saved', savedEvents)
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

                </div>

            </div>
            <aside>
            <h1 className="eventListHeader">YOUR SAVED EVENTS</h1>

                {savedEvents.map(savedEventObj => {

                    return (
                        
                            <SavedPreview
                                key={savedEventObj.id}
                                savedEvent={savedEventObj} />


                    )
                })}
            </aside>
        </>
    );
};