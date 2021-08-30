import { FormControlLabel, Checkbox as MuiCheckbox } from "@material-ui/core";
import React from "react";

export default function CheckBox(props) {
  const { name, label, value, onChange } = props;

  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={value}
          onChange={onChange}
          name={name}
          color="secondary"
        />
      }
      label={label}
    />
  );
}
