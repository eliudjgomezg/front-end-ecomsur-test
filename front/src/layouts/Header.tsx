import routes from 'constants/routes'
import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <div className='header container'>
        <Link to={routes.home}>
          <h1>eFactory</h1>
        </Link>

        <div className='header__actions-desktop'>
          <div className='header__actions-items'>
            <i className='fas fa-user text-gray'></i>
            <p className='text-gray'>Mi cuenta</p>
            <i className='fas fa-chevron-down text-gray'></i>
          </div>

          <h2>|</h2>

          <div className='header__actions-items'>
            <i className='fas fa-shopping-cart text-primary'></i>
            <p className='text-primary'>Mi carro</p>
          </div>
        </div>
        <i className='fas fa-bars fa-lg header__actions-mobile'></i>
      </div>
    </div>
  )
}

export default Header
