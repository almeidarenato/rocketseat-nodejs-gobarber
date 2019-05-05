const { User, Appointment } = require('../models')
class DashboardController {
  async index (request, response) {
    // console.log(user)
    const { provider } = request.session.user
    const { id } = request.session.user
    console.log(id)
    console.log(provider)
    if (provider) {
      const appointments = await Appointment.findAll({
        where: {
          provider_id: id
        },
        include: {
          model: User,
          as: 'User'
        }
      })

      console.log(appointments[0].User.name)
      console.log(appointments[1].User.name)
      return response.render('dashboard_provider', { appointments })
    }
    const providers = await User.findAll({ where: { provider: true } })
    return response.render('dashboard', { providers })
  }
}
module.exports = new DashboardController()
