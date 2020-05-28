import Sequelize from 'sequelize'

import Products from '../models/products'

const cnn = new Sequelize(process.env.DB_CONNECTION, {
  dialect: 'mysql'
})

cnn
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

export const ProductsModel = Products(cnn, Sequelize)
