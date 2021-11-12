import { IProduct } from 'models/IProduct'
import CartCounter from './CartCounter'

type TCartCard = {
  product: IProduct
}

const CartCard: React.FC<TCartCard> = (props) => {
  return (
    <>
      <div className='cart-card'>
        <div>
          <h2>{props.product.brand}</h2>
          <h3>{props.product.name}</h3>
          <p>{props.product.description}</p>

          <img src={`http://localhost:5000/${props.product.image}`} alt='image' />
        </div>
        <div>
          <h1>{props.product.price}</h1>
          <p>Precio en efectivo</p>
          <CartCounter className='mt-1' hasStock />
        </div>
      </div>
      <hr />
    </>
  )
}

export default CartCard
