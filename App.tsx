
import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScratchRow } from './components/ScratchRow';
import { ClaimForm } from './components/ClaimForm';
import { Dice } from './components/Dice';
import { Page2 } from './components/Page2';
import { Page3 } from './components/Page3';
import { PRIZES } from './constants';
import { GameState, AppPath } from './types';

const FloatingElement: React.FC<{ children: React.ReactNode; style: React.CSSProperties }> = ({ children, style }) => (
  <div 
    className="absolute pointer-events-none select-none drop-shadow-2xl animate-pulse"
    style={{ 
      transition: 'transform 10s ease-in-out',
      ...style 
    }}
  >
    {children}
  </div>
);

const BackgroundDecor: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="sunburst-overlay" />
    
    <FloatingElement style={{ top: '10%', left: '5%', transform: 'rotate(15deg) scale(1.4)' }}>
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 border-2 border-yellow-700 flex items-center justify-center text-yellow-900 font-black text-3xl shadow-lg italic">€</div>
    </FloatingElement>
    
    <FloatingElement style={{ top: '45%', left: '12%', transform: 'rotate(-10deg) scale(1)' }}>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 border-2 border-yellow-700 flex items-center justify-center text-yellow-900 font-black text-2xl shadow-lg italic">€</div>
    </FloatingElement>

    <FloatingElement style={{ top: '75%', left: '3%', transform: 'rotate(45deg) scale(1.2)' }}>
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 border-2 border-yellow-700 flex items-center justify-center text-yellow-900 font-black text-4xl shadow-lg italic">€</div>
    </FloatingElement>

    <FloatingElement style={{ top: '15%', right: '8%', transform: 'rotate(-20deg) scale(1.3)' }}>
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 border-2 border-yellow-700 flex items-center justify-center text-yellow-900 font-black text-3xl shadow-lg italic">€</div>
    </FloatingElement>

    <FloatingElement style={{ top: '55%', right: '15%', transform: 'rotate(12deg) scale(1.1)' }}>
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 border-2 border-yellow-700 flex items-center justify-center text-yellow-900 font-black text-3xl shadow-lg italic">€</div>
    </FloatingElement>

    <FloatingElement style={{ top: '85%', right: '5%', transform: 'rotate(-5deg) scale(1.5)' }}>
      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 border-2 border-yellow-700 flex items-center justify-center text-yellow-900 font-black text-5xl shadow-lg italic">€</div>
    </FloatingElement>

    <FloatingElement style={{ top: '25%', left: '20%', opacity: 0.6 }}>
      <span className="text-6xl text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]">★</span>
    </FloatingElement>
    <FloatingElement style={{ top: '65%', right: '25%', opacity: 0.5 }}>
      <span className="text-7xl text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]">★</span>
    </FloatingElement>
    <FloatingElement style={{ bottom: '20%', left: '45%', opacity: 0.4 }}>
      <span className="text-5xl text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]">★</span>
    </FloatingElement>
  </div>
);

