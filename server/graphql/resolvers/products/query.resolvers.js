import products from '../../../datalayer/actuors/products'

const Query = {
  getProducts: (_, { name }) => products.getProducts(name)
}

export default { Query }
