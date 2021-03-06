'use strict'


const cartReducer=(state={
    addingItems:[],
    cartFlag:false,
    Total:0
},action)=>{
    let {type, payload}=action

switch (type) {
    case 'addToCart':
        
        return {...state,
            Total:parseInt( state.Total) + parseInt( payload.price),
            addingItems:[...state.addingItems,payload]

        }
        
        break;
        case 'openCart':
            return{...state,
                cartFlag:!state.cartFlag
            }
            
            break;
            case 'closeCart':
                return{...state,
                    cartFlag:false
                }
                
                break;
                case 'deleteItem':

                    return{...state,
                        Total:state.Total-parseInt( payload.price),
            addingItems:state.addingItems.filter(item=> item.id !==payload.id)
                    }
                    
                    break;

                    case 'checkout':

                    return {
                        addingItems:[],
                        cartFlag:true,
                        Total:0


                    }


    default:
        return state
        break;
}


}

export default cartReducer


