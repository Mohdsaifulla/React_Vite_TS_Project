import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Departments from "./Departments";
import DepartmentSec from "./DepartmentSec";
import { Box, Typography } from "@mui/material";

interface ListItem {
  body: string;
  id: number;
  title: string;
  userId: number;
}
const TableComp: React.FC = () => {
  const [data, setData] = useState<ListItem[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp)
      .then((data) => data.json())
      .then((e) => setData(e as ListItem[]));
  }, []);
  return (
    <>
      <Typography variant="h4" align="center" pt={4} mb={3}>
        All Details in Table
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "20px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.NO</TableCell>
              <TableCell align="center">ID </TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(0, 10).map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="center">{item.userId}</TableCell>
                <TableCell align="left">{item.title}</TableCell>
                <TableCell align="left">{item.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" align="center" pt={4}>
        Select the Department and Sub Departments
      </Typography>
      <Box
        alignItems=""
        border="1px solid black"
        mt={4}
        p={2}
        display="flex"
        flexDirection="column"
        textAlign="center"
        justifyContent="space-between"
        sx={{
          borderRadius: "20px",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        }}
      >
        <Departments />
      </Box>
      <Box
        alignItems=""
        border="1px solid black"
        mt={4}
        p={2}
        display="flex"
        flexDirection="column"
        textAlign="center"
        justifyContent="space-between"
        sx={{
          borderRadius: "20px",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        }}
      >
        <DepartmentSec />
      </Box>
    </>
  );
};

export default TableComp;
