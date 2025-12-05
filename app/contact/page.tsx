// app/ateliers/page.js
export default function Ateliers() {
  const items = [
    { title: 'Cycle collège', text: '3 séances sur le corps, consentement, émotions et relations.' },
    { title: 'Atelier prévention (1 intervention)', text: "Session d'1h30 pour aborder les bases et repères." },
    { title: 'Groupes à l’année', text: '10 séances régulières pour un travail approfondi.' }
  ]

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Nos ateliers</h1>
      <p className="mb-6 text-sm">Nous construisons chaque séquence avec l'équipe de l'établissement et adaptons les supports au public concerné.</p>

      <div className="space-y-4">
        {items.map((it)=> (
          <div key={it.title} className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-sm mt-1">{it.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-sm">Tarifs indicatifs : 500€ pour une intervention de prévention (cycle 3x). Pour un devis détaillé, contactez-nous.</p>
      </div>
    </section>
  )
}
