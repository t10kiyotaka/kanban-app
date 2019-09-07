// Import as a style of Node.js require.
const bodyParser = require('body-parser')

// Export the function which receives `Express` application instance.
module.exports = app => {
  // Install a midle ware to parse HTTP request body as JSON.
  app.use(bodyParser.json())

  const users = {
    'foo@domain.com': {
      password: '12345678',
      userId: 1,
      token: '1234567890abcdef'
    }
  }

  // endpoint of login API '/auth/login'
  app.post('/auth/login', (req, res) => {
    const { email, password } = req.body
    const user = users[email]
    if(user) {
      if(user.password !== password) {
        res.status(401).json({ message: 'Failed to login.' })
      } else {
        res.json({ userId: user.userId, token: user.token })
      }
    } else {
      res.status(404).json({ message: 'The user is not registered.' })
    }
  })
}
