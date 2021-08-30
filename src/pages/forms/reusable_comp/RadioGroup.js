import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";
import React from "react";

export default function RadioGroup(props) {
  const { name, label, value, onChange, radiolist } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {radiolist.map((item, index) => (
          <FormControlLabel
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
