require("dotenv").config()
const AWS = require("aws-sdk")

const senderEmail = process.env.EMAIL_SENDER


// Aws configuration
const awsConfig = {
  accessKeyId: process.env.ACCESSKEY,
  secretAccessKey: process.env.SECRETKEY,
  region: process.env.AWS_REGION
}

const SES = new AWS.SES(awsConfig)


//sending ses email 

const sendEmail = async () => {

  const shortCode = 9999999



  try {
    const params = {
      Source: senderEmail,
      Destination: {
        ToAddresses: ["ujjwal.bhatta@aitcentre.com"]
      },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: "OTP verification"
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `<!DOCTYPE html>
                        <html lang="en">
                          <head>
                            <meta charset="UTF-8" />
                            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <title>Email</title>
                            <link rel="preconnect" href="https://fonts.googleapis.com" />
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                            <link
                              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300&display=swap"
                              rel="stylesheet"
                            />
                            <link
                              rel="stylesheet"
                              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                              integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
                              crossorigin="anonymous"
                              referrerpolicy="no-referrer"
                            />
                        
                            <style></style>
                          </head>
                        
                          <body
                            style="
                              font-family: 'Poppins', sans-serif;
                              padding: 50px 50px 0 50px;
                              max-width: 800px;
                              margin: auto;
                            "
                          >
                            <div>
                              <div style="text-align: center">
                                <img
                                  src="https://ultimodeal-image-development.s3.ap-south-1.amazonaws.com/logo.png"
                                  alt="ultimodeal"
                                  style="width: 250px; margin-bottom: 15px"
                                />
                              </div>
                        
                              <div style="flex-direction: column; margin-bottom: 20px">
                                <h1 style="color: #2b7c90; font-size: 20px; font-weight: 700">
                                  Hey Ujjwaal,check your email
                                </h1>
                                <div style="line-height: 5px">
                                  <p style="font-weight: 600">Dear User,</p>
                                </div>
                                <p>
                                  We have received a request to reset your password. Please click on the
                                  button below
                        
                                  <span style="font-weight: 600"> WITHIN THE NEXT 90 MINUTES</span> to
                                  reset your password.
                                </p>
                                <p>
                                  <i style="color: #808080">
                                    If you did not request a passowrd reset, you can safely ignore this
                                    message</i
                                  >
                                </p>
                        
                                <div style="text-align: center">
                                  <a
                                    href="
                                        "
                                  >
                                    <button
                                      style="
                                        background-color: #2b7c90;
                                        outline: none;
                                        border: none;
                                        width: 180px;
                                        height: 60px;
                                        border-radius: 8px;
                                        color: white;
                                        font-size: 16px;
                                        margin-top: 30px;
                                      "
                                    >
                                      Reset Password
                                    </button></a
                                  >
                                </div>
                              </div>
                            </div>
                        
                            <div style="text-align: center; margin-top: 15px">
                              <div>
                                <img
                                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                  style="width: 50px"
                                />
                              </div>
                              <h1
                                style="
                                  font-weight: 700;
                                  color: #2b7c90;
                                  font-size: 19px;
                                  text-align: center;
                                "
                              >
                                Thank you for being our valued customer
                              </h1>
                              <div style="line-height: 15px; text-align: center">
                                <h1 style="font-size: 16px; font-weight: 400; line-height: 25px">
                                  If you have any questions please email us at
                                  <a href="mailto:ultimodeal@ultimodeal.com">
                                    <span
                                      style="
                                        text-decoration: underline;
                                        color: #2b7c90;
                                        font-weight: 700;
                                      "
                                    >
                                      ultimodeal@ultimodeal.com</span
                                    >
                                  </a>
                                </h1>
                                <p style="font-weight: 200; font-size: 20px">OR</p>
                                <p>Call us to <span style="font-weight: 700">9851132237</span></p>
                              </div>
                        
                              <div style="line-height: 20px; text-align: center">
                                <h1 style="font-weight: 700; font-size: 19px; text-align: center">
                                  Ultimodeal Online Shopping Pvt. Ltd.
                                </h1>
                                <p style="font-size: 16px">Bhatkeko Pool, Chabahil, Kathmandu</p>
                                <p>
                                  <a
                                    href="style"
                                    ="text-decoration: underline; color: #2B7C90; font-weight: 600; font-size: 20px "
                                    >www.ultimodeal.com.np</a
                                  >
                                </p>
                              </div>
                        
                              <div style="text-align: center">
                                <h1 style="font-weight: 600; font-size: 16px">
                                  Download mobile app on
                                </h1>
                                <div style="text-align: center">
                                  <a href=""
                                    ><img
                                      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg  "
                                      alt=""
                                      srcset=""
                                      width="150px"
                                      style="margin-right: 15px"
                                  /></a>
                        
                                  <a href=""
                                    ><img
                                      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                      alt=""
                                      srcset=""
                                      width="150px"
                                  /></a>
                                </div>
                              </div>
                            </div>
                          </body>
                        </html>`
          }
        }
      }
    }

    const emailSent = SES.sendEmail(params).promise()
    emailSent.then((data) => {
      console.log(data.MessageId, "Message send succsuffully")
    }).catch((e) => {
      console.log(e, "erroraccoured")
    })



  } catch (error) {
    console.log(error)
  }
}

module.exports = sendEmail
