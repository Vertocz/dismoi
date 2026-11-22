# Dis-moi

Site vitrine de **Dis-moi**, ateliers éducatifs autour de la vie affective, relationnelle et sexuelle.

Next.js (App Router) · Tailwind CSS v4 · polices auto-hébergées (Fontsource : Nunito, Barriecito).

## Lancer le site en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Structure

- `app/` : les pages (accueil, `ateliers`, `qui-sommes-nous`, `contact`) et la route `api/contact`
- `components/` : en-tête, pied de page, formulaire de contact
- `app/globals.css` : styles globaux et couleurs du site (bloc `@theme`)

## Formulaire de contact (pas encore activé)

Le composant `components/ContactForm.jsx` et la route `app/api/contact/route.js` sont prêts,
mais le formulaire n'est pas affiché. Pour l'activer :

1. Définir les variables d'environnement (par ex. dans `.env.local` ou chez l'hébergeur) :

   ```
   SMTP_HOST=...
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=...
   SMTP_PASS=...
   SMTP_FROM=contact@dis-moi.net      # adresse d'expédition autorisée par le serveur SMTP
   CONTACT_RECEIVER=contact@dis-moi.net  # adresse qui reçoit les messages
   ```

   Sans ces variables, la route répond une erreur 503 (le visiteur est prévenu que l'envoi n'a pas marché).

2. Ajouter sous le formulaire une courte mention RGPD (à quoi servent les données, durée de conservation, contact).
3. Ajouter `<ContactForm />` dans `app/contact/page.tsx`.

## À faire

- Page **mentions légales** (obligatoire : éditeur, SIRET, hébergeur…).
