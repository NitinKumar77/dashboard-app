import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const MyTableCell = styled(TableCell)({
  backgroundColor: "#61FF48",
  borderLeft: "2px solid #f3f3f3",
});
const BorderedTableCell = styled(TableCell)({
  borderLeft: "2px solid #f3f3f3",
});
export default function BasicTable() {
  const rowsData = useSelector((state) => state.userList.usersListData);
  console.log(rowsData);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <MyTableCell>ID</MyTableCell>
            <MyTableCell align='right'>Name</MyTableCell>
            <MyTableCell align='right'>E-mail</MyTableCell>
            <MyTableCell align='right'>Phone No.</MyTableCell>
            <MyTableCell align='right'>Age</MyTableCell>
            <MyTableCell align='right'>Gender</MyTableCell>
            <MyTableCell align='right'>DOB</MyTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <BorderedTableCell component='th' scope='row'>
                {user.id}
              </BorderedTableCell>
              <BorderedTableCell align='left'>
                {" "}
                {user.firstName + " " + user.lastName}
              </BorderedTableCell>
              <BorderedTableCell align='left'>{user.email}</BorderedTableCell>
              <BorderedTableCell align='right'>{user.phone}</BorderedTableCell>
              <BorderedTableCell align='right'>{user.age}</BorderedTableCell>
              <BorderedTableCell align='right'>{user.gender}</BorderedTableCell>
              <BorderedTableCell align='right'>
                {user.birthDate}
              </BorderedTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
