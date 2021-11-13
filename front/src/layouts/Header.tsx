import { Link } from 'react-router-dom'
import routes from 'constants/routes'
import useAnimation from 'customHooks/useAnimation'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectProductCartList } from 'store/cartStore/reducer'
import { IProduct } from 'models/IProduct'
import { IReduxState } from 'models/IReduxStore'

import MobileModal from 'commons/MobileModal'

type THeader = {
  productCartList?: IProduct[]
}

const Header: React.FC<THeader> = (props) => {
  const navigate = useNavigate()
  const { isComponentOpen, animation, toggleComponent, toggleAnimation } = useAnimation()

  const countCartItems = props.productCartList ? props.productCartList?.length : 0

  const handleNavigate = (path: string) => {
    toggleComponent()
    navigate(path)
  }
  return (
    <>
      <div className='header-container'>
        <div className='header container'>
          <Link to={routes.home}>
            <h1 className='cursor-pointer'>eFactory</h1>
          </Link>

          <div className='header__actions-desktop'>
            <div className='actions-items'>
              <i className='fas fa-user text-gray'></i>
              <p className='text-gray'>Mi cuenta</p>
              <i className='fas fa-chevron-down text-gray'></i>
            </div>

            <h2>|</h2>

            <Link to={routes.cart}>
              <div className='actions-items'>
                <i className='fas fa-shopping-cart text-primary'></i>
                <p className='text-primary relative'>
                  {countCartItems > 0 && <span className='total-center p--xs cart-badge'>{countCartItems}</span>} Mi carro
                </p>
              </div>
            </Link>
          </div>
          <i className='fas fa-bars fa-lg header__actions-mobile' onClick={toggleComponent}></i>
        </div>
      </div>

      <MobileModal
        isOpen={isComponentOpen}
        animation={animation}
        toggleAnimation={toggleAnimation}
        toggleComponent={toggleComponent}
      >
        <div className='mobile_menu'>
          <div>
            <h1 onClick={() => handleNavigate(routes.home)}>eFactory</h1>

            <i className='fas fa-times-circle fa-lg text-gray' onClick={toggleComponent}></i>
          </div>

          <div className='actions-items'>
            <i className='fas fa-user text-gray'></i>
            <p className='text-gray'>Mi cuenta</p>
          </div>

          <div className='actions-items' onClick={() => handleNavigate(routes.cart)}>
            <i className='fas fa-shopping-cart text-primary'></i>
            <p className='text-primary relative w-full'>
              {countCartItems > 0 && <span className='total-center p--xs cart-badge'>{countCartItems}</span>}
              Mi carro
            </p>
          </div>
        </div>
      </MobileModal>
    </>
  )
}

const mapStateToProps = (state: IReduxState) => {
  return {
    productCartList: selectProductCartList(state),
  }
}

export default connect(mapStateToProps)(Header)
