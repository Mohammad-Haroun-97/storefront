const axios = require("axios");
const url = "https://alaraby-library.herokuapp.com";

export const get = (catagory) => (dispatch) => {
  return axios.get(`${url}/books`).then((results) => {
    console.log("resultsresultsresults", results);

    let filterArr = results.data.filter((item) => {
      return item.catagory === catagory && item.inventoryCount>0;
    });

    dispatch({
      type: "GET",
      payload: filterArr,
    });
  });
};


export const decrementStock = (item) => dispatch => {
    item.inventoryCount--;
    return axios.put(`${url}/books/${item.id}`, item).then(res => {
        dispatch({
            type: 'DECREMENT_STOCK',
            payload: res.data
        });
    });
}
