// import express from 'express'
// import next from 'next'
import { ApolloServer } from 'apollo-server'

import typeDefs from './graphql/types'
import resolvers from './graphql/resolvers'
// import api from './api'

// const app = next({ dev: process.env.NODE_ENV !== 'production' })
// const handle = app.getRequestHandler()
// const port = process.env.PORT || 3000

// app.prepare().then(() => {
//   const server = express()
//   server.use('/api', api)
//   server.all('*', (req, res) => handle(req, res))

//   server.listen(port, (err) => {
//     if (err) throw err
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })

const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
