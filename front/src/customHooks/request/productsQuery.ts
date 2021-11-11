import { useQuery, useMutation } from 'react-query'
import endpoints from '../../constants/endpoints'
import { apiClient } from '../../utils/ApiClient'

export const useProductsQuery = () => {
  const exampleQuery = useQuery(`all_${endpoints.products}`, apiClient.getProducts, {
    select: (data) => data,
  })
  return exampleQuery
}

export const useProductQuery = (_id: string) => {
  const planQuery = useQuery(`one_${endpoints.products}${_id}`, () => apiClient.getProduct(_id))
  return planQuery
}
