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

import { React, useEffect, useState } from 'react';


export const SpotLightCard = ({spotLight, refreshSpotLight}) => {

    return ( 
    <>
        <div className="org-spotlight">
        <img className="orgImage" src={spotLight.image} alt="Local organization image" />
           <h3>
               {spotLight.name}
           </h3>
           <p> {spotLight.description}</p>
           <Button type="button" onClick={() => refreshSpotLight()}>get new</Button>
        </div>
        </>
    )
    
}