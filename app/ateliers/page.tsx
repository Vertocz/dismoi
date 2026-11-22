import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos ateliers',
  description:
    "Cycle EVARS (éducation à la vie affective, relationnelle et sexuelle) et groupes de parole, pour adolescents, jeunes adultes et structures sociales, médico-sociales ou scolaires."
}

export default function Ateliers() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1>Nos ateliers éducatifs</h1>

      <p>Dis-moi propose deux types d&apos;interventions, animées par deux éducateurs spécialisés, adaptées aux publics adolescents, jeunes adultes, structures sociales, médico-sociales ou scolaires.</p>

      <div className="card">
        <h2>Le cycle EVARS</h2>
        <p><strong>EVARS</strong> : éducation à la vie affective, relationnelle et sexuelle.</p>
        <p>Nous abordons avec le groupe des sujets essentiels :</p>
        <ul>
          <li>émotions, relations, amitiés, amours</li>
          <li>consentement, désir</li>
          <li>corps, intimité, représentations</li>
          <li>genre, orientations sexuelles</li>
          <li>violences sexistes et sexuelles</li>
          <li>usages numériques</li>
          <li>situations du quotidien, questions spontanées</li>
        </ul>
        <p className="mt-4">Au cours de ces séances, nous souhaitons favoriser la réflexion personnelle, développer l&apos;autonomie, prévenir les difficultés, permettre une parole libre et sécurisée au sein d&apos;un petit groupe.</p>
      </div>

      <div className="card">
        <h2>Les groupes de parole</h2>
        <ul>
          <li>gérer les relations dans un groupe</li>
          <li>travailler l&apos;écoute et la communication</li>
          <li>apaiser les tensions</li>
          <li>accompagner des questionnements récurrents</li>
          <li>créer un espace d&apos;expression régulier</li>
        </ul>
      </div>

      <div className="card">
        <h2>Notre cadre d&apos;intervention</h2>
        <ul>
          <li>confidentialité de la parole</li>
          <li>posture éducative</li>
          <li>adaptation au public et à l&apos;âge</li>
        </ul>
      </div>
    </section>
  )
}
