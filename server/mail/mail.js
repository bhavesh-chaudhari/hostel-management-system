import nodemailer from "nodemailer";

export const sendMail = async (mailTo, mailSubject, mailText, mailHtml) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    const result = await transporter.sendMail({
      from: `"Mail from Hostel" <${process.env.EMAIL}>`, // sender address
      to: mailTo, // list of receivers
      subject: mailSubject, // Subject line
      html: mailHtml, // html body
      text: mailText,
    });

    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
