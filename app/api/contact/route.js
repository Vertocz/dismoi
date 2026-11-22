import nodemailer from 'nodemailer'

const MAX = { name: 100, email: 200, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(data, status = 200) {
  return Response.json(data, { status })
}

export async function POST(req) {
  let body
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Requête invalide' }, 400)
  }

  const name = String(body.name ?? '').trim().slice(0, MAX.name)
  const email = String(body.email ?? '').trim()
  const message = String(body.message ?? '').trim()

  // Champ piège invisible : seuls les robots le remplissent.
  // On répond « ok » pour ne pas leur indiquer qu'ils ont été repérés.
  if (body.website) {
    return json({ ok: true })
  }

  if (!EMAIL_RE.test(email) || email.length > MAX.email) {
    return json({ error: 'Adresse e-mail invalide' }, 400)
  }
  if (!message || message.length > MAX.message) {
    return json({ error: 'Message vide ou trop long' }, 400)
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_RECEIVER } =
    process.env

  // Sans configuration SMTP, on refuse clairement plutôt que de faire croire
  // au visiteur que son message est parti.
  if (!SMTP_HOST || !SMTP_FROM || !CONTACT_RECEIVER) {
    console.error('Formulaire de contact : configuration SMTP manquante')
    return json({ error: "L'envoi de messages n'est pas disponible pour le moment" }, 503)
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT ? Number(SMTP_PORT) : 587,
    secure: SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  })

  try {
    await transporter.sendMail({
      from: { name: 'Site Dis-moi', address: SMTP_FROM },
      to: CONTACT_RECEIVER,
      replyTo: { name: name || email, address: email },
      subject: `Nouveau message du site — ${name || email}`,
      text: `De : ${name || 'Anonyme'} <${email}>\n\n${message}`
    })
  } catch (err) {
    console.error('Formulaire de contact : échec de l’envoi', err)
    return json({ error: "Le message n'a pas pu être envoyé" }, 502)
  }

  return json({ ok: true })
}
