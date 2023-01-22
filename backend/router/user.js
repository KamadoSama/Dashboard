const express = require('express')

const router = express.Router()
const crtlUser = require('../controler/user')

router.post('/sigup',crtlUser.sigup)
router.get('/users',crtlUser.getAllUser)
router.post('/login',crtlUser.login)

module.exports = router