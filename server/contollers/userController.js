const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Lot} = require('../models/models')

const generateJwt = (id, login, role) => {
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController{
    async registration(req, res, next) {
        try{
            const {login, password, role} = req.body
            if (!login || !password) {
                return next(ApiError.badRequest('Некорректный email или пароль'))
            }
            const candidate = await User.findOne({where: {login}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким логином уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({login, password: hashPassword, role})
            const lot = await Lot.create({userId: user.id})
            const token = generateJwt(user.id, user.login, user.role)
            return res.json({token})
        }catch (e) {
            next(ApiError.badRequest(e))
        }

    }

    async login(req, res, next){
        const {login, password} = req.body
        const user = await User.findOne({where: {login}})
        if(!user){
            return next(ApiError.badRequest('Пользователь с таким логином не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.badRequest('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({token})
    }

    async check(req, res, next){
        try{
            const token = generateJwt(req.user.id, req.user.login, req.user.role)
            return res.json({token})
        }catch (e) {
            next(ApiError.badRequest(e))
        }
    }
}

module.exports = new UserController()