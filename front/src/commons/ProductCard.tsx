import { IProduct } from 'models/IProduct'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'
import routes from 'constants/routes'
import setProductCartList from 'store/cartStore/action'
import { connect } from 'react-redux'
import { ISetProductListReturn } from 'models/IProductListAction'
import { selectProductCartList } from 'store/cartStore/reducer'
import { IReduxState } from 'models/IReduxStore'
import useLocalStorage from 'customHooks/useLocalStorage'

type TProductCard = {
  setProductCartList?: (payload: IProduct[]) => ISetProductListReturn
  productCartList?: IProduct[]
  product: IProduct
}

const ProductCard: React.FC<TProductCard> = (props) => {
  const storage = useLocalStorage('cartList', [])
  const hasStock = props.product.countInStock > 0

  const setProduct = (product: IProduct) => {
    if (props.productCartList) {
      if (isProductSelected()) {
        const newCartList = props.productCartList.filter((iter: IProduct) => iter._id !== product._id)
        props.setProductCartList && props.setProductCartList(newCartList)
        storage.setValue(newCartList)
        return
      }
      const productEdited = { ...product, countSelected: 1, cartPrice: product.price }
      const newCartList = [...props.productCartList, productEdited]
      props.setProductCartList && props.setProductCartList(newCartList)
      storage.setValue(newCartList)
    }
  }

  const isProductSelected = () => {
    if (props.productCartList) {
      return props.productCartList.some((product: IProduct) => product._id === props.product._id)
    }
  }

  return (
    <div className='card'>
      <Link to={`${routes.products}/${props.product._id}`}>
        <h2>{props.product.brand}</h2>
        <h3>{props.product.name}</h3>
        <p className='card__desription-height'>{props.product.description}</p>
        <div>
          <p>
            <strong>ID </strong>
            {props.product._id}
          </p>
          <span className={`${!hasStock && 'text-red'}`}>
            {hasStock ? `${props.product.countInStock} unid.` : 'Stock agotado'}
          </span>
        </div>

        <StarRatings rating={props.product.rating} starRatedColor='yellow' numberOfStars={5} name='rating' starDimension='20px' />

        <img src={`http://localhost:5000/${props.product.image}`} alt='imagen' />

        <h1>
          <span className='p--md mr-05'>Precio</span>$ {props.product.price}
        </h1>
      </Link>
      <button
        className={`primary-button px-1 mt-1 mx-auto ${!hasStock && 'button-disabled'}`}
        onClick={() => setProduct(props.product)}
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

      <p className='text-gray mt-1'>
        <i className='fas fa-heart text-red'></i> {props.product.numReviews}
      </p>
    </div>
  )
}

const mapStateToProps = (state: IReduxState) => {
  return {
    productCartList: selectProductCartList(state),
  }
}

export default connect(mapStateToProps, { setProductCartList })(ProductCard)
