// app/api/contact/route.js
import nodemailer from 'nodemailer'

export async function POST(req) {
  const body = await req.json()
  const { name, email, message } = body

  if (!email || !message) {
    return new Response(JSON.stringify({ error: 'Email and message required' }), { status: 400 })
  }

  const SMTP_HOST = process.env.SMTP_HOST

  if (!SMTP_HOST) {
    console.log('Contact form received —', { name, email, message })
    return new Response(JSON.stringify({ ok: true, logged: true }))
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  const mail = {
    from: `${name || 'Site Dis-moi'} <${process.env.SMTP_FROM || 'contact@dismoi.example'}>`,
    to: process.env.CONTACT_RECEIVER || 'vous@contact.example',
    subject: 'Nouveau message — Site Dis-moi',
    text: `De: ${name || 'Anonyme'} <${email}>\n\n${message}`
  }

  await transporter.sendMail(mail)

  return new Response(JSON.stringify({ ok: true }))
}
