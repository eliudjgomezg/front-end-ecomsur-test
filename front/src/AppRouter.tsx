import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from 'constants/routes'
import { connect } from 'react-redux'
import setProductList from 'store/productsStore/action'
import { ISetProductListReturn } from 'models/IProductListAction'
import { useProductsQuery } from 'customHooks/request/productsQuery'
import { IProduct } from 'models/IProduct'

import Home from 'views/Home'
import ProductList from 'views/ProductList'
import ProductDetail from 'views/ProductDetail'
import Cart from 'views/Cart'

type AppRouter = {
  setProductList?: (payload: IProduct[]) => ISetProductListReturn
}

const AppRouter: React.FC<AppRouter> = (props) => {
  const productsQuery = useProductsQuery()

  useEffect(() => {
    productsQuery.isSuccess && props.setProductList && props.setProductList(productsQuery.data)
  }, [productsQuery.isSuccess])

  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.product_list} element={<Cart />} />
      <Route path={`${routes.product_list}/:id`} element={<ProductDetail />} />
      <Route path={routes.product_list} element={<ProductList />} />
    </Routes>
  )
}

export default connect(null, { setProductList })(AppRouter)
