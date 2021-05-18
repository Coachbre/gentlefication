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

import { React } from 'react';
import './OrgSpotlight.css'


export const SpotLightCard = ({ spotLight, refreshSpotLight }) => {

    return (
        <>

          

                <div classname="spotLightHeader">
                    <h2>FEATURED ORGANIZATION</h2>
                    <img className="orgImage" src={spotLight.logo} alt="Local organization image" />
                    <h3>
                        {spotLight.name}
                    </h3>
                </div>

                <p> {spotLight.description}</p>
                <Button type="button" onClick={() => refreshSpotLight()}>VIEW NEXT</Button>

        </>
    )

}