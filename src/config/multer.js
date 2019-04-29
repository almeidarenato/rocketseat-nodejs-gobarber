const path = require('path')
const crypto = require('crypto')
const multer = require('multer')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (error, raw) => {
        if (error) return callback(error)
        callback(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}
