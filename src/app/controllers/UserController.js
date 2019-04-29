const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    if (!req.file || !req.file.filename) {
      req.flash('error', 'Sua foto é obrigatório')
      return res.redirect('/signup')
    }

    const { filename: avatar } = req.file

    await User.create({ ...req.body, avatar })

    return res.redirect('/')
  }
}

module.exports = new UserController()
