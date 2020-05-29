import { useLazyQuery } from 'react-apollo'
import { GET_PRODUCTS } from './types'

export const useGetProducts = () => {
  const [ getProducts, { data: { getProducts: getProductsData = [] } = {} } ] = useLazyQuery(GET_PRODUCTS)

  return [ getProductsData, getProducts]
}
