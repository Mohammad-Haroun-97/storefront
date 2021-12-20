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
import { decreaseStock } from "../Redux/actions/cataActions.js/cataAction";
import { v4 as uuidv4 } from "uuid";

export default function Products() {
  const dispatch = useDispatch();
  const ProducerState = useSelector((state) => state.productReducer);

  console.log("globalState", ProducerState);
  return (
    <div>
      <Grid
        justifyContent="space-around"
        alignItems="center"
        container
        wrap="nowrap"
      >
        {ProducerState.map((item, index) => (
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
                src={item.img}
              />
            ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )}
            {item ? (
              <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                  <h3 style={{hight:"60px",width:'200px'}}> {item.name}</h3>
                </Typography>
                <Typography
                  style={{
                    color: "black",
                    width: 300,
                    height: 150,
                    objectFit: "cover",
                    border: "solid",
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
                <br />
                <Typography variant="caption" color="text.secondary">
                  {`Price :${item.price} JD`}
                  <br />
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {` Stock : ${item.InventoryCount}`}
                </Typography>
                <br />
                <Button
                  onClick={() => {
                    dispatch(cartActions(item));
                    dispatch(decreaseStock(item));
                  }}
                  style={{ background: "#FF4301", color: "white" }}
                >
                  Add To Cart
                </Button>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    </div>
  );
}
