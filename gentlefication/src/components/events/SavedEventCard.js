//handles layout of each saved event card
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
import Logo from "../../images/logo.png";
import './SavedEvents.css';


import React from 'react';
import { Link } from 'react-router-dom';

export const SavedEventCard = ({ savedEvent, handleDelete }) => (
    // savedEvent & handleDelete is a prop being passed in from EventsList() LAST return

    <section className="savedEventCard">

        <h2 className="name">{savedEvent.event.name}</h2>
        <div className="eventTime">DATE: {savedEvent.event.date}</div>
        <div className="eventLocation">LOCATION: {savedEvent.event.location}</div>
        <div className="eventDes">DESCRIPTION: {savedEvent.event.description}</div>
        <div className="savedNotes">NOTES: {savedEvent.notes}</div>
        <div className="savedCardButtons">
            <Link to={`/savedEvents/edit/${savedEvent.id}`}>
                <Button className="notesButton" type="button">ADD OR CHANGE YOUR NOTES</Button>
            </Link>

            <Button type="button" className="removeButton" onClick={() => handleDelete(savedEvent.id)}>REMOVE EVENT</Button>
        </div>
    </section>
)

//preview card of saved events that goes into aside on main events view
export const SavedPreview = ({ savedEventPreview, handleDelete }) => (
    <section className="savedPreviewCard">
        <h2 className="name">{savedEventPreview.event.name} </h2>
        <div className="eventTime"> TIME: {savedEventPreview.event.date} at {savedEventPreview.event.time}</div>
        <div className="eventLocation"> LOCATION: {savedEventPreview.event.location}</div>
        <Button className="previewRemoveButton" type="button" onClick={() => handleDelete(savedEventPreview.id)}>REMOVE EVENT</Button>
    </section>
)