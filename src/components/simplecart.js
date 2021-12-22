import React,{useState} from 'react'
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
import {deleteItem} from '../Redux/actions/cartActions';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Button,Alert,AlertTitle } from '@mui/material';
import {checkout} from '../Redux/actions/cartActions'
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
  const [alertFlag,setalertFlag]=useState(false)
    const CartState=useSelector((state)=>state.cartReducer)
    console.log('CartState',CartState);
    const dispatch=useDispatch()

    function alertHandeler() {

      setalertFlag(true)
        setTimeout(() => {
          setalertFlag(false)
          
        }, 5000);

        dispatch(checkout())

  
  
      
    }

    return (

      
        <div>
          <Grid container spacing={2}>
          <Grid item xs={6}>

             <TableContainer >
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
    </Grid>

    <Grid
    
    templateRows='repeat(1, 1fr)'
    templateColumns='repeat(9, 1fr)'
    gap={'5'}
    >

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
        

          required
          id="outlined-error"
          label="Email"
          placeholder="Email"
        />
        <TextField
          
          id="outlined-error-helper-text"
          label="Adress"
          placeholder="Adress"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          
          id="filled-error"
          label="Zip Code"
          placeholder="Zip Code"
          variant="filled"
        />
        <TextField
          
          id="filled-error-helper-text"
          label="CVV"
          // defaultValue="CVV"
          placeholder='CVV'
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          
          id="standard-error"
          label="City"
          // defaultValue="City"
          placeholder='City'
          variant="standard"
        />

        <br/>
        <br/>

        <Button   size="large" style={{ color:'white', background: '#FF4301', }} onClick={alertHandeler}>Buy Order</Button>
       
      </div>
    </Box>
<br/>
<br/>
    {alertFlag && 
     

<Alert severity="success">
<AlertTitle>Success</AlertTitle>
 <strong>Thank you, your order has been purchased successfully</strong>
</Alert>
      
   }

    
    </Grid>
    </Grid>
        </div>
    
    )
}


