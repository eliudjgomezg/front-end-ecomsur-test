//@ts-nocheck
import { useProductQuery } from 'customHooks/request/productsQuery'
import { useParams } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import webPay from 'assets/images/webpay-logo.png'
import CartCounter from 'commons/CartCounter'

interface ParamTypes {
  _id: string
}

const Detail: React.FC = () => {
  const param = useParams<ParamTypes>()
  const productQuery = useProductQuery(param._id)
  const hasStock = productQuery.data?.countInStock > 0

  return (
    <div className='product'>
      <img src={`http://localhost:5000/${productQuery?.data?.image}`} alt='image' />

      <div>
        <h1>
          {productQuery?.data?.brand} <span className='text-primary'>{productQuery.data?.name}</span>
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
          {hasStock && <CartCounter className='mt-0 mr-1' hasStock={hasStock} />}
          <button className={`primary-button px-1 ${!hasStock && 'button-disabled'}`} disabled={!hasStock}>
            <i className='fas fa-cart-plus fa-lg mr-05'></i>
            <span className='d-desktop p--md'>Agregar al carro</span>
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

export default Detail
