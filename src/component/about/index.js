/** @format */

import { Avatar, Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Img from "../search/assets/pic1.jpg";
import Img1 from "../search/assets/final.png";

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Box>
          <Box>
            <Typography className={classes.paper}>
              Frontend Developer & Mentor
            </Typography>

            <Typography className={classes.paperUnder}>
              I love to write simple and effective code.
            </Typography>
          </Box>
          <Box className={classes.avatarBox}>
            <Avatar className={classes.avatarSzie} src={Img} />
          </Box>
        </Box>
      </Container>
      <Box className={classes.vetorBox}>
        <img src={Img1} width='100%' />
      </Box>
      <Box className={classes.detailsContainer}>
        <Typography align='center' variant='h6' className={classes.deatialTypo}>
          Sanan
        </Typography>
      </Box>
    </div>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#141c3a",
    fontFamily: "Eurostile",
    fontSize: "42px",
    fontWeight: 1000,
    letterSpacing: "normal",
  },
  paperUnder: {
    textAlign: "center",
    color: "##0a0a0a",
    fontFamily: "Eurostile",
    fontSize: "22px",
    letterSpacing: "normal",
  },
  avatarSzie: {
    height: "200px",
    width: "200px",
  },
  gridSpacing: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  avatarBox: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "40px",
    paddingBottom: "40px",
    marginTop: "40px",
    marginBottom: "40px",
  },
  vetorBox: {
    marginTop: "40px",
  },
  deatialTypo: {
    backgroundColor: "#aab3c2",
    textAlign: "center",
  },
  detailsContainer: {
    position: "relative",
    bottom: 4,
  },
}));
