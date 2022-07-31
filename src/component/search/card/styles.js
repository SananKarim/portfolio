/** @format */

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wholeContainer: {
    "& .MuiCard-root": {
      width: "250px",
      borderRadius: "4px 4px 0px 0px",
      boxShadow: "1px 3px 9px 0px",
    },
  },

  container: {
    "&  .MuiCardMedia-img": {
      objectFit: "cover",
      width: "100%",
    },

    "&  .MuiTypography-colorTextSecondary": {
      letterSpacing: "4.8px",
    },
  },
}));
