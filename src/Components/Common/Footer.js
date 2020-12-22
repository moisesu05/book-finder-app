import React, { Component } from 'react'
//ui components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
//icons
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//use styles
import { withStyles } from '@material-ui/core'


const styles = theme => ({
    root:{
        flexGrow: 1
    },
    title:{
        flexGrow: 1,
        color: '#a2d392',
        fontSize: 28
    },
    appBarBottom:{
        backgroundColor: 'rgb(45,60,62)',
        boxShadow: "none",
        position: 'absolute',
        bottom: 0,
        height: '4.5rem',
        width: '100%'
    },
    icons:{
        padding: 3,
        color: 'white'
    }
})

class Footer extends Component{

    render(){

        const { classes } = this.props;

        return(
            <div>
                <AppBar position="static" className={classes.appBarBottom}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                     Knowlocator
                    </Typography>
                    <IconButton className={classes.icons} href="https://github.com/moisesu05/" target="_blank" type="submit" aria-label="Search">
                    <GitHubIcon fontSize="medium"/>
                    </IconButton>
                    <IconButton className={classes.icons} href="https://www.linkedin.com/in/moises-ronan-44060b191/" target="_blank" type="submit" aria-label="Search">
                    <LinkedInIcon fontSize="large"/>
                    </IconButton>
                </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Footer)