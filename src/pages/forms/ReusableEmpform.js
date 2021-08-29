import { Grid } from "@material-ui/core";
import Controls from "./reusable_comp/Controls";
import React, { useState, useEffect } from "react";
import { UseForm, Form } from "../forms/UseForm";

const initialFValues = [
  {
    id: 0,
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    deparmentid: "",
    hireDate: new Date(),
    isPermanent: false,
  },
];

const radioList = [
  { id: "male", title: "Male" },
  { id: "female", title: "FeMale" },
  { id: "other", title: "Other" },
];

const deparmentList = [
  { id: 1, title: "IT" },
  { id: 2, title: "Development" },
  { id: 3, title: "Accounts" },
  { id: 4, title: "Human Resource" },
];

export default function ReusableEmpform() {
  const { values, setValues, handleInputChange } = UseForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="mobile"
            name="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="city"
            name="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.Select
            name="department"
            label="Department"
            value={values.hireDate}
            onChange={handleInputChange}
            deparmentList={deparmentList}
          />

          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.deparmentid}
            onChange={handleInputChange}
            radiolist={radioList}
          />

          <Controls.CheckBox
            name="isPermanent"
            label="Permanent"
            value={values.isPermanent}
            onChange={handleInputChange}
          />

          <Controls.DatePicker
            name="hireDate"
            label="hireDate"
            value={values.hireDate}
            onChange={handleInputChange}
          />

          <Controls.Button
            variant="contained"
            size="large"
            color="primary"
            text="Submit"
          />
          <Controls.Button
            variant="contained"
            size="large"
            color="default"
            text="Reset"
          />
        </Grid>
      </Grid>
    </Form>
  );
}
