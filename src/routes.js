const express = require('express')
const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const DashboardController = require('./app/controllers/DashboardController')

routes.use((request, response, next) => {
  response.locals.flashSuccess = request.flash('success')
  response.locals.flashError = request.flash('error')
  return next()
})
routes.get('/', guestMiddleware, SessionController.create)
routes.post('/signin', guestMiddleware, SessionController.store)

routes.get('/signup', guestMiddleware, UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.use('/app', authMiddleware)

routes.get('/app/dashboard', DashboardController.index)
routes.get('/app/logout', SessionController.destroy)
module.exports = routes
