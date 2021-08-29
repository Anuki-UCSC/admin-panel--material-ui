import { Card, makeStyles, Paper } from "@material-ui/core";
import { PeopleAlt } from "@material-ui/icons";
import React from "react";
import Appbar from "../../components2/appbar/Appbar";
import PageHeader from "../../components2/pageHeader/PageHeader";
import Sidemenu from "../../components2/sidemenu/Sidemenu";
import ReusableEmpform from "../forms/ReusableEmpform";

const useStyles = makeStyles({
  mui_home: {
    paddingLeft: 320,
    width: "100%",
  },

  form_container: {
    margin: "40px",
    padding: "40px",
  },
});

export default function Mui_home() {
  const classes = useStyles();

  return (
    <div>
      <Sidemenu />
      <div className={classes.mui_home}>
        <Appbar />
        <PageHeader
          title={"Page Header"}
          description={"Page Description"}
          icon={<PeopleAlt />}
        />
        <Card className={classes.form_container}>
          <ReusableEmpform />
        </Card>
      </div>
    </div>
  );
}
