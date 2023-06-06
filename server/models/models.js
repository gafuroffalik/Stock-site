const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const  User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'User'}
})

const  Stock = sequelize.define('stock', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    volume: {type: DataTypes.INTEGER}
})

const StockProduct = sequelize.define('stock_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    numUnits: {type: DataTypes.INTEGER, allowNull: false}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nameProduct: {type: DataTypes.STRING, unique: true, allowNull: false},
    priceUnits: {type: DataTypes.INTEGER, allowNull: false},
    size: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const LotProduct = sequelize.define('lot_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER}
})


const Lot = sequelize.define('lot', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, defaultValue: "SUPPLY"}
})

User.hasMany(Lot)
Lot.belongsTo(User)

Product.hasMany(Lot)
Lot.belongsTo(Product)

Product.hasMany(StockProduct)
StockProduct.belongsTo(Product)

Stock.hasMany(StockProduct)
StockProduct.belongsTo(Stock)

Lot.hasMany(LotProduct)
LotProduct.belongsTo(Lot)

Product.hasOne(LotProduct)
LotProduct.belongsTo(Product)

module.exports = {
    User,
    Stock,
    StockProduct,
    Product,
    Lot,
    LotProduct
}