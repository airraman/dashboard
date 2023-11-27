import React from 'react'
import './newtable.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('A Fresh Batch', 173, 18, 4, 2),
    createData('Global and Growing', 183, 13, 1, 1),
    createData('Modern Goths', 198, 29, 2, 23),
    createData('R&B and Acoustic Grooves', 201, 10, 1, 4),
    createData('New Discoveries, Brooklyn Edition', 199, 30, 1, 2),
  ];



const Newtable = () => {
  return (
        <TableContainer component={Paper} className='newtable'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SongShare Theme</TableCell>
            <TableCell align="right">User Delivery</TableCell>
            <TableCell align="right">Unique Users Views</TableCell>
            <TableCell align="right">Unsubscribes</TableCell>
            <TableCell align="right">Playlist Requests</TableCell>
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
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Newtable