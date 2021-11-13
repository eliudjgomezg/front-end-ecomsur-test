import { PropsWithChildren, useEffect } from 'react'
import { useProductsQuery } from 'customHooks/request/productsQuery'
import { IProduct } from 'models/IProduct'
import { ISetProductListReturn } from 'models/IProductListAction'
import { connect } from 'react-redux'
import setProductList from 'store/productsStore/action'
import setProductCartList from 'store/cartStore/action'
import useLocalStorage from 'customHooks/useLocalStorage'

import Breadcrumb from 'commons/Breadcrumb'
import Header from './Header'
import Footer from './Footer'

type AppRouter = {
  setProductList?: (payload: IProduct[]) => ISetProductListReturn
  setProductCartList?: (payload: IProduct[]) => ISetProductListReturn
}

const WebLayout: React.FC<AppRouter> = (props: PropsWithChildren<any>) => {
  const storage = useLocalStorage('cartList', [])
  const productsQuery = useProductsQuery()

  useEffect(() => {
    if (props.setProductCartList) {
      props.setProductCartList(storage.storedValue)
    }
  }, [])

  useEffect(() => {
    productsQuery.isSuccess && props.setProductList && props.setProductList(productsQuery.data)
  }, [productsQuery.isSuccess])

  return (
    <>
      <Header />
      <div className='container__spacing' />
      <div className='container'>
        <Breadcrumb />
        {props.children}
      </div>

      <Footer />
    </>
  )
}

export default connect(null, { setProductList, setProductCartList })(WebLayout)
