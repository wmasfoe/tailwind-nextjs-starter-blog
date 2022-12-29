const Router = require('koa-router')
const { verificationCode } = require('../common-api')

const router = new Router()

router.post('/login', async (ctx, _next) => {
  const { username, password } = ctx.request.body
  console.log(ctx.request.body)

  ctx.body = {
    msg: 'login success!',
    username,
    password,
  }
})

router.get('/json', async (ctx, _next) => {
  ctx.body = {
    title: 'koa2 json',
  }
})

module.exports = router
