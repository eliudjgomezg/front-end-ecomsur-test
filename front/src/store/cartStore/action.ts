import { IProduct } from 'models/IProduct'
import { ISetProductListReturn } from 'models/IProductListAction'

const setProductCartList = (payload: IProduct[]): ISetProductListReturn => {
  return {
    type: 'SET_CART_PRODUCTS',
    payload,
  }
}

export default setProductCartList
