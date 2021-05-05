// handles functions related to editing event notes

import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getSavedEventById, updateSavedEvent } from '../../modules/EventsManager';

export const NoteEdit = () => {

    const [savedEvent, setSavedEvent] = useState({
        notes: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    //prevents user from submitting multiple times while json data is being updated

    const { savedEventId } = useParams();
    //pulls savedEventId (an integer) from the route in application views
    console.log(savedEvent)
    const history = useHistory();

    const handleFieldChange = (event) => {
        const changedSavedEvent = { ...savedEvent };
        //changedNote is now equal to a copy of 'note'
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        // look into the savedEvent object copy and find id of the key we are looking for

        changedSavedEvent[event.target.id] = selectedVal;
        // value of changed task = user input
        console.log(changedSavedEvent)
        setSavedEvent(changedSavedEvent);
    };

    const updateExistingSavedEvent = event => {
        event.preventDefault() /* prevents browser refresh */
        setIsLoading(true); /* prevents user submission */

        const editedSavedEvent = {
            id: savedEventId,
            //since we are editing, id is required
            userId: savedEvent.userId,
            eventId: savedEvent.eventId,
            notes: savedEvent.notes
            //watches for updates within key-value pairs
        };

        updateSavedEvent(editedSavedEvent)
            .then(() => history.push('/'))
        //pushes updated event notes and reloads home dashboard
    };

    useEffect(() => {
        console.log("saved Event ID", savedEventId)
    
        getSavedEventById(savedEventId)
            //fetch each savedEvent object by ID
            .then(response => {
                console.log(savedEventId)
                setSavedEvent(response);
                //sets note equal to API reponse
                setIsLoading(false);
                //allows user submission
            });
    }, [ 
        // savedEventId
     ]);
    //passes in updated array of events + notes

    console.log(savedEvent)
    return (
   
        <form className="noteEdit">
            <h2 className="noteEditTitle">UPDATE EVENT NOTES</h2>

            <fieldset>
                <div>
                    {/* <label htmlFor="notesName">{savedEvent.event.name}</label> */}
                    <input
                        type="text"
                        id="notes"
                        onChange={handleFieldChange}
                        className="form-control"
                        value={savedEvent.notes} />
                </div>
            </fieldset>

            <div>
                <Link to={`/`} >
                    <button className="cancel-note">Cancel</button>
                </Link>
            </div>


            <button type="button" disabled={isLoading} className="note-update" onClick={updateExistingSavedEvent} >
                Update
            </button>


        </form>
    )
}