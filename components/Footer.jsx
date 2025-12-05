// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 roboto">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600"> 
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Dis-moi — Ateliers éducatifs</div>
          <div>Mentions légales • Politique de confidentialité</div>
        </div>
      </div>
    </footer>
  )
}
