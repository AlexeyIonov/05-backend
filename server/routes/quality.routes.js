const express = require('express')
const Quality = require('../models/Quality')
const router = express.Router({mergaParams: true})

router.get('/', async (req, res) => {
    try {
        const qualities = await Quality.find()
        res.status(200).json({ list: qualities})
    } catch (error) {
        res.status(500).json({
            message: 'На сервере произощла ошибка. Поробуйте позже.'
        })
    }
})

module.exports = router