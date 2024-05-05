import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,trackingId, date, status) {
  return { name,trackingId, date, status };
}
const myStyle=(status)=>{
    if(status==='Approved'){
      return{
      color:'green',
      background:'rgb(145,254,159 /47%)',
    }
  }
  else if(status==='Pending'){
    return{
      color:'red',
      background:'#ffadad8f',
     } 
  }
  else{
    return{
      color:'white',
      background:'#59bfff',
    }
  }
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <div className='Table'>
      <h3>Recent Orders</h3>
     <TableContainer component={Paper} 
     style={{boxShadow:'0px 13px 20px 0px #80808029'}}
     >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">TrackingID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">
              Status
              </TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
              <TableCell align="left" className='details'>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
