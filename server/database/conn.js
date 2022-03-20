const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/loginRegister'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database Connected')
}).catch((err) => {
    console.log(err.message)
})