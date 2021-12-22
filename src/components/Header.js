import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {closeCart,openCart} from '../Redux/actions/cartActions'
// import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));




function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}



export default function Header() {
    const dispatch=useDispatch()
    const cartState=useSelector((state)=> state.cartReducer)
    console.log('cartStateFlag',cartState.cartFlag);


  
    return (
        <div>
            {/* <h1 </h1> */}
            <Box  sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#2F2519' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <h1 style={{fontFamily: 'Mea Culpa'}}>Alarabi Library</h1> 
          </Typography>
        


          <IconButton  onClick={()=>dispatch( closeCart())}  size="sm" style={{  background: '#FF4301', marginRight:"60px"}} aria-label="add to shopping cart" aria-label="cart">
 
  <Link to='/storefront'>  <HomeIcon  /></Link>
  
</IconButton>




<Link to='/Simplecart'>
          <IconButton  onClick={()=>dispatch(openCart()) }  size="large" style={{  background: '#FF4301', marginRight:"50px"}} aria-label="add to shopping cart" aria-label="cart">
  <StyledBadge badgeContent={cartState.addingItems.length} color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>
</Link>

         
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}


