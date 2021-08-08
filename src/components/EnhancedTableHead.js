import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function EnhancedTableHead() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/tasks',
			headers: {"Access-Control-Allow-Origin": "*"}
    })
    .then(({data}) => {
      setData(data);
    })
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">TASK ID</TableCell>
            <TableCell>PR LINK</TableCell>
            <TableCell align="right">TASK NAME</TableCell>
            <TableCell align="right">TIME SPENT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row,index) => (
            <TableRow key={index}>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.pr}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}