let postmark = require("postmark");
let client = new postmark.Client('api-key')

function submitContactForm (payload) {
  console.log('i made it to submitContactForm')
  // client.sendEmail({
  //   'From': 'brandon@morsecodemedia.com',
  //   'To': 'brandon@morsecodemedia.com',
  //   'Subject': 'morsecodemedia contact form',
  //   'TextBody': ''
  // })
}