//@ts-nocheck
import { useProductQuery } from 'customHooks/request/productsQuery'
import { useParams } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import webPay from 'assets/images/webpay-logo.png'
import setProductCartList from 'store/cartStore/action'
import { connect } from 'react-redux'
import { ISetProductListReturn } from 'models/IProductListAction'
import { selectProductCartList } from 'store/cartStore/reducer'
import { IReduxState } from 'models/IReduxStore'
import useLocalStorage from 'customHooks/useLocalStorage'

interface ParamTypes {
  _id: string
}

type TDetail = {
  setProductCartList?: (payload: IProduct[]) => ISetProductListReturn
  productCartList?: IProduct[]
}

const Detail: React.FC<TDetail> = (props) => {
  const storage = useLocalStorage('cartList', [])
  const param = useParams<ParamTypes>()
  const productQuery = useProductQuery(param._id)

  const hasStock = productQuery?.data?.countInStock > 0

  const setProduct = () => {
    if (props.productCartList && productQuery) {
      if (isProductSelected()) {
        const newCartList = props.productCartList.filter((iter: IProduct) => iter._id !== productQuery?.data?._id)
        props.setProductCartList && props.setProductCartList(newCartList)
        storage.setValue(newCartList)
        return
      }
      const productEdited = { ...productQuery?.data, countSelected: 1, cartPrice: productQuery?.data?.price }
      const newCartList = [...props.productCartList, productEdited]
      props.setProductCartList && props.setProductCartList(newCartList)
      storage.setValue(newCartList)
    }
  }

  const isProductSelected = () => {
    if (props.productCartList && productQuery) {
      return props.productCartList.some((product: IProduct) => product._id === productQuery?.data?._id)
    }
  }

  return (
    <div className='product'>
      <img src={`http://localhost:5000/${productQuery?.data?.image}`} alt='image' />

      <div>
        <h1>
          {productQuery?.data?.brand} <span className='text-primary'>{productQuery?.data?.name}</span>
        </h1>
        <h2>{productQuery?.data?.description}</h2>
        <div className='mt-1'>
          <p>
            <strong>ID </strong>
            {productQuery.data?._id}
          </p>
          <span className={`${hasStock ? 'text-primary' : 'text-red'}`}>
            {hasStock ? `Quedan ${productQuery.data?.countInStock} Unid.` : 'Stock agotado'}
          </span>
        </div>
        <StarRatings
          rating={productQuery.data?.rating}
          starRatedColor='yellow'
          numberOfStars={5}
          name='rating'
          starDimension='20px'
        />
        <hr />

        <h1>$ {productQuery.data?.price}</h1>
        <p>Precio en efectivo</p>

        <hr />

        <div className='mt-2 justify-end'>
          <button
            className={`primary-button px-1 ${!hasStock && 'button-disabled'}`}
            onClick={() => setProduct()}
            disabled={!hasStock}
          >
            {isProductSelected() ? (
              <>
                <i className='fas fa-trash-alt fa-md mr-05 text-red'></i>
                <span className='p--md'>Eliminar</span>
              </>
            ) : (
              <>
                <i className='fas fa-cart-plus fa-mmd mr-05'></i>
                <span className='p--md'>Agregar</span>
              </>
            )}
          </button>
        </div>

        <div className='product__delivery'>
          <div>
            <i className='fas fa-truck-moving fa-3x mr-05 text-gray' />
            <p>
              Despacho a <br />
              domicilio <br />
              <span className='text-secondary'>disponible</span>
            </p>
          </div>
          <div>
            <i className='fas fa-store-alt fa-3x mr-05 text-gray' />
            <p>
              Retiro en tienda <br />
              <span className='text-secondary'>disponible</span>
            </p>
          </div>
          <div>
            <i className='fas fa-dollar-sign fa-3x mr-05 text-gray justify-self-center' />
            <p>
              Cotización <br />
              <span className='text-secondary'>empresas</span>
            </p>
          </div>
        </div>

        <hr />

        <h3 className='mt-1'>Medios de pago disponible</h3>
        <img src={webPay} alt='webpay' />
      </div>
    </div>
  )
}

const mapStateToProps = (state: IReduxState) => {
  return {
    productCartList: selectProductCartList(state),
  }
}

export default connect(mapStateToProps, { setProductCartList })(Detail)
