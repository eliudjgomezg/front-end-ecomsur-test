import CartCard from 'commons/CartCard'
import routes from 'constants/routes'
import { Link } from 'react-router-dom'

const PaymentDetail: React.FC = () => {
  return (
    <div className='cart'>
      <div>
        <h1 className='text-primary'>
          <span className='text-primary'>Carro</span> | 2 productos
        </h1>
        <hr />

        <CartCard
          product={{
            _id: '1',
            name: 'Airpods Wireless Bluetooth Headphones',
            image: '/images/airpods.jpg',
            description:
              'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            brand: 'Apple',
            category: 'Electronics',
            price: 89.99,
            countInStock: 10,
            rating: 4.5,
            numReviews: 12,
          }}
        />
        <CartCard
          product={{
            _id: '1',
            name: 'Airpods Wireless Bluetooth Headphones',
            image: '/images/airpods.jpg',
            description:
              'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            brand: 'Apple',
            category: 'Electronics',
            price: 89.99,
            countInStock: 10,
            rating: 4.5,
            numReviews: 12,
          }}
        />
        <CartCard
          product={{
            _id: '1',
            name: 'Airpods Wireless Bluetooth Headphones',
            image: '/images/airpods.jpg',
            description:
              'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            brand: 'Apple',
            category: 'Electronics',
            price: 89.99,
            countInStock: 10,
            rating: 4.5,
            numReviews: 12,
          }}
        />
        <CartCard
          product={{
            _id: '1',
            name: 'Airpods Wireless Bluetooth Headphones',
            image: '/images/airpods.jpg',
            description:
              'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            brand: 'Apple',
            category: 'Electronics',
            price: 89.99,
            countInStock: 10,
            rating: 4.5,
            numReviews: 12,
          }}
        />
      </div>
      <div>
        <h1 className='text-primary'>Total</h1>
        <hr />

        <div>
          <h3>Total a pagar</h3>
          <h2>$ 3000.000</h2>
        </div>

        <p>
          <Link to={routes.products}>
            <u>Seguir comprando</u>
          </Link>
        </p>
        <button className={`primary-button mt-1 mx-auto`}>Pagar</button>
        <hr className='mt-1' />
      </div>
    </div>
  )
}

export default PaymentDetail
