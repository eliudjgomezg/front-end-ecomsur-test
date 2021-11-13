//@ts-nocheck
import { useState, useEffect } from 'react'
import { IProduct } from 'models/IProduct'

type TFilters = {
  selectedBrand: string[]
  productListQuery: IProduct[] | undefined
  orderBy: string
  handleBrandFIlter: (e: string) => void
  handleOrderBy: (e: string) => void
  removeAllFilters: () => void
}

const orderByFilters = [
  { value: 'all', title: 'Todos' },
  { value: 'lower_price', title: 'Menor precio' },
  { value: 'higger_price', title: 'Mayor precio' },
  { value: 'raiting', title: 'Mayor rating' },
  { value: 'likes', title: 'Mas  likes' },
]

const Filters: React.FC<TFilters> = (props) => {
  const [brandList, setBrandList] = useState<string[]>([])

  useEffect(() => {
    if (props.productListQuery?.length) {
      const brands = props.productListQuery
        .map((iter) => iter.brand)
        .reduce((acc, item) => {
          if (!acc.includes(item)) {
            acc.push(item)
          }
          return acc
        }, [])
      setBrandList(brands)
    }
  }, [props.productListQuery])

  return (
    <div className='filters'>
      <div>
        <h2>Filtros</h2>
        <p onClick={props.removeAllFilters}>
          <u>Borrar filtros</u>
        </p>
      </div>

      <h3 className='mt-1'>Por marca</h3>

      {brandList.map((brand: string) => {
        const isExist = props.selectedBrand.some((iter: string) => iter === brand)
        return (
          <p key={brand} className={`${isExist && 'bg-primary text-white'}`} onClick={() => props.handleBrandFIlter(brand)}>
            {brand}
          </p>
        )
      })}

      <h3 className='mt-1'>Ordenar por</h3>
      {orderByFilters.map((order: string) => (
        <p
          key={order.title}
          className={`${props.orderBy === order.value && 'bg-primary text-white'}`}
          onClick={() => props.handleOrderBy(order.value)}
        >
          {order.title}
        </p>
      ))}
    </div>
  )
}

export default Filters
