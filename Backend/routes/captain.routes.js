const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator");


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be ateast 3 character long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 character long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 character long '),
    body('vehicle.capacity').isInt({ min: 1}).withMessage('Capacity should at least be 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid type')
],
    captainController.registerCaptain
)


module.exports = router;