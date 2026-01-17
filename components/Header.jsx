// components/Header.jsx
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
          <div className="relative w-40 md:w-56 lg:w-72 h-auto">
            <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={200}
              height={200}
              style={{ width: "auto", height: "auto", maxWidth: "100%", minWidth: "200px" }}
            />
            </Link>
          </div>
        

        <div className="flex items-center gap-3">
          <Link href="/qui-sommes-nous" className="titre">Qui sommes-nous ?</Link>
          <Link href="/ateliers" className="titre">Ateliers</Link>
          <Link href="/contact" className="titre">Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
