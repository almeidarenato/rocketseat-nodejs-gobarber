const { User } = require('../models')

class AppointmentController {
  async create (request, response) {
    const provider = await User.findByPk(request.params.provider)
    return response.render('appointments/create', { provider })
  }
}
module.exports = new AppointmentController()
