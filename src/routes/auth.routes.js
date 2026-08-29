const express = require("express");

const authRouter = express.Router;

/**
 * @routes POST /api/routes/register
 * @description Register a new user
 * @access Public
 */
authRouter.post('/register');

module.exports = authRouter;