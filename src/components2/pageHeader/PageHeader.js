import React from "react";
import { Paper, Card, Typography, makeStyles } from "@material-ui/core";

const usestyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  PageHeader: {
    padding: theme.spacing(2),
    display: "flex",
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "purple",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

export default function PageHeader(props) {
  const { title, description, icon } = props;

  const classes = usestyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {description}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
