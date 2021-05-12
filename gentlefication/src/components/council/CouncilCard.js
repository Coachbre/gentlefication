//handles layout of each city council member card
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
import './Council.css'


import React from 'react';


export const CouncilCard = ({council}) => (
    <section>
        <img className="memberImage" src={council.image} alt="council member headshot" />
    
        <div className="memberHeader">
        <h2 className="memberName">{council.name} - {council.district.name}</h2>
        <Button className><a href={council.url}>Visit Website</a></Button>
        </div>
        <div className="membercontact">
        <h3>CONTACT INFO</h3>
        <div className="memberPhone">PHONE: {council.phone}</div>
        <div className="memberEmail">EMAIL: {council.email}</div>
        </div>

    </section>
)