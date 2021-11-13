import { Routes, Route } from 'react-router-dom'
import routes from 'constants/routes'

import WebLayout from 'layouts/WebLayout'
import Home from 'views/Home'
import ProductList from 'views/ProductList'
import ProductDetail from 'views/ProductDetail'
import Cart from 'views/Cart'
import Error404 from 'layouts/Error404'

const AppRouter: React.FC = () => {
  return (
    <WebLayout>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={`${routes.products}/:_id`} element={<ProductDetail />} />
        <Route path={routes.products} element={<ProductList />} />

        <Route path={routes.error404} element={<Error404 />} />
      </Routes>
    </WebLayout>
  )
}

export default AppRouter
