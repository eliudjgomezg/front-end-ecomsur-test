import { useEffect, useState } from 'react'
import { IProduct } from 'models/IProduct'
import { selectProductList } from 'store/productsStore/reducer'
import { connect } from 'react-redux'
import { IReduxState } from 'models/IReduxStore'
import useFilterByWord from 'customHooks/useFilterByWord'

const Home: React.FC = (props) => {
  return <div>home</div>
}

const mapStateToProps = (state: IReduxState) => {
  return {
    productList: selectProductList(state),
  }
}

export default connect(mapStateToProps)(Home)
