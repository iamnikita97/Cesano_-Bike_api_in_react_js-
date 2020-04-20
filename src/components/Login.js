import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    NavLink,
    Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import { START_AUTHENTICATE } from '../actions';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login(props) {
    const classes = useStyles();

    const [state, setState] = useState({
        email : '',
        password : ''
    })
    
    const {
        access_token,
        dispatchauthenticate,
        isLoading
    } = props;
    
    console.log({isLoading})
    
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchauthenticate(state.email, state.password);
    }

    console.log(access_token,`this is token value`)

    return (
        access_token
        ?
            <Redirect to={'/registration'}/>
            :
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="userName"
                                label="User Name"
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                                autoComplete="userName"
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={state.password}
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"

                                autoComplete="current-password"
                                />
                        </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    disabled={isLoading}
                        >
                        {isLoading ? 'Please wait...' : 'Login'}
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <NavLink to='/registration'>
                                Not have an account? Register here
                                                                                                                  
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    access_token : state.user.access_token,
    isLoading : state.user.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    dispatchauthenticate : (email, password) => dispatch({
        type : START_AUTHENTICATE,
        email,
        password
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)