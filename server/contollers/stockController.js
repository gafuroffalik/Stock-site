const {Stock, Lot, Product} = require("../models/models");
const ApiError = require('../error/ApiError')


class StockController{
    async create(req, res, next){
        try{
            const {volume} = req.body
            const stock = await Lot.create({volume})
            return res.json({stock})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getVolumeStock(req, res, next){
        try{
            const {id} = req.params
            const stock = await Product.findOne({
                where: {id}
            })
            return res.json(stock)
        }catch (e) {
            next(ApiError.badRequest(e))
        }
    }

}

module.exports = new StockController()