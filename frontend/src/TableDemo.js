import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import {FormTable} from './FormTable';



export default function TableDemo({rows,setEditRow, setUpdateRow}) {

  const handleEdit = (row) => {
    setEditRow(row);
  }

  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>hsn code</TableCell>
            <TableCell>unit price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>CGST (9%)</TableCell>
            <TableCell>SGST (9%)</TableCell>
            <TableCell>Total</TableCell>
            <TableCell align='right'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row,index) => (
            <TableRow
              key={row.description}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.hsnCode}</TableCell>
              <TableCell>{row.unitPrice}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.cgst}</TableCell>
              <TableCell>{row.sgst}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell align="right" onClick={() => handleEdit(row)}>
              <ModeEditIcon />
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
