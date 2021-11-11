import { IProduct } from 'models/IProduct'
import { ISetProductListReturn } from 'models/IProductListAction'

const setProductList = (payload: IProduct[]): ISetProductListReturn => {
  return {
    type: 'SET_PRODUCTS',
    payload,
  }
}

export default setProductList
