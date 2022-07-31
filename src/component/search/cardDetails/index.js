/** @format */

import { Button, Card, CardMedia, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useNavigate, useLocation } from "react-router";
import { useStyles } from "./styles";
const Details = () => {
  const classes = useStyles();

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Grid>
      <Grid container xs={12} justifyContent='center'>
        <Button onClick={() => navigate("/home")}>Back to search</Button>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>{location.state.description}</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>{location.state.glass}</Paper>
      </Grid>
      <Grid item spacing={3} justify='center' xs={3}>
        <Card>
          <CardMedia
            className={classes.cover}
            height='400'
            image={location.state.img}
            component='img'
            title='Live from space album cover'
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Details;
