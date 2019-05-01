const { User } = require('../models')

class SessionController {
  create (request, response) {
    return response.render('auth/signin')
  }
  async store (request, response) {
    const { email, password } = request.body
    const user = await User.findOne({ where: { email } })
    if (!user) {
      request.flash('error', 'Usuário não encontrado')
      return response.redirect('/')
    }
    if (!(await user.checkPassword(password))) {
      request.flash('error', 'Senha Incorreta')
      return response.redirect('/')
    }
    request.session.user = user

    return response.redirect('/app/dashboard')
  }
  destroy (request, response) {
    request.session.destroy(() => {
      response.clearCookie('root')
      return response.redirect('/')
    })
  }
}
module.exports = new SessionController()
