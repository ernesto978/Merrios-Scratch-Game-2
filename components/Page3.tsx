
import React, { useEffect, useState } from 'react';

export const Page3: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formValues, setFormValues] = useState({
    email: 'mpc.edic@gmail.com',
    civilite: 'Monsieur',
    nom: 'Test Marco',
    prenom: 'Costa',
    adresse: 'Lisboa',
    complement: '',
    codePostal: '75001',
    ville: 'Paris',
    telephone: '0970830011',
    mobile: '',
    infos: ''
  });

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-20">
      {/* Banner Notice */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex items-center border-4 border-[#84b6e2] rounded-sm p-4 bg-white shadow-sm overflow-hidden mb-12">
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight uppercase leading-tight">
              AVIS DE DÉBLOCAGE DE FONDS
            </h2>
            <p className="text-[10px] md:text-xs text-gray-600 font-medium italic mt-1 uppercase">
              Jeu soumis à aléas et à tirage au sort par Commissaire de Justice
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: Order Summary */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2">Récapitulatif de ma commande</h2>
            
            <div className="space-y-4">
              {/* Product 1 */}
              <div className="flex items-center justify-between text-sm">
                <span className="flex-1 font-bold">Rochers Pralinés</span>
                <div className="flex items-center gap-4">
                  <select className="border border-gray-300 rounded p-1 text-xs bg-white">
                    <option>1</option>
                  </select>
                  <span className="text-red-600 font-bold w-16 text-right">11.50€</span>
                  <button className="text-gray-400 hover:text-red-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm3 4a1 1 0 112 0v8a1 1 0 11-2 0V6z"/></svg>
                  </button>
                </div>
              </div>
              
              {/* Product 2 */}
              <div className="flex items-center justify-between text-sm">
                <span className="flex-1 font-bold">Tripes à la Mode de Caen*</span>
                <div className="flex items-center gap-4">
                  <select className="border border-gray-300 rounded p-1 text-xs bg-white">
                    <option>1</option>
                  </select>
                  <span className="text-red-600 font-bold w-16 text-right">14.50€</span>
                  <button className="text-gray-400 hover:text-red-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm3 4a1 1 0 112 0v8a1 1 0 11-2 0V6z"/></svg>
                  </button>
                </div>
              </div>

              {/* Product 3 */}
              <div className="flex items-center justify-between text-sm">
                <span className="flex-1 font-bold">Rillettes Tradition</span>
                <div className="flex items-center gap-4">
                  <select className="border border-gray-300 rounded p-1 text-xs bg-white">
                    <option>1</option>
                  </select>
                  <span className="text-red-600 font-bold w-16 text-right">11.95€</span>
                  <button className="text-gray-400 hover:text-red-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm3 4a1 1 0 112 0v8a1 1 0 11-2 0V6z"/></svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 space-y-2">
              <div className="flex justify-between items-center text-sm font-bold">
                <span>Livraison à domicile sous 48H</span>
                <span className="text-red-600">0€</span>
              </div>
              <p className="text-red-600 text-xs italic font-bold">Frais de livraison offerts dès 20€ d'achat.</p>
            </div>

            <div className="border-t border-gray-100 pt-6 flex justify-between items-center">
              <span className="text-xl font-black text-gray-900">Total</span>
              <span className="text-2xl font-black text-red-600">37.95€</span>
            </div>

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-2 gap-y-12 pt-16">
              {/* Paiement Sécurisé */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <svg className="w-16 h-16 text-black" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="16" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2.5"/>
                    <rect x="14" y="24" width="8" height="6" rx="1" fill="currentColor"/>
                    <path d="M42 40C42 36.6863 44.6863 34 48 34C51.3137 34 54 36.6863 54 40V44C54 47.3137 51.3137 50 48 50C44.6863 50 42 47.3137 42 44V40Z" fill="white" stroke="currentColor" strokeWidth="2"/>
                    <path d="M45 40V39C45 37.3431 46.3431 36 48 36C49.6569 36 51 37.3431 51 39V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="48" cy="43" r="2" fill="currentColor"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-700 leading-tight">Paiement sécurisé</h4>
                <p className="text-xs text-gray-500">Achetez sans risque</p>
              </div>

              {/* Livraison Rapide */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <svg className="w-16 h-16 text-black" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 28H44V48H10V28Z" fill="currentColor"/>
                    <path d="M44 32H54L58 38V48H44V32Z" fill="currentColor"/>
                    <circle cx="20" cy="52" r="4" fill="currentColor"/>
                    <circle cx="48" cy="52" r="4" fill="currentColor"/>
                    <path d="M4 32H16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M6 38H14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M2 44H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-700 leading-tight">Livraison rapide</h4>
                <p className="text-xs text-gray-500">Bonheur garanti</p>
              </div>

              {/* Satisfait ou Remboursé */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <svg className="w-16 h-16 text-black" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 8C20.9543 8 12 16.9543 12 28C12 30.1384 12.3331 32.2001 12.9515 34.1311" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M52 28C52 39.0457 43.0457 48 32 48C29.8616 48 27.7999 47.6669 25.8689 47.0485" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M32 8L36 4M32 8L28 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M25.8689 47.0485L25 42M25.8689 47.0485L30 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <rect x="22" y="22" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="24" y1="26" x2="28" y2="26" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-700 leading-tight">Satisfait ou remboursé</h4>
                <p className="text-xs text-gray-500">Commandez en toute tranquillité</p>
              </div>

              {/* Service Client */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <svg className="w-16 h-16 text-black" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 32V40C16 42.2091 17.7909 44 20 44H24V28H20C17.7909 28 16 29.7909 16 32Z" fill="currentColor"/>
                    <path d="M48 32V40C48 42.2091 46.2091 44 44 44H40V28H44C46.2091 28 48 29.7909 48 32Z" fill="currentColor"/>
                    <path d="M16 32C16 23.1634 23.1634 16 32 16C40.8366 16 48 23.1634 48 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M44 44C44 48.4183 40.4183 52 36 52H32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <rect x="30" y="50" width="4" height="4" rx="2" fill="currentColor"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-700 leading-tight">Service client</h4>
                <p className="text-xs text-gray-500">Besoin d'aide ? Contactez-nous</p>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN: Delivery Form */}
          <section className="space-y-8 bg-white p-2">
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2">Mon adresse de livraison</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold">Email <span className="text-red-600">*</span></label>
                  <input type="email" value={formValues.email} className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 bg-white shadow-inner" readOnly />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold">Civilité <span className="text-red-600">*</span></label>
                  <select className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-800 bg-white">
                    <option>Monsieur</option>
                    <option>Madame</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold">Nom <span className="text-red-600">*</span></label>
                  <input type="text" value={formValues.nom} className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 bg-white shadow-inner" readOnly />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold">Prénom <span className="text-red-600">*</span></label>
                  <input type="text" value={formValues.prenom} className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 bg-white shadow-inner" readOnly />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold">Adresse <span className="text-red-600">*</span></label>
                  <input type="text" value={formValues.adresse} className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 bg-white shadow-inner" readOnly />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold">Complément d'adresse (optionnel)</label>
                  <input type="text" placeholder="Résidence, bâtiment, n° d'appart" className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-300 bg-white" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold">Code postal <span className="text-red-600">*</span></label>
                  <input type="text" value={formValues.codePostal} className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 bg-white shadow-inner" readOnly />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold">Ville <span className="text-red-600">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Saisissez votre ville"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-800 bg-white" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold">Téléphone <span className="text-red-600">*</span></label>
                  <input type="text" value={formValues.telephone} className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 bg-white shadow-inner" readOnly />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold">Mobile</label>
                  <input type="text" placeholder="Mobile" className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-300 bg-white" />
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <label className="text-xs font-bold">Informations complémentaires</label>
                <textarea placeholder="Informations complémentaires" className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-300 bg-white h-24 resize-none"></textarea>
              </div>

              <div className="pt-4 space-y-4">
                <p className="text-[10px] text-gray-400 font-bold">* champs obligatoires</p>
                <label className="flex items-start gap-2 cursor-pointer group">
                  <input required type="checkbox" className="mt-1 w-3 h-3 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                  <span className="text-[11px] text-gray-700 leading-tight">
                    <span className="text-red-600 font-bold">Oui</span>, en validant mon numéro de participation ci-dessous, je declare avoir lu et accepté les <a href="#" className="text-sky-500 underline">conditions générale de ventes</a> et le <a href="#" className="text-sky-500 underline">règlement de jeu</a> <span className="text-red-600 font-bold">*</span>
                  </span>
                </label>
              </div>

              {/* Payment Methods */}
              <div className="flex justify-center gap-3 py-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" className="h-4" alt="AMEX" />
                <div className="bg-[#0051a1] text-white text-[8px] font-bold px-1 py-0.5 rounded flex items-center h-4">CB</div>
              </div>

              <button className="w-full bg-[#d10000] hover:bg-red-800 text-white font-black py-4 rounded-md shadow-lg transition-all active:scale-95 uppercase text-lg tracking-wide">
                Je valide ma commande
              </button>
            </form>
          </section>

        </div>
      </main>
    </div>
  );
};
