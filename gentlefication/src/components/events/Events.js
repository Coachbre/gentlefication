// iterates over and populates full events list
//handles add events to saved list ******************

import { React, useEffect, useState } from 'react';
import { getEventOrg, addToSavedList, getSavedInfo, savedEventRemoval } from '../../modules/EventsManager';
import { SavedPreview } from './SavedEventCard';
import { EventCard } from './EventCard';



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

        addToSavedList(saved)
            .then(() => getSavedInfo(currentUser)
                .then((infoFromAPI) => {
                    setSavedEvents(infoFromAPI)
                }));
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

    //initially runs with an empty array, then ^^ useEffect() runs after
    return (
        <>
        <div className="eventsPageView">
            <div className="eventsPageContainer">
                <div className="eventList">

                    {events.map(eventObj => {

                        let isDisabled = false

                        const savedItem = savedEvents.find(savedEventObj => {
                            return savedEventObj.eventId === eventObj.id
                        })
                        if (savedItem) {
                            isDisabled = true
                        }

                        return (


                            <EventCard
                                key={eventObj.id}
                                //unique key used by react (not required, but good convention)
                                event={eventObj}
                                // eventObj (each event in the array) is now equal to 'event' (prop passed into EventCard)
                                handleAddToList={handleAddToList}
                                isDisabled={isDisabled}
                            />


                        )
                    })}


                </div>
                <aside className="previewAside">
                    <h1 className="savedPreviewHeader">YOUR SAVED EVENTS</h1>
                   
                        {savedEvents.map(savedEventPreviewObj => {

                            return (

                                <SavedPreview
                                    key={savedEventPreviewObj.id}
                                    savedEventPreview={savedEventPreviewObj}
                                    handleDelete={handleDelete}
                                />


                            )
                        })}
                </aside>
            </div>
            </div>
        </>
    );
};