const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

module.exports = {
  storage: multer.diskStorage({
    destination = path.resolve(__dirname,'..','..','tmp','uploads')
  }),
}
