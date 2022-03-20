const express = require('express')
const app = express()
const router = require('./routes/router')
const cors = require('cors')
const port = 9000;

//database
require('./database/conn')

//cors
app.use(cors())

//router
app.use(router)





app.listen(port, console.log(`Listening on port: ${port}`))