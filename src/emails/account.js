const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alonso.gutierrez@mail.udp.cl',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alonso.gutierrez@mail.udp.cl',
        subject: 'Why you leave my friend! :(',
        text: `Dear ${name} we are so sad because you leave our app, can you tell us whats happend? Grettings!.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}