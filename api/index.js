import express from 'express'
require('dotenv').config()
const app = express()
const nodemailer = require('nodemailer')
const postmarkTransport = require('nodemailer-postmark-transport')
const bodyParser = require('body-parser')
const POSTMARK_API = process.env.POSTMARK_API
const POSTMARK_FROM_EMAIL = process.env.POSTMARK_FROM_EMAIL
const POSTMARK_TO_EMAIL = process.env.POSTMARK_TO_EMAIL
const POSTMARK_TEMPLATE_ID = process.env.POSTMARK_TEMPLATE_ID

const mailTransport = nodemailer.createTransport(postmarkTransport({
  auth: {
    apiKey: POSTMARK_API
  }
}))

function sendMail() {
  const mailOptions = {
    from: POSTMARK_FROM_EMAIL,
    to: POSTMARK_TO_EMAIL,
    templateId: POSTMARK_TEMPLATE_ID,
    templateModel: {
      name: 'foo',
      email: 'bar',
      message: 'baz'
    }
  }
  // Send via nodemailer & custom transport
  return mailTransport.sendMail(mailOptions)
    .then(() => {
      console.log('Email sent successfully!')
      return true
    })
    .catch((error) => {
      console.error('There was an error while sending the email:', error)
      return false
    })
}

// "I needed to add body-parser.json() to my nuxt config since they removed that from the main express package."
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/', (req, res) => {
  console.log(req.body)
  return res.status(200).json({'message': 'you made it this far, now get the payload'})
  //sendMail()
})

export default {
  path: '/api/',
  handler: app
}