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
  const [selectedBrand, setSelectedBrand] = useState<string[]>([])
  const [orderBy, setOrderBy] = useState<string>('all')

  const handleBrandFIlter = (brand: string) => {
    const isExist = selectedBrand.some((iter: string) => iter === brand)
    if (isExist) {
      const removeBrand = selectedBrand.filter((iter: string) => iter !== brand)
      setSelectedBrand(removeBrand)
    } else {
      setSelectedBrand([...selectedBrand, brand])
    }
  }

  const handleOrderBy = (order: string) => {
    const dispatch: { [key: string]: () => void } = {
      all: () => setProductList(productList.sort((a, b) => a.price - b.price)),
      lower_price: () => setProductList(productList.sort((a, b) => a.price - b.price)),
      higger_price: () => setProductList(productList.sort((a, b) => b.price - a.price)),
      raiting: () => setProductList(productList.sort((a, b) => b.rating - a.rating)),
      likes: () => setProductList(productList.sort((a, b) => b.numReviews - a.numReviews)),
    }
    dispatch[order]()
    setOrderBy(order)
  }

  const removeAllFilters = () => {
    setSelectedBrand([])
    setOrderBy('all')
    filter.setWord('')
  }

  useEffect(() => {
    if (props.productList?.length) {
      setProductList(props.productList)
    }
  }, [props.productList])

  useEffect(() => {
    if (props.productList?.length) {
      if (filter.word.length) {
        const listFiltered = props?.productList.filter((product: IProduct) => {
          const parsedFilterWord = filter.word.toLocaleLowerCase()
          const isBrand = product.brand.toLocaleLowerCase().includes(parsedFilterWord)
          const isName = product.name.toLocaleLowerCase().includes(parsedFilterWord)
          return isBrand || isName
        })
        setProductList(listFiltered)
      } else {
        setProductList(props?.productList)
      }
    }
  }, [filter.word])

  useEffect(() => {
    if (props.productList?.length) {
      if (selectedBrand.length) {
        const listFiltered = props?.productList.filter((product: IProduct) => {
          return selectedBrand.some((iter: string) => iter === product.brand)
        })
        setProductList(listFiltered)
      } else {
        setProductList(props?.productList)
      }
    }
  }, [selectedBrand])

  const defaultProps = {
    productList: productList,
    productListQuery: props?.productList,
    selectedBrand: selectedBrand,
    orderBy: orderBy,
    handleBrandFIlter: handleBrandFIlter,
    handleOrderBy: handleOrderBy,
    removeAllFilters: removeAllFilters,
  }

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
          <Filters {...defaultProps} />
        </div>
        <div className=''>
          <ProductList {...defaultProps} />
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
          <Filters {...defaultProps} />
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
