

import productReducer from './productReducer'
import CataReducer from './catagoryReducer'
import { combineReducers } from 'redux'
import cartReducer from './cartReducer'

const allReducers=combineReducers({
    productReducer: productReducer,
    CataReducer: CataReducer,
    cartReducer:cartReducer

})


export default allReducers