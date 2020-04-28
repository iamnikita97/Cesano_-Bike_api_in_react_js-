import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Profile from '../Profile';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

function Header(props) {
    const classes = useStyles();
    const {
        loggedInUserData,
    } = props;


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <Button color="inherit"><Profile {... loggedInUserData} /></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => ({
    loggedInUserData: state.user
})

//   const mapDispatchToProps = (dispatch) => ({
//     dispatchtosetstatedata: (email, password) => dispatch({
//       type: SET_STATE_FROM_LOCAL_STORAGE
//     })
//   })

export default connect(mapStateToProps, null)(Header)

