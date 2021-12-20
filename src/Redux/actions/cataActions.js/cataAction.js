
export const Historical=()=>{

    return {
        type : 'Historical'
    }
    
}

export const Horror=()=>{

    return {
        type : 'Horror'
    }
    
}

export const Fantasy=()=>{

    return {
        type : 'Fantasy'
    }
    
}

export const Detective=()=>{

    return {
        type : 'Detective'
    }
    
}

export const decreaseStock=(payload)=>{

    return  {
        type:'decreaseStock',
        payload:payload

    }
}