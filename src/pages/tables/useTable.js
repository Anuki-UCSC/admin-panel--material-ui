import { TableCell, TableSortLabel } from "@material-ui/core";
import {
  TableHead,
  TableRow,
  makeStyles,
  TablePagination,
} from "@material-ui/core";
import { set } from "date-fns";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),
    width: "100%",
    "& thead th": {
      fontWeight: "600",
      color: theme.palette.main,
      backgroundColor: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#ffbf2",
      cursor: "pointer",
    },
  },
}));

export default function useTable(records, headCells) {
  const classes = useStyles();

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const TblContainer = (props) => (
    <table className={classes.table}>{props.children}</table>
  );

  const handleSortRequest = (cellid) => {
    const isAsc = orderBy === cellid && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(cellid);
  };

  const TblHead = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headcell) => (
            <TableCell
              key={headcell.id}
              sortDirection={orderBy === headcell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headcell.id}
                direction={orderBy === headcell.id ? order : "asc"}
                onClick={() => {
                  handleSortRequest(headcell.id);
                }}
              >
                {headcell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TblPagination = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={records.length}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );

  function stableSort(array, comparator) {
    const stabilizeThis = array.map((el, index) => [el, index]);
    stabilizeThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizeThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const recordsAfterPagingAndSorting = () => {
    return stableSort(records, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };

  return {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  };
}
