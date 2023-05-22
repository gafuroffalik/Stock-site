const Router = require('express')
const router = new Router()
const productController = require('../contollers/productController')

router.post('/', productController.create)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)

module.exports = router