const path = require('path')

class FileController {
  show (request, response) {
    const { file } = request.params
    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file
    )
    return response.sendFile(filePath)
  }
}
module.exports = new FileController()
