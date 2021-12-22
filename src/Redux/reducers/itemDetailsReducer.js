

export default function itemDetailsReducer(state={},action) {
    
    let { type,payload} = action


    switch (type) {
        case 'itemDetails':

        return payload
            
            break;

          
    
        default: return state
            break;
    }
    

}