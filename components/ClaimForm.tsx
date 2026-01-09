
import React, { useState, useEffect } from 'react';

interface ClaimFormProps {
  onSuccess: () => void;
}

export const ClaimForm: React.FC<ClaimFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [partNumber, setPartNumber] = useState('');

  useEffect(() => {
    // Générer un numéro de participation aléatoire de 9 chiffres
    const num = Math.floor(100000000 + Math.random() * 900000000).toString();
    setPartNumber(num);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1200);
  };

  return (
    <div id="claim-form" className="w-full mx-auto mt-12 p-6 md:p-12 bg-white rounded-xl shadow-2xl text-gray-800">
      {/* Participation Number Header */}
      <div className="text-center mb-10 pb-8 border-b border-gray-100">
        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">Votre numéro de participation exclusif</p>
        
        <div className="inline-flex border-2 border-[#d10000] rounded-xl overflow-hidden shadow-sm">
          {partNumber.split('').map((digit, idx) => (
            <div 
              key={idx} 
              className={`
                flex items-center justify-center w-9 h-12 md:w-11 md:h-14
                text-2xl md:text-3xl font-black text-black bg-white
                ${idx !== partNumber.length - 1 ? 'border-r-2 border-[#d10000]' : ''}
              `}
            >
              {digit}
            </div>
          ))}
        </div>
      </div>

      {/* Intro Text */}
      <div className="text-center mb-10 space-y-1">
        <p className="text-[13px] md:text-sm text-gray-700 font-medium leading-tight">
          Je vérifie et complète mes coordonnées ci-dessous et valide mon numéro de participation et je découvre les offres qui me sont réservées
        </p>
        <p className="text-[13px] md:text-sm text-gray-700 font-medium">
          Jeu réservé aux personnes habitant en France métropolitaine
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {/* Email & Civilité */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Email <span className="text-red-600">*</span></label>
            <input required type="email" placeholder="Email" className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-300" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Civilité <span className="text-red-600">*</span></label>
            <select required className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-gray-500">
              <option value="">Choisissez une option</option>
              <option value="M">M.</option>
              <option value="Mme">Mme</option>
            </select>
          </div>

          {/* Nom & Prénom */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Nom <span className="text-red-600">*</span></label>
            <input required type="text" placeholder="Nom" className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-300" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Prénom <span className="text-red-600">*</span></label>
            <input required type="text" placeholder="Prénom" className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-300" />
          </div>

          {/* Adresse & Complément */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Adresse <span className="text-red-600">*</span></label>
            <input required type="text" placeholder="Adresse" className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-300" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Complément d'adresse (optionnel)</label>
            <input type="text" placeholder="Résidence, bâtiment, n° d'appartement, etc." className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-300" />
          </div>

          {/* Code Postal & Ville */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Code postal <span className="text-red-600">*</span></label>
            <input required type="text" placeholder="Code postal" className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-300" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Ville <span className="text-red-600">*</span></label>
            <input required type="text" placeholder="Saisissez votre ville" className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-300" />
          </div>

          {/* Téléphone & Mobile */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Téléphone <span className="text-red-600">*</span></label>
            <input required type="tel" placeholder="Téléphone" className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-300" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Mobile</label>
            <input type="tel" placeholder="Mobile" className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-300" />
          </div>

          {/* Date de naissance */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">Date de naissance <span className="text-red-600">*</span></label>
            <div className="relative">
              <input required type="date" placeholder="jj/mm/aaaa" className="w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-gray-600 appearance-none" />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Mandatory info label */}
          <div className="flex items-end justify-end pb-2">
            <p className="text-xs text-gray-500"><span className="text-red-600 font-bold">*</span> champs obligatoires</p>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-3 pt-6">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
            <span className="text-[13px] text-gray-700 leading-snug">
              <span className="text-red-600 font-bold">Oui</span>, je certifie que mes coordonnées sont exactes, vous pouvez m'adresser les offres et jeux de vos différentes enseignes à ces coordonnées <span className="text-red-600">*</span>
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
            <span className="text-[13px] text-gray-700 leading-snug">
              <span className="text-red-600 font-bold">Oui</span>, en validant mon numéro de participation ci-dessous, je déclare avoir lu et accepté <a href="#" className="text-sky-500 underline hover:text-sky-600">le règlement de jeu</a> <span className="text-red-600">*</span>
            </span>
          </label>
        </div>

        <div className="flex justify-center pt-8">
          <button
            disabled={loading}
            type="submit"
            className="w-full py-4 bg-[#d10000] hover:bg-[#b00000] text-white text-lg md:text-xl font-bold rounded-lg shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide"
          >
            {loading ? 'Validation en cours...' : 'Je valide mon numéro de participation !'}
          </button>
        </div>
      </form>
    </div>
  );
};
