import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import EventIcon from '@material-ui/icons/Event';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Login from './Login';
import axios from 'axios';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'black'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),

    },
}));

export default function Registration() {
    const classes = useStyles();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        countrycode: '',
        mobileNumber: '',
        email: '',
        password: '',
        allDataRecords: []
    })

    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
        console.log(state);
    }

    function HandleSubmit(event) {
        event.preventDefault();
        alert("successfully");
        console.log(state);
    }


    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <EventIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registration
        </Typography>
                <form className={classes.form} onSubmit={HandleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                autoComplete="firstName"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="lastName"
                                label="Last Name"
                                id="lastName"
                                autoComplete="lastName"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="countrycode"
                                label="Country Code"
                                id="countrycode"
                                autoComplete="countrycode"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="mobileNumber"
                                label="Mobile Number"
                                id="mobileNumber"
                                autoComplete="countrycode"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="email"
                                label="Email"
                                id="email"
                                autoComplete="email"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="Password"
                                id="password"
                                autoComplete="password"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        component={NavLink}
                        to='/'
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <NavLink to='/'>
                                Already have an account? Log in
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}