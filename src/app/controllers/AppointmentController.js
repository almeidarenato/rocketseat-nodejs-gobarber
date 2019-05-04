const { User, Appointment } = require('../models')

class AppointmentController {
  async create (request, response) {
    const provider = await User.findByPk(request.params.provider)
    return response.render('appointments/create', { provider })
  }
  async store (request, response) {
    const { id } = request.session.user
    const { provider } = request.params
    const { date } = request.body

    await Appointment.create({
      user_id: id,
      provider_id: provider,
      date
    })

    return response.redirect('/app/dashboard/')
  }
}
module.exports = new AppointmentController()
