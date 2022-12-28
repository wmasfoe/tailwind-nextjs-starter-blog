const Router = require('koa-router')

const router = new Router({
  prefix: '/api',
})

router.get('/', async (ctx, _next) => {
  ctx.body = {
    title: 'Hello Koa 2!',
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
