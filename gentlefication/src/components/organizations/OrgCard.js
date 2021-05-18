//handles layout of each organization card
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
import './Organizations.css';


import React from 'react';
import { Link } from "react-router-dom";


export const OrgCard = ({ org }) => (
    // 'org' is a prop being passed in from OrgList()
    <section className="orgCard">

        <Link to={`/organizations/events/${org.id}`}>
            <Button type="button" className="eventsButton">VIEW SCHEDULED EVENTS</Button>
          
        </Link>

        <img className="orgImage" src={org.logo} alt="Local organization image" />

        <h2 className="orgName">{org.name} </h2>
        <div className="orgDes"> {org.description}</div>
        <div className="orgContact">
            <h3>CONTACT INFORMATION</h3>
            <div className="orgAddress"> {org.address}</div>
            <div className="orgPhone"> {org.phone}</div>
            <Button className="orgWebsiteButton"><a href={org.website}>Visit Website</a></Button>
        </div>

    </section>
)