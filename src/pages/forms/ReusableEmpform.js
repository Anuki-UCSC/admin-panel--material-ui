import { Grid } from "@material-ui/core";
import Controls from "./reusable_comp/Controls";
import React, { useState, useEffect } from "react";
import { UseForm, Form } from "../forms/UseForm";
import * as EmployeeService from "../../services/EmployeeService";

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  deparmentid: "",
  hireDate: new Date(),
  isPermanent: false,
};

console.log("hi" + typeof initialFValues.gender);

const radioList = [
  { id: "male", title: "Male" },
  { id: "female", title: "FeMale" },
  { id: "other", title: "Other" },
];

const deparmentList = [
  { id: "1", title: "IT" },
  { id: "2", title: "Development" },
  { id: "3", title: "Accounts" },
  { id: "4", title: "Human Resource" },
];

export default function ReusableEmpform() {
  const validation = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues) {
      temp.fullName = fieldValues.fullName ? "" : "This field is required!";
    }
    if ("email" in fieldValues) {
      temp.email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(
        fieldValues.email
      )
        ? ""
        : "Invalid email format!";
    }
    if ("mobile" in fieldValues) {
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Invalid length of mobile number!";
    }
    if ("deparmentid" in fieldValues) {
      temp.deparmentid =
        fieldValues.deparmentid.length != 0 ? "" : "This field is required!";
    }
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == ""); // returns true or false
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    UseForm(initialFValues, true, validation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      window.alert(validation());
      EmployeeService.insertEmployee(values);
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name="email"
            label="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.Select
            name="deparmentid"
            label="Department"
            value={values.deparmentid}
            onChange={handleInputChange}
            deparmentList={deparmentList}
            error={errors.deparmentid}
          />

          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
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
            type="submit"
          />
          <Controls.Button
            variant="contained"
            size="large"
            color="default"
            text="Reset"
            type="reset"
            onClick={resetForm}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
