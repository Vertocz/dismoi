import type { Metadata } from 'next'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/700.css'
import '@fontsource/barriecito/400.css'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Dis-moi — Ateliers de vie affective, relationnelle et sexuelle',
    template: '%s — Dis-moi'
  },
  description:
    'Ateliers éducatifs autour de la vie affective, relationnelle et sexuelle, animés par deux éducateurs spécialisés en Loire-Atlantique.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
