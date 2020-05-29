import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import { createApolloClient } from '../apollo/config'
import Global from '../components/Common/Global'
import Home from './home'

const client = createApolloClient()

const App = () => (
  <ApolloProvider client={client}>
    <Global />
    <Home />
  </ApolloProvider>
)

export default App
