const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path');

class ProductController{
    async create(req, res, next){
        try{
            const {nameProduct, priceUnits, size} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"

            const product = await Product.create({nameProduct, priceUnits, size, img: fileName})
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            return res.json({product})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){
        try{
            let {id, limit, page} = req.query
            limit = parseInt(limit) || 9
            page = page || 1
            let offset = page * limit - limit
            let products;
            if(!id){
                products = await Product.findAndCountAll({limit, offset})
            }
            if(id){
                products = await Product.findAndCountAll({where: {id}, limit, offset})
            }

            return res.json(products)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }

    }

    async getOne(req, res, next){
        try{
            const {id} = req.params
            const product = await Product.findOne({where: {id}})
            if (!product) {
                return next(ApiError.badRequest('nothing'))
            }
            return res.json(product)
        }catch (e) {
            next(ApiError.badRequest(e))
        }
    }
}

module.exports = new ProductController()