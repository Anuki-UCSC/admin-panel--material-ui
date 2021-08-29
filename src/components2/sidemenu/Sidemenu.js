import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sidemenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    width: 320,
    height: "100%",
    backgroundColor: "#253053",
  },
});

export default function Sidemenu() {
  const classes = useStyles();

  return <div className={classes.sidemenu}>sidemuemu</div>;
}
