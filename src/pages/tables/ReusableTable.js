import {
  InputAdornment,
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import useTable from "./useTable";
import * as EmployeeService from "../../services/EmployeeService";
import Controls from "../forms/reusable_comp/Controls";
import { Filter, Search } from "@material-ui/icons";

const useStyles = makeStyles({
  searchbar: {
    width: "70%",
  },
});

export default function ReusableTable() {
  const headCells = [
    { id: "fullName", label: "Employee Name" },
    { id: "email", label: "Employee Email" },
    { id: "mobile", label: "Mobile Number" },
    { id: "deparment", label: "Department" },
  ];

  const classes = useStyles();
  const [records, setRecords] = useState(EmployeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <>
      <Toolbar>
        <Controls.Input
          label="Search Employees"
          className={classes.searchbar}
          size="small"
          InputProps={{
            startAdornemnt: (
              <InputAdornment position="start">
                <Search color="primary" />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
      </Toolbar>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.mobile}</TableCell>
              <TableCell>{item.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </>
  );
}
