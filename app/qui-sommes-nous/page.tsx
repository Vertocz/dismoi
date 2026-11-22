import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qui sommes-nous ?',
  description:
    "Dis-moi est porté par deux éducateurs spécialisés, forts de plusieurs années d'expérience en IME, en MECS et auprès d'adolescents et de jeunes adultes."
}

export default function QuiSommesNous() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1>Qui sommes-nous ?</h1>

      <div className="card">
        <h2>Deux éducateurs spécialisés, une même conviction</h2>
        <p className="mt-4"><span className="italic">Dis-moi</span> est porté par deux professionnels de l&apos;éducation spécialisée, forts de plusieurs années d&apos;expérience auprès d&apos;adolescents, de jeunes adultes et de publics variés du secteur social et médico-social.</p>
        <p className="mt-4">Au fil de nos pratiques, un constat s&apos;est imposé : les questions de vie affective, relationnelle et sexuelle sont omniprésentes, essentielles, mais trop souvent peu ou mal abordées.</p>
      </div>

      <h2 className="mt-12">Une expertise issue du terrain</h2>
      <div className="card">
        <p>Nous avons longtemps travaillé en Institut Médico-Éducatif, en MECS, auprès de publics adolescents et jeunes adultes, et mené durant plusieurs années des cycles d&apos;ateliers sur ces thématiques.</p>
        <p className="mt-4">Ces expériences nous ont montré combien il est nécessaire de créer des espaces de parole protégés, où chacun peut trouver les mots pour se dire.</p>
        <p className="mt-4">Les retours des participants comme ceux des équipes éducatives ont toujours souligné : le besoin d&apos;échanges, la rareté d&apos;espaces sécurisants, la difficulté pour les professionnels d&apos;aborder ces sujets dans le quotidien.</p>
      </div>

      <h2 className="mt-12">Une approche éducative avant tout</h2>
      <div className="card">
        <p>Notre porte d&apos;entrée n&apos;est pas médicale, mais éducative : l&apos;expression, les relations, l&apos;intimité, les émotions, la construction personnelle.</p>
        <p className="mt-4">Nous croyons que parler de ces sujets en dehors de l&apos;urgence permet de prévenir les incompréhensions, tensions ou situations problématiques.</p>
      </div>

      <h2 className="mt-12">Un engagement : se former en continu</h2>
      <div className="card">
        <p>Nous nous tenons en veille permanente : formations, lectures, actualités, retours professionnels...</p>
        <p className="mt-4">Parce que ces questions évoluent, et parce que nous souhaitons garantir une approche actuelle, respectueuse et outillée.</p>
      </div>

      <h2 className="mt-12">Un projet commun</h2>
      <div className="card">
        <p>Dis-moi est né de l&apos;envie de proposer des ateliers de qualité, de rendre ces sujets accessibles, d&apos;accompagner les personnes et les équipes, et de diffuser une culture du respect, de l&apos;écoute et du consentement.</p>
      </div>
    </section>
  )
}