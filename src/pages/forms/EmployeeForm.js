import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  RadioGroup,
  TextField,
  Radio,
} from "@material-ui/core";
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

export default function EmployeeForm() {
  const validation = () => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "This feild is required!";
    temp.email = /$|.*@.*..*/.test(values.email) ? "" : "Invalid format!";
    temp.mobile =
      values.mobile.length > 9 ? "" : "Invalid length of mobile number!";
    temp.deparmentid =
      values.deparmentid.length != 0 ? "" : "this feild is required";

    setErrors({
      ...temp,
    });
  };

  const { values, setValues, errors, setErrors, handleInputChange } =
    UseForm(initialFValues);

  const handleSubmit = () => {
    window.alert(validation());
    // if (validation()) window.alert("testing.............");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full Name"
            name="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
}
