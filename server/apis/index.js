const Router = require('koa-router')

const router = new Router({
  prefix: '/api',
})

// login 接口
const loginRouter = require('./login')
router.use(loginRouter.routes(), loginRouter.allowedMethods())

module.exports = router
