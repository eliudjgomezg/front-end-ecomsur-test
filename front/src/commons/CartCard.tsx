import { useEffect } from 'react'
import useCartCounter from 'customHooks/useCartCounter'
import { IProduct } from 'models/IProduct'
import { IReduxState } from 'models/IReduxStore'
import { selectProductCartList } from 'store/cartStore/reducer'
import setProductCartList from 'store/cartStore/action'
import { connect } from 'react-redux'
import { ISetProductListReturn } from 'models/IProductListAction'
import { formatNum } from 'utils/helpers'
import useLocalStorage from 'customHooks/useLocalStorage'

type TCartCard = {
  setProductCartList?: (payload: IProduct[]) => ISetProductListReturn
  productCartList?: IProduct[]
  product: IProduct
}

const CartCard: React.FC<TCartCard> = (props) => {
  const storage = useLocalStorage('cartList', [])
  const counter = useCartCounter(props.product, props.productCartList, props.setProductCartList)

  const removeProduct = () => {
    if (props.productCartList && props.setProductCartList) {
      const removedCart: IProduct[] = props.productCartList.filter((iter: IProduct) => iter._id !== props.product._id)
      props.setProductCartList(removedCart)
      storage.setValue(removedCart)
    }
  }

  return (
    <>
      <div className='cart-card'>
        <div className='cart-card__product-data'>
          <h2>{props.product.brand}</h2>
          <h3>{props.product.name}</h3>
          <p>{props.product.description}</p>

          <img src={`http://localhost:5000/${props.product.image}`} alt='image' />
        </div>
        <div className='cart-card__product-price'>
          <div>
            <h1>{formatNum(props.product.price)}</h1>
            <p>Precio en efectivo</p>
          </div>
        </div>
        <p className='cart-card__remove-filters' onClick={removeProduct}>
          <u>Eliminar producto</u>
        </p>
        <div className='cart-card__counters'>{counter.renderCount()}</div>
      </div>
    </>
  )
}

const mapStateToProps = (state: IReduxState) => {
  return {
    productCartList: selectProductCartList(state),
  }
}

export default connect(mapStateToProps, { setProductCartList })(CartCard)
