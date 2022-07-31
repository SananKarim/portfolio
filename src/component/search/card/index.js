/** @format */

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router";
import { useStyles } from "./styles";

const CardSection = ({ description, pic, glass, alcoholic }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.wholeContainer}>
      <Card className={classes.root}>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={pic}
          title='Contemplative Reptile'
        />
        <CardActionArea className={classes.container}>
          <CardContent>
            <Typography gutterBottom variant='h4'>
              {description}
            </Typography>
            <Typography variant='body1' color='textSecondary' component='p'>
              {glass}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {alcoholic}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size='small'
            color='primary'
            onClick={() =>
              navigate("/details", {
                state: {
                  description: description,
                  glass: glass,
                  alcoholic: alcoholic,
                  img: pic,
                },
              })
            }>
            Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardSection;
