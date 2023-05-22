const Router = require('express')
const router = new Router()
const stockController = require('../contollers/stockController')

router.post('/', stockController.create)
router.get('/', stockController.getVolumeStock)

module.exports = router