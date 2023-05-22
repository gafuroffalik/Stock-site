const Router = require('express')
const router = new Router()
const lotRouter = require('./lotRouter')
const productRouter = require('./productRouter')
const stockRouter = require('./stockRouter')
const userRouter = require('./userRouter')

router.use('/lot', lotRouter)
router.use('/product', productRouter)
router.use('/stock', stockRouter)
router.use('/user', userRouter)

module.exports = router