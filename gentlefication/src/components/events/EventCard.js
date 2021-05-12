//handles layout of each event card
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


import React from 'react';
import './Events.css';



export const EventCard = ({event, handleAddToList}) => (
// 'event' and 'handleAddToList is a prop being passed in from EventsList() LAST return
    <section>
        <h2 className="eventName">{event.name} </h2>
        <div>HOSTED BY: {event.organization.name}</div>
        <div className="eventTime"> DATE: {event.date}</div>
        <div className="eventLocation"> LOCATION: {event.location}</div>
        <div className="eventDes"> {event.description}</div>
        <Button type="button" className="saveButton" onClick={() => handleAddToList(event)}>Save</Button>
    </section>
)