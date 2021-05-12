import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { authApi, userStorageKey, userZipStorageKey } from "./authSettings"

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

export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "", zipcode: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {

        return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`,
                            zipcode: parseInt(registerUser.zipcode)
                            //takes user input (zipcode as a string) and adds as an integer to json data
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                sessionStorage.setItem(userStorageKey, createdUser.id)
                                sessionStorage.setItem(userZipStorageKey, createdUser.zipcode)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
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
        <main className="container--login">

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>

                    <img className="logo" src={Logo} alt="logo" />

                    <form className={classes.form} onSubmit={handleRegister}>

                        <Typography component="h1" variant="h5">
                            Sign Up!
                    </Typography>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoComplete="firstName"
                            autoFocus
                            value={registerUser.firstName}
                            onChange={handleInputChange}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lastName"
                            autoFocus
                            value={registerUser.lastName}
                            onChange={handleInputChange}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={registerUser.email}
                            onChange={handleInputChange}
                        />

                        {/* <fieldset>
                    <div> Which type of community asset are you?</div>

                    <label htmlFor="checkbox"> Resident </label>
                    <input type="checkbox" name="residentCheckbox" id="checkbox" className="form-control" onChange={handleInputChange} />

                    <label htmlFor="checkbox"> Organization </label>
                    <input type="checkbox" name="OrgCheckbox" id="checkbox" className="form-control" onChange={handleInputChange} />
                    </fieldset> */}

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="zipcode"
                            label="Zipcode"
                            name="zipcode"
                            autoComplete="zipcode"
                            value={registerUser.zipcode}
                            onChange={handleInputChange}
                        />

                        <Grid item>

                            <Button type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}>
                                Register & Login
                            </Button>

                        </Grid>
                        <Grid item>

                            <Link to="/login"
                                fullWidth
                                variant="contained"
                                className={classes.submit}>
                                Cancel
                            </Link>

                        </Grid>

                    </form>
                </div>
            </Container>
        </main>
    )
}

