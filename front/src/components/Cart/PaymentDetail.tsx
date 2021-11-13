import { useEffect, useState } from 'react'
import routes from 'constants/routes'
import { IProduct } from 'models/IProduct'
import { IReduxState } from 'models/IReduxStore'
import { Link } from 'react-router-dom'
import { selectProductCartList } from 'store/cartStore/reducer'
import { connect } from 'react-redux'

import CartCard from 'commons/CartCard'
import { formatNum } from 'utils/helpers'

type TPaymentDetail = {
  productCartList?: IProduct[]
}

const PaymentDetail: React.FC<TPaymentDetail> = (props) => {
  const [totalPayment, setTotalPayment] = useState(0)

  useEffect(() => {
    if (props.productCartList) {
      const total = props.productCartList?.reduce((acum, iter) => (acum = acum + iter.price), 0)
      setTotalPayment(total)
    }
  }, [props.productCartList])

  return (
    <div className='cart'>
      <div className='cart__product-data'>
        <h1 className='text-primary'>
          <span className='text-primary'>Carro</span> | {props.productCartList?.length} productos
        </h1>
        <hr />

        {props.productCartList?.map((product: IProduct) => {
          return <CartCard key={product._id} product={product} />
        })}
      </div>

      <div className='cart__product-price'>
        <h1 className='text-primary'>Total</h1>
        <hr />

        <div>
          <h3>Total a pagar</h3>
          <h2>{formatNum(totalPayment)}</h2>
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

const mapStateToProps = (state: IReduxState) => {
  return {
    productCartList: selectProductCartList(state),
  }
}

export default connect(mapStateToProps)(PaymentDetail)
