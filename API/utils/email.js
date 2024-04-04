const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'zackery.renner22@ethereal.email',
        pass: 'pyy5FxbdjWwt7CeKat'
    }
});
  // 2) Define the email options
  const mailOptions = {
    from: 'DELTA NFT MARKETPLACE <deltanftmarketplace@.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
