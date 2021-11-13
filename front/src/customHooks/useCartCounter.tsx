import { IProduct } from 'models/IProduct'
import { ISetProductListReturn } from 'models/IProductListAction'
import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useCartCounter = (
  product: IProduct,
  productCartList: IProduct[] | undefined,
  setProductCartList: ((payload: IProduct[]) => ISetProductListReturn) | undefined
) => {
  const storage = useLocalStorage('cartList', [])
  const [countData, setCount] = useState({ count: 1, type: 'add' })
  const isSelectedAllStock = product.countInStock === countData.count

  const handleCounter = (type: string) => {
    const dispatch: { [key: string]: () => void } = {
      add: () => {
        setCount((prev) =>
          prev.count === product.countInStock ? { ...prev, count: prev.count, type } : { ...prev, count: prev.count + 1, type }
        )
      },
      less: () =>
        setCount((prev) => (prev.count > 1 ? { ...prev, count: prev.count - 1, type } : { ...prev, count: prev.count, type })),
    }
    dispatch[type]()
  }

  useEffect(() => {
    if (productCartList && setProductCartList && countData.count > 1 && countData.count !== product.countInStock) {
      const newCartList: IProduct[] = productCartList.map((iter: IProduct) => {
        if (iter._id === product._id) {
          const newPrice =
            countData.type === 'add'
              ? { ...iter, price: iter.price + iter.cartPrice }
              : { ...iter, price: iter.price - iter.cartPrice }
          return newPrice
        }
        return iter
      })
      setProductCartList(newCartList)
      storage.setValue(newCartList)
    }
  }, [countData.count])

  const renderCount = () => {
    return (
      <div className={`count-items`}>
        <h3>{countData.count}</h3>
        <div>
          <i
            className='fas fa-chevron-circle-down text-primary mr-05 cursor-pointer fa-lg'
            onClick={() => handleCounter('less')}
          ></i>
          <i
            className={`fas fa-chevron-circle-up text-primary cursor-pointer fa-lg ${isSelectedAllStock && 'text-gray'}`}
            onClick={() => handleCounter('add')}
          ></i>
        </div>
      </div>
    )
  }

  return { countData, renderCount }
}

export default useCartCounter
