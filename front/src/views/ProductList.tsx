import { useEffect, useState } from 'react'
import { IProduct } from 'models/IProduct'
import { selectProductList } from 'store/productsStore/reducer'
import { connect } from 'react-redux'
import { IReduxState } from 'models/IReduxStore'
import useFilterByWord from 'customHooks/useFilterByWord'
import useAnimation from 'customHooks/useAnimation'

import Filters from 'components/ProductList/Filters'
import ProductList from 'components/ProductList/ProductList'
import MobileModal from 'commons/MobileModal'

type TProducts = {
  productList?: IProduct[]
}

const Products: React.FC<TProducts> = (props) => {
  const filter = useFilterByWord()
  const { isComponentOpen, animation, toggleComponent, toggleAnimation } = useAnimation()
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
        <button className='primary-button px-4 mx-auto mt-1 d-mobile' onClick={toggleComponent}>
          Filtros
        </button>
        <div className='border-r-gray d-desktop'>
          <Filters />
        </div>
        <div className=''>
          <ProductList productList={productList} />
        </div>
      </div>

      <MobileModal
        isOpen={isComponentOpen}
        animation={animation}
        toggleAnimation={toggleAnimation}
        toggleComponent={toggleComponent}
      >
        <div className='product-list__mobile-filter'>
          <div className='exit-icon'>
            <i className='fas fa-times-circle fa-lg text-gray block' onClick={toggleComponent}></i>
          </div>
          <Filters />
        </div>
      </MobileModal>
    </>
  )
}

const mapStateToProps = (state: IReduxState) => {
  return {
    productList: selectProductList(state),
  }
}

export default connect(mapStateToProps)(Products)
