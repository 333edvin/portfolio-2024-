const { NextResponse } = require('next/server');
const nodemailer = require('nodemailer');

async function POST(req) {
  const { name, email, orgname, service , message } = await req.json();

  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // SMTP server host
    port: 465, // SMTP server port for secure connection (SSL)
    secure: true, 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // your email address
    subject: `Work inquiry from ${name}`,
    text: `Organization: ${orgname}
    Service: ${service}
    Message: ${message}`,
  };


  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}

module.exports = {
  POST,
};
