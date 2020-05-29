import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'

export function createApolloClient() {
  const cache = new InMemoryCache({
    freezeResults: true
  })

  const link = new HttpLink({
    uri: '/graphql'
  })

  const client = new ApolloClient({
    cache,
    link
    // uri: ''
  })

  return client
}
