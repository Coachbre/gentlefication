//shows selected organizations events

import { React, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { OrgEventCard } from './OrgEventCards';
import { getEventOrg } from '../../modules/EventsManager';
import { getOrgEventById } from '../../modules/OrgManager';

export const EventsByOrg = () => {
    const { organizationId } = useParams();

    const [matchingEvents, setMatchingEvents] = useState([]);

    const getMatchingEvents = () => {

        return getOrgEventById(organizationId)
        .then((response => {
            setMatchingEvents(response)
        }))
    }
    //write comment here 
    
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
