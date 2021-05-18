// handles functions related to editing event notes
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import './Notes.css'


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

    const handleCancel = () => {
        return history.push("/")
    }

    useEffect(() => {


        getSavedEventById(savedEventId)
            //fetch each savedEvent object by ID
            .then(response => {

                setSavedEvent(response);
                //sets note equal to API reponse
                setIsLoading(false);
                //allows user submission
            });
    }, [
        // savedEventId
    ]);
    //passes in updated array of events + notes


    return (

        <div className="notesPageView">
            <div className="notesPageContainer">

                <form className="notesForm">

                    <h1 className="notesFormHeader">DON'T FORGET THE DETAILS!</h1>
                    <fieldset>


                        <input
                            type="text"
                            id="notes"
                            onChange={handleFieldChange}
                            className="form-control"
                            value={savedEvent.notes} />

                    </fieldset>

                    <div className="noteButtons">

                        <div className="cancel-note">
                            <Button type="button" onClick={handleCancel}>Cancel</Button>
                        </div>

                        <div className="note-update">
                            <Button type="button" disabled={isLoading} onClick={updateExistingSavedEvent} >
                                Update
                            </Button>
                        </div>


                    </div>


                </form>

            </div>
        </div>
    )
}