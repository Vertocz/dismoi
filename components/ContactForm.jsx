'use client'

import { useState } from 'react'

// Formulaire prêt à l'emploi, mais pas encore affiché sur le site :
// voir le README (configuration SMTP + mention RGPD à ajouter avant de l'activer).
export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Le message n'a pas pu être envoyé")
      form.reset()
      setStatus('sent')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  const field = 'w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-2 focus:border-mint'

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div className="pt-4">
        <label htmlFor="cf-name" className="block font-semibold mb-1">Nom</label>
        <input id="cf-name" name="name" autoComplete="name" maxLength={100} className={field} />
      </div>

      <div>
        <label htmlFor="cf-email" className="block font-semibold mb-1">E-mail (obligatoire)</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" maxLength={200} className={field} />
      </div>

      <div>
        <label htmlFor="cf-message" className="block font-semibold mb-1">Message (obligatoire)</label>
        <textarea id="cf-message" name="message" required rows={6} maxLength={5000} className={field} />
      </div>

      {/* Champ piège pour les robots, invisible pour les humains */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="cf-website">Ne pas remplir</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="titre m-0 cursor-pointer" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi…' : 'Envoyer'}
      </button>

      <p role="status" aria-live="polite">
        {status === 'sent' && 'Merci, votre message a bien été envoyé.'}
        {status === 'error' && error}
      </p>
    </form>
  )
}
