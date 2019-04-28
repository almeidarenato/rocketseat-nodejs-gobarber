const { User } = require('../models')

class UserController {
  create (request, response) {
    return response.render('auth/signup')
  }
  async store (request, response) {
    request.body.avatar = 'teste.jpg'
    await User.create(request.body)
    return response.redirect('/')
  }
}
module.exports = new UserController()
