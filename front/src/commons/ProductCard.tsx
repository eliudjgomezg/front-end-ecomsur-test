import React from 'react'
import { IProduct } from 'models/IProduct'
import StarRatings from 'react-star-ratings'

type TProductCard = {
  product: IProduct
}

const ProductCard: React.FC<TProductCard> = (props) => {
  const hasStock = props.product.countInStock > 0

  return (
    <div className='card'>
      <div>
        <h2>{props.product.brand}</h2>
        <h3>{props.product.name}</h3>
        <p className='card__desription-height'>{props.product.description}</p>
        <div>
          <p>
            <strong>ID </strong>
            {props.product._id}
          </p>
          <span className={`${!hasStock && 'text-red'}`}>{hasStock ? props.product.countInStock : 'Stock agotado'}</span>
        </div>

        <StarRatings rating={props.product.rating} starRatedColor='yellow' numberOfStars={6} name='rating' starDimension='20px' />

        <img src={`http://localhost:5000/${props.product.image}`} alt='image' />

        <h1>
          <span className='p--md mr-05'>Precio</span>$ {props.product.price}
        </h1>
      </div>
      <button className={`primary-button px-1 mt-1 mx-auto ${!hasStock && 'button-disabled'}`} disabled={!hasStock}>
        <i className='fas fa-cart-plus fa-lg mr-05'></i>
        Agregar al carro
      </button>

      <p className='text-gray mt-1'>
        <i className='fas fa-heart text-red'></i> {props.product.numReviews}
      </p>
    </div>
  )
}

export default ProductCard
