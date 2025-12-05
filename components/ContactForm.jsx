// components/Logo.jsx
export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div 
        style={{background:'#2596be'}} 
        className="rounded-full w-12 h-12 flex items-center justify-center"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="3" fill="white" />
          <path 
            d="M4 20c0-4 4-6 8-6s8 2 8 6" 
            stroke="white" strokeWidth="1.5" strokeLinecap="round" 
          />
        </svg>
      </div>
      <div>
        <div className="text-lg font-semibold">Dis-moi</div>
        <div className="text-xs text-gray-600">Ateliers éducatifs</div>
      </div>
    </div>
  )
}
