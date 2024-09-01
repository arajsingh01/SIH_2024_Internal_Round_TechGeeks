// pages/api/send-email.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { name, email, subject, message } = await req.json()

    // Replace these with your actual email service settings
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'anujagrawal1804@gmail.com',
            pass: 'eynk bvui eqzd hnnv',
        },
    });

    const mailOptions = {
        from:' anujagrawal1804@gmail.com',
        to: email,
        subject: subject,
        text: `name = ${name}, email = ${email}, message = ${message}`,
        html: `
            <h1>Hello!!! welcome to HealthInSight</h1>
            <p>${message}</p>
            <p>Thanks</p>
            <p>Regards</p>
            <p>${name}</p>
            <p>${email}</p>
            `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully" })
}