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
import './YourRepCard.css'

import React from 'react';

export const YourRepCard = ({district}) => {
return (
    <section className="repCardHome">
        <h2>WHOS WORKING FOR YOU?</h2>
        
        
        <div className="memberHeader">
        <img className="memberImageHome" src={district.councilMembers[0].image} alt="council member headshot" />
        <h3 className="memberName">City Council Member: {district.councilMembers[0].name}</h3>
        
        </div>
        <div className="membercontact">
        <h4>CONTACT INFO</h4>
        <div className="memberPhone">PHONE: {district.councilMembers[0].phone}</div>
        <div className="memberEmail">EMAIL: {district.councilMembers[0].email}</div>
        <Button className="councilWebsiteButton"><a href={district.councilMembers[0].url}>Visit Website</a></Button>
        </div>

    </section>
)}
//{district.councilMembers[0].image} starts with the object passed in via props, then accesses councilMembers array and returns index 0 (first object)