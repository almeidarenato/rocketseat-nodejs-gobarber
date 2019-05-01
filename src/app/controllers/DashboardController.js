const { User } = require('../models')

class DashboardController {
  async index (request, response) {
    const providers = await User.findAll({ where: { provider: true } })
    return response.render('dashboard', { providers })
  }
}
module.exports = new DashboardController()
