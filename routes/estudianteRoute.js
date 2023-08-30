const express = require('express');
const userController = require('../controllers/estudianteController')


const router = express.Router();

router.post('/create',userController.postEstudiante);


module.exports = router;