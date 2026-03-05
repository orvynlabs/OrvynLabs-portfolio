import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing Email Environment Variables');
            return NextResponse.json({ error: 'Server configuration error. Environment variables not set.' }, { status: 500 });
        }

        // Using explicit SMTP settings for better compatibility with Vercel/Serverless
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'orvynlabs@gmail.com',
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone/Subject: ${phone}
        Message: ${message}
      `,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
            <h3 style="color: #333;">New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone/Subject:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
                ${message.replace(/\n/g, '<br>')}
            </div>
        </div>
      `,
        };

        // Verify connection before sending
        await transporter.verify();
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        // Detailed logging for Vercel Logs
        console.error('Nodemailer Error Details:', {
            message: error.message,
            code: error.code,
            command: error.command,
        });
        return NextResponse.json({
            error: 'Failed to send email',
            details: error.message
        }, { status: 500 });
    }
}
