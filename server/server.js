import express from 'express'
import next from 'next'
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './graphql/types'
import resolvers from './graphql/resolvers'

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express()
  const serverApollo = new ApolloServer({ typeDefs, resolvers })
  serverApollo.applyMiddleware({ app: server })

  server.all('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`🚀 Ready on http://localhost:${port}`)
  })
})
