import { Link } from 'react-router-dom'
import routes from 'constants/routes'
import useAnimation from 'customHooks/useAnimation'

import MobileModal from 'commons/MobileModal'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const { isComponentOpen, animation, toggleComponent, toggleAnimation } = useAnimation()

  const handleNavigate = (path: string) => {
    toggleComponent()
    navigate(path)
  }
  return (
    <>
      <div className='header-container'>
        <div className='header container'>
          <h1 className='cursor-pointer' onClick={() => handleNavigate(routes.cart)}>
            eFactory
          </h1>

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
                  <span className='total-center p--xs cart-badge'>1</span> Mi carro
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
              <span className='total-center p--xs cart-badge'>1</span> Mi carro
            </p>
          </div>
        </div>
      </MobileModal>
    </>
  )
}

export default Header
