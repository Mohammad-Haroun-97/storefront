import React from "react";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/actions/cartActions";
import { decrementStock } from "../Redux/actions/cataActions.js/cataAction";
import { useEffect } from "react";
import { itemDetails } from "../Redux/actions/itemDetails";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch();


  const ProducerState = useSelector((state) => state.productReducer);



  console.log("globalProducerStateState", ProducerState);
 

  return (
    <div>
      <Grid
        justifyContent="space-around"
        alignItems="center"
        container
        wrap="nowrap"
      >
        {ProducerState.map((item, index) => {
          return item.inventoryCount ? (
            <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              {item ? (
                <img
                  style={{
                    width: 250,
                    height: 320,
                    objectFit: "cover",
                    border: "solid",
                  }}
                  alt={item.name}
                  src={item.image}
                />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
              {item ? (
                <Box sx={{ pr: 2 }}>
                  
                  <Typography gutterBottom variant="body2">
                    <h3 style={{ hight: "60px", width: "200px" }}>
                      {" "}
                      {item.name}
                    </h3>
                  </Typography>
                  <Button
                    onClick={() => {
                      dispatch(cartActions(item));
                      dispatch(decrementStock(item));
                    }}
                    style={{ background: "#FF4301", color: "white" }}
                  >
                    Buy
                  </Button>{' '}
                  
                 
                 <Link style={{textDecoration: "none"}} to={`/Details/${item.id}`}><Button  style={{ background: "#FF4301", color: "white" }} onClick={()=>dispatch(itemDetails(item))}>Details</Button>  </Link>
                  <Typography
                    style={{
                      color: "black",
                      width: 250,
                      height: 80,
                      objectFit: "cover",
                      // border: "solid",
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "30px",
                      paddingBottom: "30px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                    variant="caption"
                    color="text.secondary"
                  >
                    {item.description}
                   
                   
                    
                  </Typography>
                  
                  <Typography variant="caption" color="text.secondary">
                  <h3>Price : {`Price :${item.price} JD`}</h3> 
                    
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                  <h3> Stock : {` ${item.inventoryCount}`}</h3>
                   
                  </Typography>
               
                 
                 
                 
                
                
                </Box>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
            </Box>
          ) : (
            "The Item is Not available"
          );
        })}
      </Grid>
    </div>
  );
}
