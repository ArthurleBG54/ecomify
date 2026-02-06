import React, { useState } from 'react';

export default function EcomifyApp() {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('products');

  const ACCESS_CODE = "ECOM2026"; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ACCESS_CODE) {
      setIsUnlocked(true);
    } else {
      alert("Accès Ecomify réservé. Veuillez entrer votre code.");
    }
  };

  if (!isUnlocked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0f1e]">
        <div className="bg-[#161e31] p-10 rounded-[2rem] shadow-2xl border border-green-500/20 w-full max-w-md text-center">
          {/* Ton Logo ici */}
          <div className="mb-6 flex justify-center">
             <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
               Ecomify
             </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-6">Accès Membre</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Code secret..." 
              className="w-full p-4 bg-[#1f2937] rounded-xl border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all">
              Entrer dans Ecomify
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      
      {/* NAVBAR AVEC TON LOGO */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            {/* Remplacer l'URL par le chemin de ton image logo */}
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold">E</div>
            <span className="text-2xl font-black tracking-tighter text-[#1e293b]">
              Ecom<span className="text-green-500">ify</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-bold text-gray-500 uppercase">
            <button onClick={() => setActiveTab('products')} className={activeTab === 'products' ? "text-blue-600" : ""}>Products</button>
            <button onClick={() => setActiveTab('trending')} className={activeTab === 'trending' ? "text-blue-600" : ""}>Trending</button>
            <button onClick={() => setActiveTab('ads')} className={activeTab === 'ads' ? "text-blue-600" : ""}>Ads Library</button>
            <button onClick={() => setActiveTab('boutique-ia')} className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full">Boutique IA</button>
            <button onClick={() => setActiveTab('ads-ia')} className="bg-blue-600 text-white px-4 py-1.5 rounded-full shadow-md">Ads IA</button>
          </nav>

          <button onClick={() => setIsUnlocked(false)} className="text-xs font-bold text-red-400">LOGOUT</button>
        </div>
      </header>

      {/* CONTENU */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full text-center">
        <h2 className="text-5xl font-black text-gray-900 mb-4 capitalize">Propulsez votre boutique avec Ecomify</h2>
        <p className="text-gray-500 text-lg mb-12">L'IA qui construit, analyse et scale votre e-commerce.</p>
        
        {/* SECTION TARIFS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 border-2 border-gray-100 rounded-3xl hover:border-blue-500 transition cursor-pointer">
            <h3 className="text-xl font-bold mb-4">Plan Standard</h3>
            <p className="text-4xl font-black mb-6">29€<span className="text-sm font-normal text-gray-400">/mois</span></p>
            <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold">Démarrer</button>
          </div>
          <div className="p-8 border-2 border-green-500 rounded-3xl bg-green-50/30 relative">
            <div className="absolute -top-3 right-8 bg-green-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase">Recommandé</div>
            <h3 className="text-xl font-bold mb-4">Plan Ecomify Pro</h3>
            <p className="text-4xl font-black mb-6">79€<span className="text-sm font-normal text-gray-400">/mois</span></p>
            <button className="w-full py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg">Devenir un Pro</button>
          </div>
        </div>
      </main>

      {/* CHATBOT ECOMIFY */}
      <div className="fixed bottom-8 right-8">
        {chatOpen && (
          <div className="bg-white shadow-2xl rounded-2xl w-80 h-96 mb-4 border border-gray-200 flex flex-col animate-in fade-in zoom-in duration-300">
            <div className="bg-[#1e293b] p-4 text-white font-bold flex justify-between items-center">
              <span>Chat Ecomify 🤖</span>
              <button onClick={() => setChatOpen(false)}>✕</button>
            </div>
            <div className="flex-1 p-4 text-sm text-gray-600">
              Posez vos questions sur vos produits ou vos publicités ici.
            </div>
            <input type="text" placeholder="Comment puis-je t'aider ?" className="p-4 border-t outline-none focus:bg-gray-50" />
          </div>
        )}
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-green-500 rounded-2xl shadow-xl flex items-center justify-center text-3xl text-white transform hover:scale-110 active:scale-95 transition"
        >
          {chatOpen ? '✕' : '💬'}
        </button>
      </div>
    </div>
  );
}
