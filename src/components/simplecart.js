import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from 'react-redux';
import {deleteItem} from '../Redux/actions/cartActions'
// import StyledTableCell from '@mui/material'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  


export default function Simplecart() {
    const CartState=useSelector((state)=>state.cartReducer)
    console.log('CartState',CartState);
    const dispatch=useDispatch()

    return (
        <div>
             <TableContainer component={Paper}>
      <Table align="center" sx={{ width: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
           
            <StyledTableCell align="left">Produt Name</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;(JD)</StyledTableCell>
            <StyledTableCell align="right">Remove</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {CartState.addingItems.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right"> <CancelIcon onClick={()=>dispatch(deleteItem(row))}/></StyledTableCell>
             
            </StyledTableRow>
          ))}
          
          <StyledTableRow> 
          <StyledTableCell align="left"><h3> Total:</h3></StyledTableCell>
          <StyledTableCell align="right"> </StyledTableCell>
          <StyledTableCell align="right"> <h3>{CartState.Total}</h3></StyledTableCell>
              
               </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    )
}
