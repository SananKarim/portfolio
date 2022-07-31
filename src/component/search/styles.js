/** @format */

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainTop: {
    display: "flex",
    flexDirection: "column",
    margin: "20px 0px 20px 0px",
    justifyContent: "center",
    backgroundColor: "ffff",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "rgba(0, 0, 0, 0.5) 2px 5px 3px 0px",
    width: "50%",
  },
  test: {
    display: "flex",
    justifyContent: "center",
  },

  parent: {},
  typo: {
    margin: "20px 0px 10px 0px",
    letterSpacing: "6px",
  },
}));
