import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
  const { name, label, value, onchange } = props;

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onchange}
    />
  );
}
