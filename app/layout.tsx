// app/layout.js
import './globals.css'
import { Nunito } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const nunito = Nunito({ subsets: ['latin'], weight: ['300','400','600'] })

export const metadata = {
  title: 'Dis-moi',
  description: 'Ateliers éducatifs autour de la vie affective, relationnelle et sexuelle'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-[#fef9f6]"> 
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
