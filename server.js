// import express
import express from 'express'
// import path
import path from 'path'
// create app
const app = express()

// set up static webpages
app.use('/index', express.static(path.join(__dirname, '1-index-page')))
