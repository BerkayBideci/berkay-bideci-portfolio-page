import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'berkaybideci@gmail.com',
            name: name,
            reply_to: email,
            subject: subject,
            text: message,
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}
