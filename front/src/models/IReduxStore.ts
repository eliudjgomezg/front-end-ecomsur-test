import { IProduct } from './IProduct'

export interface IReduxState {
  productListReducer: { productList: IProduct[] }
  cartListReducer: { productCartList: IProduct[] }
}
