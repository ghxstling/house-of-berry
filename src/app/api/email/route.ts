import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      message: "Hello from /api/email!",
      status_code: 200,
    })
  );
}

export async function POST(req: NextRequest) {
  console.log("[SERVER] /api/email - Creating email transporter...");
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  try {
    console.log("[SERVER] /api/email - Verifying email transporter...");
    await transporter.verify();
    console.log("[SERVER] /api/email - Sending email...");
    const { name, phone, email, message } = await req.json();
    const mailOptions = {
      from: {
        name: name,
        address: email,
      },
      to: "dylan.choy21@gmail.com",
      subject: `New message from ${name} | House of Berry`,
      text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}

      Sent from House of Berry
    `,
      html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <br />
      <p>${message.replace(/\n/g, "<br />")}</p>
      <br />
      <p><i>Sent from House of Berry</i></p>`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log(
      "[SERVER] /api/email - Email sent successfully:",
      info.response
    );
    return new NextResponse(
      JSON.stringify({
        message: "Email sent successfully",
        body: mailOptions,
        info: info.response,
        status_code: 200,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("[SERVER] /api/email - Error sending email:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Error sending email",
        error: (error as Error).message,
        status_code: 500,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
