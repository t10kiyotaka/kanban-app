// Import as a style of Node.js require.
const bodyParser = require('body-parser')

// Export the function which receives `Express` application instance.
module.exports = app => {
  // Install a midle ware to parse HTTP request body as JSON.
  app.use(bodyParser.json())

  // TODO: Add API impl here.
}
