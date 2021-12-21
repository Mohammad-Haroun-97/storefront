const faker =require('faker')



export default function productReducer(state=[],action) {
    
    let { type,payload} = action


    switch (type) {
        case 'GET':

        return payload
            
            break;

            case 'DECREMENT_STOCK':
            return state.map(item => {
                if (item.name === action.payload.name) {
                    item = action.payload;
                }
                return item;
            });
    
        default: return state
            break;
    }
    

}