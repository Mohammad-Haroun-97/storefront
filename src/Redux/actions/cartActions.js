'use strict'
const uuid = require("uuid").v4;

export const cartActions=(payload)=>{
    console.log('payloadpayload',payload);
   

    return {
        type : 'addToCart',
        payload: payload,
        
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

export const checkout=()=>{

    return {
        type:'checkout'
    }
}