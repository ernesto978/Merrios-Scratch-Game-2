
import React from 'react';

const Logo: React.FC = () => (
  <div className="relative flex items-center justify-center w-64 h-24">
    <img 
      src="logo.png" 
      alt="Délices Gourmandises" 
      className="max-w-full max-h-full object-contain"
      onError={(e) => {
        // Fallback simple si l'image n'est pas trouvée
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement!.innerHTML = '<span class="font-playfair italic text-2xl font-black text-[#6d1a36]">Délices Gourmandises</span>';
      }}
    />
  </div>
);

export const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-4 md:px-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Right: Legal Information & Menu */}
        <div className="flex flex-col items-center md:items-end text-[#4a5568] space-y-3">
          {/* Disclaimer Text */}
          <p className="text-[11px] md:text-xs text-center md:text-right">
            Jeu soumis à aléas et à tirage au sort par Commissaire de Justice - 
            <a href="#" className="text-sky-500 hover:underline ml-1">voir le règlement de jeu</a>
          </p>

          {/* Navigation Menu */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-2 text-[10px] md:text-[11px] font-bold tracking-tighter uppercase whitespace-nowrap">
            <a href="#" className="hover:text-black transition-colors">MENTIONS LÉGALES</a>
            <span>|</span>
            <a href="#" className="hover:text-black transition-colors">DONNÉES PERSONNELLES ET COOKIES</a>
            <span>|</span>
            <a href="#" className="hover:text-black transition-colors">RÈGLEMENT DE JEU</a>
            <span>|</span>
            <a href="#" className="hover:text-black transition-colors">CONDITIONS GÉNÉRALES DE VENTE</a>
            <span>|</span>
            <a href="#" className="hover:text-black transition-colors">CONTACT</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
