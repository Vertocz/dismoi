import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false }
}

export default function MentionsLegales() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1>Mentions légales</h1>

      <div className="card">
        <h2>Éditeur du site</h2>
        <p>
          Le site dis-moi.net est édité par <strong>Victor Crézé</strong>, entrepreneur individuel (EI),
          micro-entreprise.
        </p>
        <ul>
          <li>Adresse : 67 bis rue du Général de Gaulle, 44560 Paimbœuf</li>
          <li>SIRET : 979 338 530 00012</li>
          <li>
            Téléphone : <a className="lien" href="tel:+33686195546">06 86 19 55 46</a>
          </li>
          <li>
            E-mail : <a className="lien" href="mailto:contact@dis-moi.net">contact@dis-moi.net</a>
          </li>
        </ul>
        <p className="mt-4">Directeur de la publication : Victor Crézé.</p>
      </div>

      <div className="card">
        <h2>Hébergeur</h2>
        <ul>
          <li>Vercel Inc.</li>
          <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
          {/* Numéro repris des mentions légales d'autres sites hébergés chez Vercel : à vérifier */}
          <li>Téléphone : +1 951-383-6898</li>
          <li>
            Site : <a className="lien" href="https://vercel.com">vercel.com</a>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, le logo et l&apos;identité visuelle de Dis-moi sont protégés. Toute reproduction,
          totale ou partielle, sans autorisation écrite préalable est interdite.
        </p>
      </div>

      <div className="card">
        <h2>Données personnelles</h2>
        <p>
          Le site ne dépose aucun cookie et n&apos;utilise aucun outil de mesure d&apos;audience. Pour savoir
          comment sont traitées les informations que vous nous transmettez, consultez la page{' '}
          <Link className="lien" href="/donnees-personnelles">Données personnelles</Link>.
        </p>
      </div>
    </section>
  )
}
