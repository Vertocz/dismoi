import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-mint mt-10">
      <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
          <span>© {new Date().getFullYear()} Dis-moi — Ateliers éducatifs</span>
          <Link href="/mentions-legales" className="underline underline-offset-2 hover:text-black">
            Mentions légales
          </Link>
          <Link href="/donnees-personnelles" className="underline underline-offset-2 hover:text-black">
            Données personnelles
          </Link>
        </div>
      </div>
    </footer>
  )
}
