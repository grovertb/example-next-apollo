import Sequelize from 'sequelize'

import Products from '../models/products'

export const sequelize = new Sequelize(process.env.JAWSDB_URL, {
  dialect: 'mysql'
})

const ProductsModel = Products(sequelize, Sequelize)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

export {
  ProductsModel
}
