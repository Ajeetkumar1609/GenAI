const express = require("express");
const authController = require("../controllers/auth.controller");

const authRouter = express.Router();

/**
 * @routes POST /api/routes/register
 * @description Register a new user
 * @access Public
 */
authRouter.post('/register', authController.registerUser)

/**
 * @routes POST /api/auth/login
 * @description Login user with email and password
 * @access Public
 */
authRouter.post('/login', authController.loginUser)

module.exports = authRouter;