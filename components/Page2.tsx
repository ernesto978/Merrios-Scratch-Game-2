
import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: string;
  details: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cakes aux Fruits*",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=400",
    price: 11.70,
    oldPrice: 29.90,
    discount: "-60%",
    details: "2 cakes = 800 g | 14,63 €/kg"
  },
  {
    id: 2,
    name: "Fondants à la Pomme",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=400",
    price: 10.50,
    oldPrice: 21.00,
    discount: "-50%",
    details: "2 paquets = 400 g | 26,25 €/kg"
  },
  {
    id: 3,
    name: "Cerises à l'Eau de Vie*",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=400",
    price: 18.90,
    oldPrice: 31.50,
    discount: "-40%",
    details: "2 boites = 264 g | 71,59 €/kg"
  }
];

interface Page2Props {
  firstName: string;
  cartCount: number;
  onAddToCart: () => void;
  onGoToCart: () => void;
}

export const Page2: React.FC<Page2Props> = ({ firstName, cartCount, onAddToCart, onGoToCart }) => {
  const [secondNumber, setSecondNumber] = useState('');

  useEffect(() => {
    const num = Math.floor(100000000 + Math.random() * 900000000).toString();
    setSecondNumber(num);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      {/* Banner Notice */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex items-center border-4 border-[#84b6e2] rounded-sm p-4 bg-white shadow-sm overflow-hidden mb-8">
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

      {/* Cart Button Nav */}
      <nav className="max-w-6xl mx-auto px-4 flex justify-end mb-8">
        <button 
          onClick={onGoToCart}
          className="relative flex items-center gap-2 bg-[#fcd34d] hover:bg-[#fbbf24] text-black px-8 py-3 rounded-md font-black shadow-md transition-all uppercase text-sm"
        >
          MON PANIER
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </nav>

      {/* Greeting & Info */}
      <div className="max-w-4xl mx-auto text-center px-4 space-y-6 mb-12">
        {/* Participation status moved to top */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold uppercase tracking-wide">BRAVO {firstName} !</h3>
          <p className="text-lg font-bold">Votre participation a bien été enregistrée.</p>
        </div>

        {/* Eligibility message */}
        <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
          Félicitations ! Vous êtes éligible pour gagner <span className="whitespace-nowrap">1 500 €</span> ! Mais ce n'est pas tout...
        </h2>
        
        <p className="text-lg md:text-xl font-medium text-gray-700">
          Par décision de la direction de notre entreprise, nous avons décidé d'augmenter de 100% les chances de gagner ce fabuleux prix pour tous nos clients.
        </p>

        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Profitez de l'offre exclusive que nous vous avons réservée.<br/>
          Passez commande et <b>doublez vos chances de remporter la somme de <span className="whitespace-nowrap">1 500,00 €.</span></b><br/>
          Faites partie du cercle de nos <span className="text-red-600 underline font-bold">Grands Gagnants</span> grâce à un 2<sup>ème</sup> numéro de participation.
        </p>
        <p className="font-bold text-lg">Voici votre 2ème numéro de participation</p>
        
        <div className="inline-flex border-2 border-[#d10000] rounded-xl overflow-hidden shadow-sm">
          {secondNumber.split('').map((digit, idx) => (
            <div key={idx} className={`flex items-center justify-center w-8 h-10 md:w-10 md:h-12 text-xl md:text-2xl font-black text-black bg-white ${idx !== secondNumber.length - 1 ? 'border-r-2 border-[#d10000]' : ''}`}>
              {digit}
            </div>
          ))}
        </div>

        <p className="text-gray-800 font-bold max-w-2xl mx-auto">
          Pour doubler vos chances de gagner <span className="whitespace-nowrap">1 500 Euros</span>, c'est très simple - il vous suffit de commander quelque chose sur cette page.
        </p>
      </div>

      {/* Special Offer Yellow Banner */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="bg-[#facc15] flex flex-col md:flex-row items-center justify-between p-6 rounded-sm shadow-md gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-4xl md:text-5xl font-black text-red-700 leading-none">OFFRE SPÉCIALE</h4>
            <p className="text-2xl md:text-3xl font-black text-black">Jusqu'à -65% de réduction</p>
          </div>
          <div className="text-center flex items-center gap-4">
            <span className="text-4xl font-bold text-red-700">+</span>
            <div className="text-left">
              <h5 className="text-2xl md:text-3xl font-black text-black leading-tight">LIVRAISON OFFERTE</h5>
              <p className="text-lg font-bold text-black">(dès 20 € de commande)</p>
            </div>
          </div>
          <div className="flex items-center bg-black p-4 rounded-lg">
             <span className="text-[#facc15] text-4xl font-black">0€</span>
             <svg className="w-12 h-12 text-[#facc15] ml-2" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10V8a1 1 0 011-1h5a1 1 0 011 1v3h.05a2.5 2.5 0 014.9 0H22V9a3 3 0 00-3-3h-7V4a1 1 0 00-1-1H3z"/></svg>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {PRODUCTS.map(product => (
          <div key={product.id} className="bg-[#f0f9ff] p-4 rounded-sm border border-gray-200 flex flex-col">
            <div className="relative mb-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-sm border border-gray-100" />
              <div className="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1 rounded-sm text-sm">
                {product.discount}
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <h5 className="text-red-700 font-bold text-lg leading-tight">{product.name}</h5>
              <p className="text-gray-500 text-xs italic">{product.details}</p>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-end justify-end gap-2 text-right">
                 <div className="flex flex-col">
                   <span className="text-gray-400 line-through text-xs font-bold">{product.oldPrice.toFixed(2)}€</span>
                   <span className="text-red-600 font-black text-2xl">{product.price.toFixed(2)}€</span>
                 </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col text-[10px] text-gray-400 mb-1">
                  <span>Quantité</span>
                  <select className="border border-gray-300 rounded p-1 text-sm bg-white">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <button 
                  onClick={onAddToCart}
                  className="flex-1 bg-[#d10000] hover:bg-red-800 text-white font-bold text-xs p-2 rounded-sm flex items-center justify-center transition-all uppercase"
                >
                  AJOUTER AU PANIER
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Mentions Footer Section */}
      <div className="max-w-6xl mx-auto px-4 border-t border-gray-200 pt-10 text-center">
        <p className="text-gray-500 font-bold text-sm mb-8 uppercase tracking-wide">
          POUR VOTRE SANTÉ, PRATIQUEZ UNE ACTIVITÉ PHYSIQUE RÉGULIÈRE.
        </p>
        <a href="https://www.testgratagge.fr/" className="text-sky-600 underline block mb-10 text-sm">www.testgratagge.fr/</a>

        {/* Ingredients & Mentions List */}
        <div className="text-left space-y-6">
          <h6 className="font-bold text-gray-400 text-xs uppercase tracking-widest">LISTE DES INGRÉDIENTS</h6>
          <div className="text-[10px] text-gray-400 space-y-3 leading-relaxed">
            <p><b>Mélange Fraîcheur :</b> Mélange Fraîcheur 200g; sucre, sirop de glucose, amidon de BLÉ, amidon de pois, acidifiant: acide lactique, arômes naturels: eucalyptus, menthe, menthol, acide lactique, colorant: E 141. Valeurs nutritionnelles pour 100g: Énergie: 1525,5kJ / 364,5kcal - Matières grasses: 0g dont saturées: 0g; Glucides: 91,1g dont sucres: 69,4g; Protéines: 0g; Sel: 0,1g. Conserver dans un endroit sec entre 18°C et 20°C. Fabriqué en France.</p>
            <p><b>Roll-on concentré à effet chauffant :</b> contient de l'huile de graines de chanvre, de la griffe du diable, des huiles essentielles bio de menthe poivrée et de menthe, et du cannabidiol.</p>
            <p><b>Bonbons Fourrés au Miel :</b> Bonbons Fourrés au Miel 200g/400g: sucre, sirop de glucose, miel 17%, colorant: caramel ordinaire. Valeurs nutritionnelles pour 100g: Énergie: 1540kJ / 368kcal - Matières grasses: 0,1g dont saturées: &lt;0,1g; Glucides: 91,8g dont sucres: 66,6g; Protéines: 0,2g; Sel: &lt;0,1g. Conserver dans un endroit frais et sec. Fabriqué en France.</p>
            <p><b>Ginseng Rouge :</b> Ginseng Rouge/60 gélules: Complément alimentaire à base de ginseng. Agent de charge: maltodextrine, extrait de racine de Panax ginseng titré en ginsénosides, gélule végétale (HPMC, colorant: complexe cuivrique de chlorophylline), émulsifiant: stéarate de magnésium. Pour 4 gélules: 184 mg de racine de ginseng CA Meyer (Panax Ginseng), dont 12,8 mg de ginsénosides. Déconseillé aux femmes enceintes.</p>
            <p><b>Duo de Miel :</b> 240g Duo de Miel: 1 Miel d'Acacia 120g: 100% miel. 1 Miel de Fleurs 120g: 100% miel. Conserver dans un endroit frais et sec, à l'abri de la lumière. Origine du miel: UE, produits conditionnés en France. Valeurs nutritionnelles pour 100g: Énergie: 1429kJ / 336kcal - Matières grasses: 0g dont saturées: 0g; Glucides: 83g dont sucres: 79g; Protéines: 0g; Sel: 0g.</p>
            <p><b>Tisane Bio Digestion¹ :</b> Tisane Bio Digestion¹/30g: MENTHE POIVRÉE* (30%); FENOUIL* (20%); RÉGLISSE* (20%). *Ingrédients issus de l'agriculture biologique. Certifié par Ecocert FR-BIO-01. Peut être consommé chaud ou froid. Verser de l'eau bouillante sur le sachet et laisser infuser 3 à 5 minutes selon l'intensité désirée, puis le retirer. Fabriqué en France. Informations nutritionnelles par sachet de 1,5g: menthe poivrée: 450mg; mélisse: 450mg; fenouil: 300mg; réglisse: 300mg.</p>
            <p><b>Mélange Pep's :</b> Mélange Pep's 250g/500g: raisins secs, sucre, AMANDES, myrtilles, canneberges, baies de goji, huile de tournesol, conservateur: E220, acidifiant: E330, arôme naturel de myrtille. Contient des SULFITES. Peut contenir des traces de: ARACHIDES, GLUTEN, SÉSAME et SOJA. Conserver dans un endroit frais et sec, à l'abri de la lumière. Produit importé des Pays-Bas. Valeurs nutritionnelles pour 100g: Énergie: 1527kJ / 363kcal - Matières grasses: 9,7g dont saturées: 0,7g; Glucides: 58g dont sucres: 52g; Protéines: 7,3g; Sel: 0,15g.</p>
            <p><b>Ail Noir Fermenté :</b> Complément alimentaire à base d'ail noir. Pour 2 gélules: 500 mg d'extrait de bulbe d'ail noir (Allium sativum). Réservé à l'adulte. Déconseillé aux femmes enceintes, allaitantes ou personnes sous anticoagulants.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md text-[10px] text-gray-400 italic">
            Recommandations sur les compléments alimentaires: Ces produits ne sont pas des médicaments, mais des compléments alimentaires. Il est recommandé de ne pas dépasser la dose conseillée. Tenir hors de portée des enfants, à l'abri de la chaleur et de l'humidité. À utiliser dans le cadre d'une alimentation variée et équilibrée et d'un mode de vie sain. Consultez les recommandations spécifiques à chaque product. Fabriqués en France. (UI: Unités Internationales, AR: Apports de Référence).
          </div>
        </div>

        {/* Sticky Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] flex justify-center gap-4 z-50">
           <button className="bg-gray-400 text-white px-6 py-3 rounded-md font-bold uppercase text-[10px] flex-1 max-w-[300px]">
             Je ne souhaite pas doubler <br/> mes chances de gagner <span className="whitespace-nowrap">1 500 €</span>
           </button>
           <button 
             onClick={onGoToCart}
             className="bg-[#d10000] hover:bg-red-800 text-white px-6 py-3 rounded-md font-bold uppercase text-xs flex-1 max-w-[300px] border-2 border-white shadow-lg transition-colors"
           >
             J'APPROUVE <br/> ma participation et mon panier
           </button>
        </div>
      </div>
    </div>
  );
};
