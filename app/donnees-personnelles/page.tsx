import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Données personnelles',
  robots: { index: false }
}

export default function DonneesPersonnelles() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1>Données personnelles</h1>

      <div className="card">
        <h2>En bref</h2>
        <p>
          Ce site ne dépose aucun cookie, n&apos;utilise aucun outil de statistiques et ne collecte rien à votre
          insu. Les seules informations que nous recevons sont celles que vous choisissez de nous envoyer
          quand vous nous contactez.
        </p>
      </div>

      <div className="card">
        <h2>Qui est responsable ?</h2>
        <p>
          Victor Crézé, entrepreneur individuel (EI), 44560 Paimbœuf —{' '}
          <a className="lien" href="mailto:contact@dis-moi.net">contact@dis-moi.net</a>.
        </p>
      </div>

      <div className="card">
        <h2>Quelles données et pourquoi ?</h2>
        <p>
          Quand vous nous écrivez ou nous appelez, nous recevons vos coordonnées (nom, adresse e-mail, numéro de
          téléphone, structure) et le contenu de votre message.
        </p>
        <p>
          Elles servent uniquement à répondre à votre demande : informations, construction d&apos;une
          intervention, devis. Elles ne sont jamais vendues, ni utilisées pour de la publicité.
        </p>
        <p>
          Ce traitement repose sur votre demande (échanges préalables à une éventuelle intervention) et sur
          notre intérêt légitime à répondre aux messages que nous recevons.
        </p>
        <p className="font-semibold">
          Merci de ne pas nous transmettre d&apos;informations personnelles sur les jeunes ou les participants
          (situation, vie intime, faits vécus) : nous en parlerons de vive voix si nécessaire.
        </p>
      </div>

      <div className="card">
        <h2>Qui y a accès ?</h2>
        <p>
          Seuls les deux éducateurs de Dis-moi. Vos messages transitent aussi par notre prestataire de
          messagerie électronique, qui ne les utilise pas pour son propre compte.
        </p>
      </div>

      <div className="card">
        <h2>Combien de temps ?</h2>
        <p>
          Vos messages et coordonnées sont conservés <strong>un an</strong> après notre dernier échange, puis
          supprimés. Si une intervention est réalisée, les documents comptables (devis signés, factures) sont
          conservés pendant la durée imposée par la loi.
        </p>
      </div>

      <div className="card">
        <h2>Hébergement du site</h2>
        <p>
          Le site est hébergé par Vercel Inc., aux États-Unis. Comme tout hébergeur, Vercel enregistre des
          données techniques de connexion (adresse IP, date, page consultée) pour faire fonctionner et
          sécuriser le service. Ces données peuvent être traitées hors de l&apos;Union européenne, avec les
          garanties prévues par le RGPD pour ces transferts.
        </p>
      </div>

      <div className="card">
        <h2>Vos droits</h2>
        <p>
          Vous pouvez à tout moment demander à consulter, corriger ou supprimer les informations vous
          concernant, ou vous opposer à leur utilisation, en écrivant à{' '}
          <a className="lien" href="mailto:contact@dis-moi.net">contact@dis-moi.net</a>.
        </p>
        <p>
          Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez
          adresser une réclamation à la CNIL sur{' '}
          <a className="lien" href="https://www.cnil.fr">cnil.fr</a>.
        </p>
      </div>
    </section>
  )
}
