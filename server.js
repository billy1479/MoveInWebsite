const app = require('./app.js')
const http = require('http')
const dotenv = require('dotenv')
dotenv.config()
const myServer = http.createServer(app)

myServer.listen(8080, () => {
  console.log('Website is live on port', 8080)
})


