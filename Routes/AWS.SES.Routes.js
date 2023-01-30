const router = require("express").Router()
const sendEmail = require("../Controller/AWS.SES.Controller")

router.get("/send/email", sendEmail)

module.exports = router