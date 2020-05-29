import { Op } from 'sequelize'
import { ProductsModel } from '../connections/mysql'

const getById = async (id) => {
  const [ product ] = await ProductsModel.findOne({ limit: 1, where: { id }, raw: false })

  return product
}
const getProducts = async search =>
  search ?
    await ProductsModel.findAll({
      attributes: ['id', 'name', 'photo', 'price', 'stock'],
      where     : { name: { [Op.substring]: search.toLowerCase() } }
    }) :
    []

export default {
  getById,
  getProducts
}
