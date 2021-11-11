import ProductCard from 'commons/ProductCard'
import { IProduct } from 'models/IProduct'

type TProductList = {
  productList: IProduct[]
}

const ProductList: React.FC<TProductList> = (props) => {
  return (
    <div className='product-list'>
      {props.productList.map((product: IProduct) => {
        return <ProductCard key={product._id} product={product} />
      })}
    </div>
  )
}

export default ProductList
