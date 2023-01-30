const express = require("express")

const app = express()

const port = 4000

const sendEmailRouter = require("./Routes/AWS.SES.Routes")



app.get("/", (req, res) => {
    sendEmail()
    res.send("Welcome to the homepage of aws ses email sending service")
})

app.use(express.json())
app.use("/api", sendEmailRouter)

app.listen(port, () => {
    console.log(`Server running successfully on port ${port}`)
})