const App: React.FC = () => {
  const [revealedRows, setRevealedRows] = useState<number[]>([]);
  const [gameState, setGameState] = useState<GameState>('playing');
  const [currentPath, setCurrentPath] = useState<AppPath>('game');
  const [firstName] = useState('Marco');
  const [cartCount, setCartCount] = useState(0);

  const WINNING_ROW_INDEX = 2;

  const handleRowReveal = (id: number) => {
    if (!revealedRows.includes(id)) {
      setRevealedRows((prev) => [...prev, id]);
      if (id === WINNING_ROW_INDEX) {
        setTimeout(() => {
          setGameState('won');
          document.getElementById('win-announcement')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    }
  };

  const diceData = [[1, 4, 2], [5, 3, 4], [6, 6, 6]];

  if (currentPath === 'page2') {
    return (
      <div className="relative min-h-screen bg-white">
        <div className="sticky top-0 z-50"><Header /></div>
        <Page2 
          firstName={firstName}
          cartCount={cartCount} 
          onAddToCart={() => setCartCount(prev => prev + 1)} 
          onGoToCart={() => setCurrentPath('page3')} 
        />
      </div>
    );
  }

  if (currentPath === 'page3') {
    return (
      <div className="relative min-h-screen bg-white">
        <div className="sticky top-0 z-50"><Header /></div>
        <Page3 />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen scratch-bg text-white pb-20 overflow-x-hidden">
      <div className="relative z-50 bg-white shadow-md"><Header /></div>
      <BackgroundDecor />
      
      <header className="relative z-10 py-12 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block mb-4">
          <div className="bg-yellow-400 text-blue-900 font-black px-6 py-1 rounded-full text-sm uppercase tracking-widest shadow-lg border-2 border-white">
            Exclusivité Web
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-playfair font-black text-white mb-2 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] tracking-tighter italic">
          Jeu de Grattage
        </h1>
        
        <p className="text-2xl md:text-4xl font-black text-yellow-400 mb-8 uppercase tracking-tight drop-shadow-md">
          GAGNEZ JUSQU'À <span className="bg-red-600 text-white px-4 py-1 rounded-lg transform rotate-2 inline-block shadow-xl">1 500 €</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
           <span className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-lg font-bold uppercase shadow-inner">
             3 Chances de Gagner !
           </span>
           <span className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full text-lg font-black uppercase shadow-lg border-2 border-white">
             Ticket Gratuit
           </span>
        </div>

        <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl py-6 px-10 inline-block border-2 border-yellow-400 shadow-2xl transform hover:scale-105 transition-transform">
          <p className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
            GRATTEZ ET DÉCOUVREZ VOTRE GAIN !
          </p>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
        {/* Barra Lateral: Instruções e Ganhos */}
        <aside className="lg:col-span-4 space-y-8 order-1 flex flex-col h-full">
          {/* Instruções primeiro */}
          <section className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl flex-grow">
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Comment jouer ?</h2>
            <ul className="space-y-4 text-gray-200">
              <li className="flex gap-4 items-center">
                <span className="bg-yellow-400 text-blue-900 w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center font-black shadow-lg">1</span>
                <span className="font-bold text-sm">Grattez les 3 zones de jeu avec votre souris ou votre doigt.</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="bg-yellow-400 text-blue-900 w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center font-black shadow-lg">2</span>
                <span className="font-bold text-sm">Si 3 dés sont identiques ou forment une suite, vous gagnez !</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="bg-yellow-400 text-blue-900 w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center font-black shadow-lg">3</span>
                <span className="font-bold text-sm">Si vous trouvez la combinaison gagnante, remplissez les informations ci-dessous pour réclamer votre gain*</span>
              </li>
            </ul>
            <p className="mt-6 text-[10px] text-gray-400 font-medium italic leading-tight">
              *Jeu gratuit soumis à probabilités et à tirage au sort, sous contrôle par Comissaire de Justice.
            </p>
          </section>

          {/* Table de Gains depois */}
          <section className="gold-border bg-blue-900/80 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-2xl font-black text-yellow-400 mb-6 border-b-2 border-yellow-400/30 pb-2 uppercase italic tracking-tighter">Table des Gains</h2>
            <div className="space-y-4">
              {PRIZES.map((prize, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group border border-white/5">
                  <span className="text-blue-200 text-[10px] font-black uppercase tracking-[0.2em]">{prize.label}</span>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      {prize.combination.map((val, idx) => (
                        <div key={idx} className="w-10 h-10 transform transition-transform group-hover:scale-110"><Dice value={val} className="!w-10 !h-10 rounded-lg shadow-md border border-gray-100" /></div>
                      ))}
                    </div>
                    <span className="text-2xl font-black text-yellow-400/60 select-none">=</span>
                    <span className="text-2xl md:text-3xl font-black text-yellow-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap">{prize.amount.toLocaleString()} €</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>

        {/* Zona de Jogo: Raspadinhas */}
        <div className="lg:col-span-8 space-y-8 order-2 flex flex-col h-full">
          <div className="relative p-3 md:p-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] gold-border flex-grow flex flex-col">
            
            <div className="absolute -top-10 -right-6 z-20 w-36 h-36 bg-red-600 rounded-full border-4 border-white shadow-2xl flex flex-col items-center justify-center transform rotate-12 transition-transform hover:rotate-0 cursor-default select-none animate-bounce">
              <span className="text-white font-black text-xl leading-none text-center px-2">JEU GRATUIT !</span>
              <div className="w-16 h-[2px] bg-white/40 my-2"></div>
              <span className="text-white text-[10px] font-bold text-center leading-tight uppercase px-4">Sans obligation d'achat !</span>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-10 space-y-6 md:space-y-10 shadow-inner border-2 border-yellow-600/20 flex-grow flex flex-col justify-center">
              <div className="flex justify-between items-center border-b-4 border-double border-gray-200 pb-6">
                <div className="text-blue-900 font-black text-2xl italic tracking-tighter uppercase">Ticket de Jeu</div>
                <div className="flex gap-1">
                  {[1,2,3].map(i => <span key={i} className="text-yellow-500 text-2xl">★</span>)}
                </div>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                {diceData.map((row, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between px-2">
                       <span className="text-blue-900 font-black text-xs uppercase italic">{i+1}er Grattage</span>
                       <span className="text-gray-300 font-bold text-xs italic">Zone de Gain #{i+1}</span>
                    </div>
                    <ScratchRow id={i} diceValues={row} onRevealed={() => handleRowReveal(i)} />
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 text-center">
                <span className="text-blue-900 font-black text-xs uppercase tracking-widest opacity-30">NUMÉRO DE SÉRIE : #FR-FDJ-777</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Seção de Vitória (Largura Total) */}
      {gameState === 'won' && (
        <section className="relative z-10 max-w-7xl mx-auto px-4 space-y-12 animate-in fade-in zoom-in duration-500">
          <div id="win-announcement" className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-8 md:p-12 rounded-2xl shadow-2xl text-center border-4 border-white text-blue-900">
            <h2 className="text-5xl md:text-7xl font-playfair font-black mb-3 drop-shadow-md italic">GAGNANT !</h2>
            <p className="text-2xl md:text-3xl font-black uppercase tracking-[0.2em]">Vous remportez <span className="bg-blue-900 text-white px-6 py-1.5 rounded-xl inline-block mt-4 md:mt-0 shadow-lg">1 500 €</span></p>
          </div>
          <div className="w-full">
            <ClaimForm onSuccess={() => setCurrentPath('page2')} />
          </div>
        </section>
      )}

      <footer className="relative z-10 max-w-4xl mx-auto px-4 mt-20 text-center text-blue-200/50 text-xs space-y-4">
        <p>© 2026 Délices Gourmandises - Tous droits réservés.</p>
      </footer>

      <style>{`
        @keyframes bounce-in { 0% { transform: scale(0.3); opacity: 0; } 50% { transform: scale(1.05); } 70% { transform: scale(0.9); } 100% { transform: scale(1); opacity: 1; } }
        .animate-bounce-in { animation: bounce-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>
    </div>
  );
};

export default App;
