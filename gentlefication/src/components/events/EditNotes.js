// handles functions related to editing event notes

import { useState, useEffect } from 'react';
import { useHistory, useParams} from 'react-router';
import { Link } from "react-router-dom";
import { getSavedEventById, updateSavedEvent } from '../../modules/EventsManager';

export const NoteEdit = () => {

    const [savedEvent, setSavedEvent] = useState({
        // notes:""
    });

    const [isLoading, setIsLoading] = useState(false);
    //prevents user from submitting multiple times while json data is being updated

    const {savedEventId} = useParams();
    //pulls task.id (an integer) from the route
    const history = useHistory();

    const handleFieldChange = (event) => {
        const changedSavedEvent = { ...savedEvent};
        //changedNote is now equal to a copy of 'note'

        changedSavedEvent[event.target.id] = event.target.value;
        // value of changed task = user input
        setSavedEvent(changedSavedEvent);
    };

    const updateExistingSavedEvent = event => {
        event.preventDefault() /* prevents browser refresh */
        setIsLoading(true); /* prevents user submission */

        const editedSavedEvent = {
            id: savedEventId,
            notes: savedEvent.notes
            //watches for updates within key-value pairs
        }

        updateSavedEvent(editedSavedEvent)
        .then(() => history.push('/'))
        //pushes updated event notes and reloads home dashboard
    };

    useEffect(() => {
        getSavedEventById(savedEventId)
        //fetch each savedEvent object by ID
        .then(response => {
            setSavedEvent(response);
            //sets note equal to API reponse
            setIsLoading(false);
            //allows user submission
        });
    }, []);
    //passes in updated array of events + notes
    
    return (
        <form className="noteEdit">
            <h2 className="noteEditTitle">UPDATE EVENT NOTES</h2>

            <fieldset>
                <div>
                    {/* <label htmlFor="notesName">{savedEvent.event.name}</label> */}
                    <input type="text"
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