module.exports = (request, response, next) => {
  if (request.session && request.session.user) {
    response.locals.user = request.session.user
    return next()
  }

  return response.redirect('/')
}
