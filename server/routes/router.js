const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const User = require('../Models/User')

//body parser
router.use(bodyParser.json())

//routes
router.post('/login', (req, res) => {
    const { username, password } = req.body
    User.findOne({ username, password }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: 'User Found', user: user })
            } else {
                res.send({ message: 'Wrong Passwords' })
            }
        } else {
            res.send({ message: 'No such user' })
        }
    })
})

router.post('/register', (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    User.findOne({ username }, (err, user) => {
        if (user) {
            res.send('A user with this name already exists')
        } else {
            const user = new User({
                username,
                password
            })
            user.save((err) => {
                if (err) {
                    res.send(err.message)
                } else {
                    res.send('Registered');
                }
            });
        }
    })
})

module.exports = router