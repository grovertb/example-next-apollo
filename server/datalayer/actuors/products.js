import { Op } from 'sequelize'
import { ProductsModel } from '../connections/mysql'

const getById = async (id) => {
  const [ product ] = await ProductsModel.findOne({ limit: 1, where: { id }, raw: false })

  return product
}

const getProducts = async (name) => {
  if(name)
    return await ProductsModel.findAll({ where: { name: { [Op.substring]: `%${name}` } } })

  return []
}

export default {
  getById,
  getProducts
}
