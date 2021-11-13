import { createStore, combineReducers } from 'redux'
import productListReducer from './productsStore/reducer'
import cartListReducer from './cartStore/reducer'

const reducers = combineReducers({ productListReducer, cartListReducer })
//@ts-ignore
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
