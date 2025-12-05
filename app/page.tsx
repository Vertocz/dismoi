// app/page.js
import Link from 'next/link'

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex items-center gap-6 mb-8">
        <div>
          <p className="mt-1 text-sm text-gray-600">
            Ateliers éducatifs sur la vie affective, relationnelle et sexuelle — 
            pour apprendre, échanger et grandir.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-2">Nos interventions</h2>
          <p className="text-sm mb-4">
            Séquences d'ateliers pour collèges, lycées, IME, MECS, centres sociaux et clubs sportifs.
            Approche éducative et bienveillante, animée par deux éducateurs spécialisés.
          </p>
          <Link 
            className="inline-block px-4 py-2 rounded-full border-2 border-primary text-primary font-medium" 
            href="/ateliers"
          >
            Voir les ateliers
          </Link>
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-2">Contactez-nous</h2>
          <p className="text-sm mb-4">
            Demandez un devis ou proposez une date pour une intervention. Nous répondons rapidement.
          </p>
          <Link 
            className="inline-block px-4 py-2 rounded-full bg-primary text-white font-medium" 
            href="/contact"
          >
            Contact
          </Link>
        </article>

        <article className="p-6 rounded-2xl border-2 border-dashed border-pinky bg-gradient-to-br from-white/70 to-pinky/10">
          <h3 className="text-lg font-semibold">Notre approche</h3>
          <p className="text-sm mt-2">
            Nous privilégions une entrée éducative : émotions, relations, consentement et plaisir sont abordés
            de façon adaptée. Pas de tabou, mais du sérieux et de la confiance.
          </p>
        </article>

        <article className="p-6 rounded-2xl border-2 border-mint bg-white">
          <h3 className="text-lg font-semibold">Pourquoi deux intervenants ?</h3>
          <p className="text-sm mt-2">
            La présence de deux éducateurs permet de sécuriser la parole et de proposer des regards complémentaires
            — pédagogie et bienveillance en double.
          </p>
        </article>
      </div>

      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Où et pour qui ?</h3>
        <p className="text-sm">
          Nous intervenons principalement en Loire-Atlantique et Pays de Retz, auprès de collèges, lycées,
          établissements médico-sociaux, centres sociaux et clubs sportifs.
        </p>
      </section>
    </section>
  )
}
