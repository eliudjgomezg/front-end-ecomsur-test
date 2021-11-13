import ProductCard from 'commons/ProductCard'
import { IProduct } from 'models/IProduct'

type TProductList = {
  productList: IProduct[]
}

const ProductList: React.FC<TProductList> = (props) => {
  if (props.productList.length === 0) {
    return (
      <div className='no-products total-center'>
        <h1 className='text-primary'>No hay resultados</h1>
      </div>
    )
  }
  return (
    <div className='product-list'>
      {props.productList.length > 0 &&
        props.productList.map((product: IProduct) => {
          return <ProductCard key={product._id} product={product} />
        })}
    </div>
  )
}

export default ProductList
