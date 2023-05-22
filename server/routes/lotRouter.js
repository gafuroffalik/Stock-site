const Router = require('express')
const router = new Router()
const lotController = require('../contollers/lotController')

router.post('/', lotController.create)
router.get('/', lotController.getAll)

module.exports = router