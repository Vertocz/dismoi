// app/page.jsx
export default function Home() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1>Accueil</h1>

      <div className="card">
        <h2 className="mt-8">Parce que parler change tout.</h2>
        <p>Les questions de vie affective, relationnelle et sexuelle traversent notre quotidien, mais il n'est pas toujours simple de les aborder. Par pudeur, par manque de mots, par manque d'espaces adaptés.</p>
        <p className="mt-4">Dis-moi crée des temps de parole sécurisés, accessibles et bienveillants, où chacun peut exprimer ses questions, ses doutes, ses expériences et ses besoins — sans jugement.</p>
      </div>

      <div className="card">
        <h2 className="mt-12">Des ateliers pour mieux se comprendre et mieux vivre ensemble</h2>
        <p>Nos séances s'adressent aux établissements scolaires, structures sociales et médico-sociales, associations, équipes éducatives et groupes constitués.</p>
        <p className="mt-4">Elles offrent un espace rare : un lieu où l'on peut réfléchir, apprendre, s'écouter, débattre et construire sa propre pensée.</p>
      </div>

      <div className="card">
        <h2 className="mt-12">Un cadre clair, une parole protégée</h2>
        <p className="font-semibold mb-4">Chaque atelier est animé par deux éducateurs spécialisés formés à ces thématiques.</p>
        <p className="font-semibold mb-3">Nous garantissons :</p>
        <p className="space-y-2 ml-6">
          - un climat de confiance<br/>
          - une parole libre et non-jugeante<br/>
          - la confidentialité au sein du groupe<br/>
          - un regard éducatif avant tout<br/>
        </p>
      </div>

      <div className="card">
        <h2 className="mt-12">Pour qui ?</h2>
        <p>Adolescents, jeunes adultes, professionnels, équipes éducatives : nos ateliers s'adaptent aux publics et aux besoins.</p>
      </div>

      <div className="card">
        <h2 className="mt-12">Dis-moi, c'est quoi ?</h2>
        <ul className="space-y-3">
          <li>Un espace pour dire, comprendre, questionner.</li>
          <li>Un lieu pour penser les relations, le corps, l'intimité, le consentement, les émotions.</li>
          <li>Un outil pour développer l'autonomie, prévenir les situations problématiques, et favoriser une communication plus sereine.</li>
        </ul>
      </div>
    </section>
  )
}