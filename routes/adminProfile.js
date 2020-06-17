const express = require('express');
const router = express.Router()

router.get('/adminProfile',(req,res) =>{
    res.render('adminPage');
})

module.exports = router