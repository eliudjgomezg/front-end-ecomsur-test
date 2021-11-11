import { createStore, combineReducers } from 'redux'
import productListReducer from './productsStore/reducer'

const reducers = combineReducers({ productListReducer })
//@ts-ignore
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
