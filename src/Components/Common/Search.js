import React, { Component } from "react";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { 
  ThemeProvider, 
  createMuiTheme,
  responsiveFontSizes,
  withStyles, } from "@material-ui/core";

import SearchItems from "./SearchItems";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Balsamiq Sans", "cursive"].join(","),
  },
})
theme = responsiveFontSizes(theme) 

const styles = (theme) => ({
  content: {
    paddingBottom: "2.5rem",
  },
  searchRoot: {
    flexGrow: 1,
    padding: "1rem 0rem 3rem 1.5rem",
    maxWidth: "100%"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://image.freepik.com/free-vector/book-readers-concept_74855-6263.jpg')`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    padding: "5px",
  },
  textField: {
    width: "75vw",
    maxWidth: "550px",
    color: "white",
  },
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: "",
      result: [],
    };
  }

  handleChange = (event) => {
    this.setState({ book: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.book}&maxResults=30`
    ).then((data) => {
      this.setState({ result: data.data.items });
      console.log(this.state.result);
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <Box className={classes.hero}>
          <Box>
            <ThemeProvider theme={theme}>
              <Typography className={classes.title} variant="h3" align="center">
                Find Books You Want!
              </Typography>
            </ThemeProvider>
            <form onSubmit={this.handleSubmit} noValidate>
              <TextField
                InputProps={{ className: classes.textField }}
                onChange={this.handleChange}
                id="outlined-basic"
                label="Search for Books"
                variant="filled"
                size="normal"
              />
              <IconButton type="submit" aria-label="Search">
                <SearchIcon fontSize="large" />
              </IconButton>
            </form>
          </Box>
        </Box>
        <Grid container className={classes.searchRoot} spacing={3}>
          {this.state.result.map((book, index) => {
            return <SearchItems {...book} key={index} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Search);
