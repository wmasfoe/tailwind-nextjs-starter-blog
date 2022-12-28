const Router = require('koa-router')

const router = new Router()

router.post('/register', async (ctx, _next) => {
  ctx.body = {
    title: 'register success!',
    msg: '这是根路由渲染的 msg 变量',
  }
})

router.get('/login', async (ctx, _next) => {
  ctx.body = {
    msg: 'login success!',
  }
})

router.get('/json', async (ctx, _next) => {
  ctx.body = {
    title: 'koa2 json',
  }
})

module.exports = router
