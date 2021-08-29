import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  Badge,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import {
  Notifications,
  PowerSettingsNew,
  ChatBubble,
  Search,
} from "@material-ui/icons";

import React from "react";

const usestyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    transform: "translateZ(0)",
  },
  searchText: {
    opacity: "0.6",
    padding: "0px 8px",
    "&:hover": {
      backgroundColor: "#C5C4C2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: 8,
      marginLeft: 4,
    },
  },

  btnBackground: {
    backgroundColor: "green",
  },
  btnlabel: {
    backgroundColor: "purple",
  },
});

export default function Appbar() {
  const classes = usestyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item style={{ border: "1px solid #fff" }}>
            <InputBase
              placeholder="Search Topics"
              className={classes.searchText}
              startAdornment={<Search />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton
            //   classes={{ root: classes.btnBackground, label: classes.btnlabel }}
            >
              <Badge badgeContent={5} color="primary">
                <ChatBubble />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={13} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
