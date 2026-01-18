 // app/ateliers/page.jsx
export default function Ateliers() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1>Nos ateliers éducatifs</h1>

      <div>Dis-moi propose deux types d'interventions, animées par deux éducateurs spécialisés, adaptées aux publics adolescents, jeunes adultes, structures sociales, médico-sociales ou scolaires.</div>

      <div className="card">
        <h2>Le cycle EVARS</h2>
        <div className="mt-4">Nous abordons avec le groupe des sujets essentiels :<br/>
        • émotions, relations, amitiés, amours<br/>
        • consentement, désir <br/>
        • corps, intimité, représentations<br/>
        • genre, orientations sexuelles<br/>
        • violences sexistes et sexuelles<br/>
        • usages numériques<br/>
        • situations du quotidien, questions spontanées</div>
        <div className="mt-4">Au cours de ces séances, nous souhaitons favoriser la réflexion personnelle, développer l'autonomie, prévenir les difficultés, permettre une parole libre et sécurisée au sein d'un petit groupe.</div>
      </div>

      <div className="card">
        <h2>Les groupes de parole</h2>
        <p className="mt-4">
        • Gestion des relations dans un groupe<br/>
        • travailler l'écoute et la communication<br/>
        • apaiser les tensions<br/>
        • accompagner des questionnements récurrents<br/>
        • créer un espace d'expression régulier</p>
      </div>

      <div className="card">
        <h2>Notre cadre d'intervention</h2>
        <p className="mt-4">• confidentialité de la parole<br/>
        • posture éducative<br/>
        • adaptation au public et à l'âge</p>
      </div>
    </section>
  )
}