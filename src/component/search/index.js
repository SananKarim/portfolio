/** @format */

import { Box, Container, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardSection from "./card";
import { useStyles } from "./styles";
import data from "./data";

const Home = () => {
  const classes = useStyles();
  const [first, setFirst] = useState(data);
  const [handle, sethandle] = useState("");

  function myFunction(input) {
    const value = input.target.value;
    sethandle(value);
    if (value === "") {
      setFirst(data);
      return;
    }
    const filteredData = data.filter((a) => {
      return value === a.description;
    });
    setFirst(filteredData);
    console.log("i want to run this x");
  }

  return (
    <Box className={classes.parent}>
      <div className={classes.test}>
        <Box className={classes.mainTop}>
          <Typography variant='body1' gutterBottom className={classes.typo}>
            Search your favurite Cocktail
          </Typography>
          <TextField
            size='small'
            id='outlined-basic'
            variant='outlined'
            value={handle}
            onChange={myFunction}
          />
        </Box>
      </div>
      <Container>
        <Grid container spacing={8} justifyContent='center'>
          {first &&
            first.map(({ description, pic, glass, alcoholic }, index) => (
              <Grid item md={4} lg={3}>
                <CardSection
                  description={description}
                  pic={pic}
                  glass={glass}
                  alcoholic={alcoholic}
                />
              </Grid>
            ))}
          {first && first.length === 0 && <>No such kind of element</>}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
