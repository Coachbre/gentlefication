//shows selected organizations events

import { React, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { OrgEventCard } from './OrgEventCards';
import { getAllEvents } from '../../modules/EventsManager';

export const EventsByOrg = () => {
    const { organizationId } = useParams();

    const [matchingEvents, setMatchingEvents] = useState([]);

    const getMatchingEvents = () => {

        return getAllEvents(organizationId)
            //fetch each event object by organization id
            .then((events) => {
                setMatchingEvents(events)
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
                    //iterates over the array of saved events
                    return (
                        <ul>
                            <OrgEventCard
                            key={orgEventObj.id}
                            //unique key used by react (not required, but good convention)
                       
                            orgEvent={orgEventObj}
                            // savedEventObj (each saved event in the array) is now equal to 'savedEvent' (prop passed into SavedEventCard)
                       
                            />
                        </ul>
                    )
                })}
            </div>
        </div>
    )

}
