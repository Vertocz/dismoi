// app/qui-sommes-nous/page.js
export default function QuiSommesNous() {
  return (
    <section className="max-w-4xl mx-auto space-y-6 roboto">
      <h1 className="text-3xl font-bold">Qui sommes-nous ?</h1>

      <p className="text-sm">
        Nous sommes <strong>Victor</strong> et <strong>Chloé</strong>, éducateurs spécialisés basés à Paimboeuf.
        Nous animons des ateliers éducatifs autour de la vie affective, relationnelle et sexuelle. 
        Notre approche est éducative et bienveillante : émotions, relations, consentement, plaisir et intimité
        sont abordés avec sérieux et simplicité.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-[var(--color-pinky)]">
          <h3 className="font-semibold">Victor — Éducateur spécialisé</h3>
          <p className="text-sm mt-1">
            Actif depuis 2012, j’ai animé des groupes éducatifs en IME et structures variées. 
            J’interviens également auprès de sportifs au Pôle France de ParaBasket Adapté et développe des outils numériques pour l’autonomie.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[var(--color-mint)]">
          <h3 className="font-semibold">Chloé — Éducatrice spécialisée</h3>
          <p className="text-sm mt-1">
            Diplômée en 2017, j’ai travaillé en IME et en MECS, j'ai animé des ateliers autour du quotidien, du corps et du numérique.
            Aujourd’hui, je continue à me former et à intervenir auprès d’enfants et d’adolescents.
          </p>
        </div>
      </div>

      <section className="p-4 rounded-xl bg-white">
        <h3 className="font-semibold">Notre posture</h3>
        <p className="text-sm mt-2">
          Nous intervenons toujours à deux, proposons des séquences d’ateliers adaptées, et garantissons un cadre sécurisant 
          et non-jugeant. Chaque participant peut s’exprimer librement et élaborer sa pensée.
        </p>
      </section>
    </section>
  )
}
