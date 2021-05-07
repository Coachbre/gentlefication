//shows selected organizations events

import { React, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { OrgEventCard } from './OrgEventCards';
import { getEventOrg } from '../../modules/EventsManager';

export const EventsByOrg = () => {
    const { organizationId } = useParams();

    const [matchingEvents, setMatchingEvents] = useState([]);

    const getMatchingEvents = () => {

        return getEventOrg()
        
            //fetch each event object by organization id
            .then((events) => {
                debugger
                if (organizationId === events.organizationId) {
                setMatchingEvents(events)}

            });
    }
    
    useEffect(() => {
        getMatchingEvents();
    }, []);

    return (
        <div>
            <h1 className="eventListHeader">EVENTS</h1>
            <div>
                {matchingEvents.map(orgEventObj => {
                      
 
                        return (
                            <ul>
                                <OrgEventCard
                                    key={orgEventObj.id}
                                    //unique key used by react (not required, but good convention)

                                    event={orgEventObj}
                                // savedEventObj (each saved event in the array) is now equal to 'savedEvent' (prop passed into SavedEventCard)

                                />
                            </ul>
                        )
                    

                })}
            </div>
        </div>
    )

}
