import { ISetProductListReturn } from 'models/IProductListAction'
import { IReduxState } from 'models/IReduxStore'

const initialState = {
  productCartList: [],
}

export default (state = initialState, action: ISetProductListReturn) => {
  if (action.type === 'SET_CART_PRODUCTS') {
    return {
      ...state,
      productCartList: action?.payload,
    }
  }
  return state
}

export const selectProductCartList = (state: IReduxState) => state.cartListReducer.productCartList
