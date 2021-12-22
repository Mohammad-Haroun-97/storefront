import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
// import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { cartActions } from '../Redux/actions/cartActions';
import {closeCart,openCart} from '../Redux/actions/cartActions'
import { decrementStock } from '../Redux/actions/cataActions.js/cataAction';

export default function Details() {
     const dispatch = useDispatch()
    const itemDetailState= useSelector(state => state.itemDetailsReducer)
    console.log('itemDetailStateitemDetailState',itemDetailState);

   
    return (
        <div>
            <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
                marginTop="5vh"
                marginBottom="12vh"
            >
            

<Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={itemDetailState.image}
        alt="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {itemDetailState.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {itemDetailState.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <h3> Price :  {itemDetailState.price} JD</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h3> Stock :   {itemDetailState.inventoryCount}</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=> {dispatch(cartActions(itemDetailState));dispatch(decrementStock(itemDetailState))}}  style={{ background: "#FF4301", color: "white" }} size="small">Buy</Button>
        
      </CardActions>
    </Card>
    </Grid>
           

        </div>
    )
}
