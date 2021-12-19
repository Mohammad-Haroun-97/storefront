

import productReducer from './productReducer'
import CataReducer from './catagoryReducer'
import { combineReducers } from 'redux'

const allReducers=combineReducers({
    productReducer: productReducer,
    CataReducer: CataReducer

})


export default allReducers