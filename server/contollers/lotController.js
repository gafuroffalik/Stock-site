const {Lot, Product, User, LotProduct} = require("../models/models");
const ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");
const sequelize = require ('../db')

class LotController {
    async create(req, res, next) {
        const transaction = await sequelize.transaction()
        try {

            const {nameProduct, numProduct} = req.body
            const product = await Product.findOne({
                    where: {nameProduct}
                },
                {transaction: transaction}
            )
            const productId = product.id

            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                res.status(401).json({message: "Не авторизован"})
            }
            const login = jwt.verify(token, process.env.SECRET_KEY).login

            const user_id = await User.findOne({where: {login}}, {transaction: transaction})
            const userId = user_id.id

            const lot_id = await Lot.findOne({where: {userId}}, {transaction: transaction})
            const lotId = lot_id.id

            const count = numProduct
            const lot_product = await LotProduct.create({count, lotId, productId}, {transaction: transaction})
            await transaction.commit()
            return res.json(lot_product)

        } catch (e) {
            next(ApiError.badRequest(e.message))
            await transaction.rollback()
        }
    }

    async getAll(req, res, next) {
        try {
            // const token = req.headers.authorization.split(" ")[1]
            // if (!token) {
            //     res.status(401).json({message: "Не авторизован"})
            // }
            // const login = jwt.verify(token, process.env.SECRET_KEY).login
            //
            // const user_id = await User.findOne({where: {login}})
            // const userId = user_id.id
            //
            // const lot_id = await Lot.findOne({where: {userId}})
            // const lotId = lot_id.id
            //
            // //const lot_product_id = await LotProduct.findOne({where: {lotId}})
            // console.log(lotId)
            // return res.json(lot_id)

            // let {id, limit, page} = req.query
            // limit = parseInt(limit) || 9
            // page = page || 1
            // let offset = page * limit - limit
            // let lots;
            // if(!id){
            //     lots = await Lot.findAndCountAll({limit, offset})
            // }
            // if(id){
            //     lots = await Lot.findAndCountAll({where: {id, limit, offset}})
            // }
            //
            // return res.json(lots)

            const token = req.headers.authorization.split(' ')[1]
            if(!token) res.status(401).json({message:"Не авторизован"})
            const login = jwt.verify(token,process.env.SECRET_KEY).login

            const userID = await User.findOne({where:{login}})
            const userId = userID.id

            const lots = await Lot.findAll({where:{userId}})


            return res.json(lots)

        } catch (e) {
            next(ApiError.badRequest(e.message + " сработал try catch"))
        }
    }

    async getOne(req, res, next) {
        try{
            // const token = req.headers.authorization.split(' ')[1]
            // if(!token) res.status(401).json({message:"Не авторизован"})
            // const login = jwt.verify(token,process.env.SECRET_KEY).login
            //
            // const userID = await User.findOne({where: {login}})
            // const userId = userID
            //
            // const lots = await Lot.findAll({where: {userId}})
            //
            // return res.json(lots)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new LotController()