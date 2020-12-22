import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

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
    margin: "10px, 10px, 10px",
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
    //TODO: responsive nav with burger
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBarTransparent}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
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
              href="https://github.com/moisesu05/"
              target="_blank"
              style={{ color: "white" }}
              color="inherit"
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
        {/* <nav className="navbar">
                    <div className="navbar-container">
                        Knowlocator <i class="fas fa-book"></i>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />    
                        </div>
                        <ul className={this.state.click ? 'nav-menu active': 'nav-menu'}>
                            <li className="nav-item">
                                <a href="https://github.com/moisesu05/" target="_blank" className="nav-links" onClick={this.closeMobileMenu}>
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://github.com/moisesu05/" target="_blank" className="nav-links" onClick={this.closeMobileMenu}>
                                    Contact
                                </a>
                            </li>
                        </ul>    
                    </div>
                </nav> */}
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
