// components/Header.jsx
import Link from 'next/link'
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#fef9f6] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between barriecito">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-40 md:w-56 lg:w-72 h-auto">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              style={{ width: "auto", height: "auto", maxWidth: "100%" }}
            />
          </div>
        </Link>

        <nav className="flex items-center gap-3">
          <Link href="/qui-sommes-nous" className="inline-block px-8 py-4 rounded-full barriecito-regular text-[#1911ae] 
             bg-[#06e5a2] hover:bg-[#f6b0be] text-2xl hover:border-4 hover:py-3 hover:px-7">Qui sommes-nous</Link>
          <Link href="/ateliers" className="inline-block px-8 py-4 rounded-full barriecito-regular text-[#1911ae] 
             bg-[#06e5a2] hover:bg-[#f6b0be] text-2xl hover:border-4 hover:py-3 hover:px-7">Ateliers</Link>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-full barriecito-regular text-[#1911ae] 
             bg-[#06e5a2] hover:bg-[#f6b0be] text-2xl hover:border-4 hover:py-3 hover:px-7">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
