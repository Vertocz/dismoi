// app/contact/page.jsx
export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1>Nous contacter</h1>

      <div className="card">
        <p>N'hésitez pas à nous contacter pour toute demande d'informations, construction d'interventions ou devis.</p>
        <p className="mt-4">Nous reviendrons vers vous rapidement.</p>
      </div>

        <p className="font-bold mx-auto">📧 contact@dis-moi.net</p>
        <p className="font-bold mt-2 mx-auto">📞 06 86 19 55 46</p>

      <div className="card">
        <p>Les interventions peuvent se dérouler en Loire-Atlantique et dans les départements limitrophes.</p>
        <p className="mt-4">Nous pouvons cependant adapter nos propositions en fonction des projets.</p>
      </div>
    </section>
  )
}