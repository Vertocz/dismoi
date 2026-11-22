import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Contactez Dis-moi pour une demande d'information, la construction d'une intervention ou un devis. Interventions en Loire-Atlantique et départements limitrophes."
}

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1>Nous contacter</h1>

      <div className="card">
        <p>N&apos;hésitez pas à nous contacter pour toute demande d&apos;informations, construction d&apos;interventions ou devis.</p>
        <p>Nous reviendrons vers vous rapidement.</p>
      </div>

      <ul className="space-y-2 text-lg">
        <li>
          <span aria-hidden="true">📧 </span>
          <span className="sr-only">E-mail : </span>
          <a className="lien" href="mailto:contact@dis-moi.net">contact@dis-moi.net</a>
        </li>
        <li>
          <span aria-hidden="true">📞 </span>
          <span className="sr-only">Téléphone : </span>
          <a className="lien" href="tel:+33686195546">06 86 19 55 46</a>
        </li>
      </ul>

      <div className="card">
        <p>Les interventions peuvent se dérouler en Loire-Atlantique et dans les départements limitrophes.</p>
        <p>Nous pouvons cependant adapter nos propositions en fonction des projets.</p>
      </div>
    </section>
  )
}
