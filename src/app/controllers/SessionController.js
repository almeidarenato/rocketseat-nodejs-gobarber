const { User } = require('../models')

class SessionController {
  create (request, response) {
    return response.render('auth/signin')
  }
  async store (request, response) {
    const { email, password } = request.body
    const user = await User.findOne({ where: { email } })
    if (!user) {
      console.warn('usuario não encontrado')
      return response.redirect('/')
    }
    if (!(await user.checkPassword(password))) {
      console.warn('Senha Incorreta')
      return response.redirect('/')
    }
    request.session.user = user

    return response.redirect('/app/dashboard')
  }
}
module.exports = new SessionController()
