'use strict'
const uuid = require("uuid").v4;

export const cartActions=(payload)=>{
    let id= uuid()

    return {
        type : 'addToCart',
        payload: payload,
        id:id
    }
}

 
export const closeCart=()=>{
    return {
        type : 'closeCart',
        
    }
}

export const openCart=()=>{
    return {
        type : 'openCart',
        
    }
}

export const deleteItem=(payload)=>{
   
    return{
        type :'deleteItem',
        payload : payload,
        
    }
}