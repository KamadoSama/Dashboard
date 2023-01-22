const express = require('express')

const router = express.Router()
const ctrlApi = require('../controler/api')

router.get('/', ctrlApi.getAllProduct)
router.post('/',ctrlApi.createProduct )
router.delete('/:id',ctrlApi.deleteProduct)

module.exports =router