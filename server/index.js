const { createServer } = require('http')
const { parse } = require('url')
const Next = require('next')
const Koa = require('koa')
const Router = require('koa-router')
const koaRouter = new Router()

// const convert = require('koa-convert')
// const json = require('koa-json')
// const onerror = require('koa-onerror')
// const bodyparser = require('koa-bodyparser')
// const logger = require('koa-logger')
// const path = require('path')

// logger
// koaApp.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - $ms`)
// })

// onerror(koaApp)

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const nextApp = Next({ dev })
const handle = nextApp.getRequestHandler()

// router
const loginApi = require('./routers/login')

// 入口
function main() {
  const koaApp = new Koa()

  koaApp.use(loginApi.routes(), loginApi.allowedMethods())

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
