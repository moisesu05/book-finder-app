import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import {typography, breakpoints} from '@material-ui/system';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "#a2d392",
    fontSize: 28,
  },
  appBarTransparent: {
    backgroundColor: "rgb(72,126,103)",
    boxShadow: "none",
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      click: !prevState.click,
    }));
  };

  closeMobileMenu = () => {
    this.setState({ click: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBarTransparent}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography xs= {{ fontSize:10}} variant="h6" className={classes.title}>
              Knowlocator <i class="fas fa-book"></i>
            </Typography>
            <Button
              href="https://github.com/moisesu05/"
              target="_blank"
              style={{ color: "white" }}
              color="inherit"
            >
              About
            </Button>
            <Button
              href="https://www.linkedin.com/in/moises-ronan-44060b191/"
              target="_blank"
              style={{ color: "white" }}
              color="inherit"
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
