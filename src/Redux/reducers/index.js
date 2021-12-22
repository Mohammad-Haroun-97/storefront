

import productReducer from './productReducer'
import CataReducer from './catagoryReducer'
import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import itemDetailsReducer from './itemDetailsReducer'

const allReducers=combineReducers({
    productReducer: productReducer,
    CataReducer: CataReducer,
    cartReducer:cartReducer,
    itemDetailsReducer:itemDetailsReducer

})


export default allReducers