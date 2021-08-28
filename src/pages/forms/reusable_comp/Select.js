import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
import React from "react";

export default function Select(props) {
  const { name, label, value, onChange, deparmentList } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <MuiSelect
        // labelId="demo-simple-select-outlined-label"
        // id="demo-simple-select-outlined"
        name={name}
        value={value}
        onChange={(e) => onChange(convertToDefEventPara(name, e.target.value))}
        label={label}
      >
        {deparmentList.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
