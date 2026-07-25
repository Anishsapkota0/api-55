const express = require ("express");
const router = require("../router/router.config")

const app = express()
// router mounting

app.use(router)

module.exports= app;