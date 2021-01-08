import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "auto",
    padding: theme.spacing(2),
    width: "10vw",
  },
  image: {
    width: 128,
    height: 300,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

class SearchItems extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={4} className={classes.root}>
      
          <Paper className={classes.Paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase
                  href={this.props.volumeInfo.infoLink}
                  target="_blank"
                  className={classes.image}
                >
                  <img
                    className={classes.img}
                    src={
                      this.props.volumeInfo.imageLinks === undefined
                        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Book_missing.svg/200px-Book_missing.svg.png"
                        : `${this.props.volumeInfo.imageLinks.thumbnail}`
                    }
                    alt={this.props.volumeInfo.title}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={6} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle2">
                      <b>Title:</b> {this.props.volumeInfo.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <b>Published date:</b>
                      {this.props.volumeInfo.publishedDate}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <b>Author/s:</b> {this.props.volumeInfo.authors}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
    );
  }
}

export default withStyles(styles)(SearchItems);
