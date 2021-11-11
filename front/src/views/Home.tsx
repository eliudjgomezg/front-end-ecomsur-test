import { useProductQuery, useProductsQuery } from 'customHooks/request/productsQuery'
import { IProduct } from 'models/IProduct'
import { selectProductList } from 'store/productsStore/reducer'
import { connect, Matching } from 'react-redux'
import { IReduxState } from 'models/IReduxStore'
import { ISetProductListReturn } from 'models/IProductListAction'

type THome = {
  productList?: IProduct[]
}

const Home: React.FC<THome> = (props) => {
  console.log(props.productList)
  return (
    <div>
      <img src={`http://localhost:5000/images/airpods.jpg`} alt='' />
    </div>
  )
}

const mapStateToProps = (state: IReduxState) => {
  return {
    productList: selectProductList(state),
  }
}

export default connect(mapStateToProps)(Home)
