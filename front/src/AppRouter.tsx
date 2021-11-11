import { Routes, Route } from 'react-router-dom'
import routes from 'constants/routes'

import WebLayout from 'layouts/WebLayout'
import Home from 'views/Home'
import ProductList from 'views/ProductList'
import ProductDetail from 'views/ProductDetail'
import Cart from 'views/Cart'

const AppRouter: React.FC = () => {
  return (
    <WebLayout>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={`${routes.products}/:id`} element={<ProductDetail />} />
        <Route path={routes.products} element={<ProductList />} />
      </Routes>
    </WebLayout>
  )
}

export default AppRouter
