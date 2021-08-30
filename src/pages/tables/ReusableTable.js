import { TableBody, TableCell, TableRow, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import useTable from "./useTable";
import * as EmployeeService from "../../services/EmployeeService";

export default function ReusableTable() {
  const headCells = [
    { id: "fullName", label: "Employee Name" },
    { id: "email", label: "Employee Email" },
    { id: "mobile", label: "Mobile Number" },
    { id: "deparment", label: "Department" },
  ];

  const [records, setRecords] = useState(EmployeeService.getAllEmployees());

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells);

  return (
    <>
      <Toolbar></Toolbar>
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
