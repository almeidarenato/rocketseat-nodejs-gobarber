const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production' // objetivo é verificar qual ambiente se está acessando
    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
  }
  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    }) // determina qual a syntax da barra para windows linux mac
    this.express.set('view engine', 'njk')
  }
  routes () {}
}
module.exports = new App().express // exporta uma instancia da classe app
