// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-[var(--color-mint)] mt-10">
      <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
        <div className="text-center">
          © {new Date().getFullYear()} Dis-moi — Ateliers éducatifs
        </div>
      </div>
    </footer>
  )
}