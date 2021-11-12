import { useQuery } from 'react-query'
import endpoints from '../../constants/endpoints'
import { apiClient } from '../../utils/ApiClient'

export const useProductsQuery = () => {
  const productsQuery = useQuery(`all_${endpoints.products}`, apiClient.getProducts, {
    select: (data) => data,
  })
  return productsQuery
}

export const useProductQuery = (_id: string) => {
  const productQuery = useQuery(`one_${endpoints.products}${_id}`, () => apiClient.getProduct(_id))
  return productQuery
}
