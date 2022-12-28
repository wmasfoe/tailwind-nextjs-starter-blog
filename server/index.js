const Next = require('next')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const nextApp = Next({ dev })
const handle = nextApp.getRequestHandler()

// router
const apis = require('./apis/index')

// 入口
function main() {
  const koaApp = new Koa()

  // logger
  koaApp.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })
  koaApp.use(bodyParser())

  // koa 只拦截 /api 开头的路由
  koaApp.use(apis.routes(), apis.allowedMethods())

  // 前端路由、404 路由、其他路由 交给 next 处理
  koaApp.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  koaApp.listen(3000, () => {
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    )
  })
}

nextApp.prepare().then(main)
