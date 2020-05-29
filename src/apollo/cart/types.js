import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
  query getProducts($search: String){
    getProducts(search: $search){
      id
      name
      price
      photo
      stock
    }
  }
`
