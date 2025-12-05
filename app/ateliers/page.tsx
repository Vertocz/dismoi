// app/ateliers/page.js
export default function Ateliers() {
  const items = [
    { title: 'Cycle d\'interventions', text: '3 séances sur le corps, consentement, émotions et relations.' },
    { title: 'Groupes à l’année', text: '10 séances régulières pour un travail approfondi.' }
  ]

  return (
    <section className="max-w-4xl mx-auto space-y-6 roboto">
      <h1 className="text-3xl font-bold roboto">Nos ateliers</h1>
      <p className="mb-6 text-sm roboto">Nous construisons chaque séquence avec l'équipe de l'établissement et adaptons les supports au public concerné.</p>

      <div className="space-y-4">
        {items.map((it)=> (
          <div key={it.title} className="p-8 rounded-xl bg-[var(--color-pinky)] shadow-sm roboto">
            <h3 className="font-semibold roboto">{it.title}</h3>
            <p className="text-sm mt-1 roboto">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
