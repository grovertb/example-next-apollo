import { ApolloError } from 'apollo-boost'

import products from '../../../datalayer/actuors/products'

const Query = {
  getProducts: (_, { search }) =>
    products
      .getProducts(search)
      .catch(err => {
        throw ApolloError(err)
      })
}

export default { Query }
