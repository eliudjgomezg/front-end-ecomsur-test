import { useEffect, useState } from 'react'
import { IProduct } from 'models/IProduct'
import { selectProductList } from 'store/productsStore/reducer'
import { connect } from 'react-redux'
import { IReduxState } from 'models/IReduxStore'
import useFilterByWord from 'customHooks/useFilterByWord'

import Filters from 'components/home/Filters'
import ProductList from 'components/home/ProductList'

type TProducts = {
  productList?: IProduct[]
}

const Products: React.FC<TProducts> = (props) => {
  const filter = useFilterByWord()
  const [productList, setProductList] = useState<IProduct[]>([])

  useEffect(() => {
    if (props.productList?.length) {
      setProductList(props.productList)
    }
  }, [props.productList])

  return (
    <>
      <div className='products-grid'>
        <div />
        <div>{filter.renderInput()}</div>
      </div>

      <div className='products-grid'>
        <div className='border-r-gray d-desktop'>
          <Filters />
        </div>
        <div className=''>
          <ProductList productList={productList} />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state: IReduxState) => {
  return {
    productList: selectProductList(state),
  }
}

export default connect(mapStateToProps)(Products)
