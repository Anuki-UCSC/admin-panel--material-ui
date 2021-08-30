import React from "react";

const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getDeparmentList = () => [
  { id: "1", title: "IT" },
  { id: "2", title: "Development" },
  { id: "3", title: "Accounts" },
  { id: "4", title: "Human Resource" },
];

export function insertEmployee(data) {
  console.log(data);
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  console.log(data["id"]);
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));

  //   map
  let departments = getDeparmentList();
  return employees.map((x) => ({
    ...x,
    department: departments[x.deparmentid - 1].title,
  }));
}
