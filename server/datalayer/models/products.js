export default (cnn, DataType) =>
  cnn.define('products', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false
    },
    photo: {
      type: DataType.STRING,
      validate: {
        isUrl: true
      }
    },
    price: {
      type: DataType.DECIMAL(5, 2)
    },
    stock: {
      type: DataType.INTEGER
    }
  })
