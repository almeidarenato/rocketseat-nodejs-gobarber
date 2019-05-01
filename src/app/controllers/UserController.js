const { User } = require('../models')

class UserController {
  create (request, response) {
    return response.render('auth/signup')
  }
  async store (request, response) {
    const { name } = request.body
    if (name === '' || name.length === 0 || name === null) {
      request.flash('error', 'Informe um nome para se cadastrar')
      return response.redirect('/signup')
    }

    const { filename: avatar } = request.file || 'default'
    await User.create({ ...request.body, avatar })

    return response.redirect('/')
  }
}
module.exports = new UserController()
