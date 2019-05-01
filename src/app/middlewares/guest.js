module.exports = (request, response, next) => {
  if (request.session && !request.session.user) {
    return next()
  }
  return response.redirect('/app/dashboard')
}
