import { ISetProductListReturn } from 'models/IProductListAction'
import { IReduxState } from 'models/IReduxStore'

const initialState = {
  productList: [],
}

export default (state = initialState, action: ISetProductListReturn) => {
  if (action.type === 'SET_PRODUCTS') {
    return {
      ...state,
      productList: action.payload,
    }
  }
  return state
}

export const selectProductList = (state: IReduxState) => state.productListReducer.productList
