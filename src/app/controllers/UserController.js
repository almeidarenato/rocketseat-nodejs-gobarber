const { User } = require('../models')

class UserController {
  create (request, response) {
    return response.render('auth/signup')
  }
  async store (request, response) {
    const { filename: avatar } = request.file

    await User.create({ ...request.body, avatar })

    return response.redirect('/')
  }
}
module.exports = new UserController()
