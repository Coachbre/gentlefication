import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authApi, userStorageKey, userZipStorageKey } from "./authSettings";


import "./Login.css";
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










export const Login = () => {

    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    sessionStorage.setItem(userStorageKey, exists.id)
                    sessionStorage.setItem(userZipStorageKey, exists.zipcode)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }






    



    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const classes = useStyles();


    return (
        
        <body id="loginPage">

<div class="crossfade">
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
</div>

        <main className="container--login">

            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>

            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <div className={classes.paper} id="loginContainer">

                <img className="logo" src={Logo} alt="logo" />

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <form className={classes.form} noValidate onSubmit={handleLogin}>

                        <TextField
                        className="loginInput"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange}
                        />

                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}>
                            Sign in
                        </Button>

                    </form>
                </div>

                <Grid item>
                    <Link to="/Register" variant="body2">
                        {"New here? Sign Up!"}
                    </Link>
                </Grid>

                <Box mt={8}>
                    {/* <Copyright /> */}
                </Box>

            </Container>
        </main>
        </body>
    )
}

