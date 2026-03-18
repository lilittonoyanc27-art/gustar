import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronRight, 
  Star,
  Sparkles,
  Heart,
  Music,
  Gamepad2,
  Cat,
  IceCream,
  Play
} from 'lucide-react';

// --- Types ---

type Section = 'intro' | 'gustar';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('intro');

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative overflow-hidden bg-pink-600 rounded-[40px] p-8 text-white shadow-2xl shadow-pink-500/20">
              <Sparkles className="absolute top-4 right-4 w-12 h-12 text-white/20 animate-pulse" />
              <h2 className="text-4xl font-black mb-4 leading-tight uppercase tracking-tight">Gustar բայը</h2>
              <p className="text-pink-100 text-lg leading-relaxed font-medium">
                Սովորիր, թե ինչպես իսպաներենով ասել այն ամենի մասին, ինչը քեզ դուր է գալիս:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 bg-white border border-slate-200 rounded-[40px] shadow-sm flex items-center gap-6">
                <div className="w-20 h-20 bg-pink-100 rounded-3xl flex items-center justify-center shrink-0">
                  <Heart className="w-10 h-10 text-pink-600 fill-pink-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Ինձ դուր է գալիս...</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Իսպաներենում մենք օգտագործում ենք "Gustar" բայը՝ մեր նախասիրությունների մասին պատմելու համար:
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setActiveSection('gustar')}
              className="w-full py-6 bg-slate-900 text-white rounded-[32px] font-black text-xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-95 shadow-xl"
            >
              ՍԿՍԵԼ ՈՒՍՈՒՄՆԱՍԻՐՈՒԹՅՈՒՆԸ
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        );

      case 'gustar':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-12 pb-20"
          >
            {/* Header */}
            <div className="bg-pink-600 text-white rounded-[40px] p-10 relative overflow-hidden shadow-xl shadow-pink-500/20">
              <Heart className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 rotate-12" />
              <h2 className="text-4xl font-black mb-4 leading-tight">GUSTAR ԲԱՅԸ (ՇԱՏ ՊԱՐԶ)</h2>
              <p className="text-pink-100 text-xl leading-relaxed font-medium">
                Իսպաներենում ասում են ոչ թե «Ես սիրում եմ…», այլ ասում են 👉 «Ինձ դուր է գալիս…»։ Այսինքն՝ ինչպես հայերենում 😊
              </p>
            </div>

            {/* Section 1: Who likes it */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center text-white font-black">1</div>
                <h3 className="text-2xl font-black text-slate-900">Ո՞ւմ է դուր գալիս</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { s: 'Me', a: 'ինձ' },
                  { s: 'Te', a: 'քեզ' },
                  { s: 'Le', a: 'նրան' },
                  { s: 'Nos', a: 'մեզ' },
                  { s: 'Les', a: 'նրանց' }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-200 rounded-3xl flex flex-col items-center shadow-sm hover:border-pink-300 transition-colors">
                    <span className="text-2xl font-black text-pink-600 mb-1">{item.s}</span>
                    <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">{item.a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Gusta vs Gustan */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-black">2</div>
                <h3 className="text-2xl font-black text-slate-900">Gusta թե Gustan</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-indigo-50 border border-indigo-200 rounded-[40px] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-indigo-600">Gusta</span>
                    <span className="px-4 py-1.5 bg-white rounded-full text-indigo-600 text-xs font-black uppercase tracking-widest">Մեկ բան</span>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Օգտագործիր սա, երբ քեզ դուր է գալիս **մեկ** առարկա կամ գործողություն:
                  </p>
                </div>
                <div className="p-8 bg-purple-50 border border-purple-200 rounded-[40px] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-purple-600">Gustan</span>
                    <span className="px-4 py-1.5 bg-white rounded-full text-purple-600 text-xs font-black uppercase tracking-widest">Շատ բաներ</span>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Օգտագործիր սա, երբ քեզ դուր են գալիս **շատ** առարկաներ:
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Examples with Images */}
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-slate-900 px-2">3. Օրինակներ</h3>
              
              <div className="space-y-12">
                {/* Singular Examples */}
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-emerald-600 uppercase tracking-[0.3em] px-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Մեկ բան (Gusta)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group overflow-hidden bg-white border border-slate-200 rounded-[40px] shadow-sm hover:shadow-xl transition-all">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://picsum.photos/seed/icecream/800/600" 
                          alt="Ice cream" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-2xl font-black text-slate-900 mb-2 italic">Me gusta el helado 🍦</p>
                        <p className="text-slate-500 font-medium">(Ինձ դուր է գալիս պաղպաղակը)</p>
                      </div>
                    </div>
                    <div className="group overflow-hidden bg-white border border-slate-200 rounded-[40px] shadow-sm hover:shadow-xl transition-all">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://picsum.photos/seed/music/800/600" 
                          alt="Music" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-2xl font-black text-slate-900 mb-2 italic">Te gusta la música 🎵</p>
                        <p className="text-slate-500 font-medium">(Քեզ դուր է գալիս երաժշտությունը)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plural Examples */}
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] px-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    Շատ բաներ (Gustan)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group overflow-hidden bg-white border border-slate-200 rounded-[40px] shadow-sm hover:shadow-xl transition-all">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://picsum.photos/seed/cats/800/600" 
                          alt="Cats" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-2xl font-black text-slate-900 mb-2 italic">Me gustan los gatos 🐱🐱</p>
                        <p className="text-slate-500 font-medium">(Ինձ դուր են գալիս կատուները)</p>
                      </div>
                    </div>
                    <div className="group overflow-hidden bg-white border border-slate-200 rounded-[40px] shadow-sm hover:shadow-xl transition-all">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://picsum.photos/seed/games/800/600" 
                          alt="Games" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-2xl font-black text-slate-900 mb-2 italic">Te gustan los juegos 🎮</p>
                        <p className="text-slate-500 font-medium">(Քեզ դուր են գալիս խաղերը)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Secret & Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-10 bg-slate-900 text-white rounded-[40px] relative overflow-hidden">
                <Star className="absolute -top-4 -right-4 w-24 h-24 text-white/10 rotate-12" />
                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <div className="p-2 bg-yellow-400 rounded-xl">
                    <Star className="w-6 h-6 text-slate-900 fill-slate-900" />
                  </div>
                  4. Փոքր գաղտնիք
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-black text-xl">1</div>
                    <p className="text-slate-300 font-medium">Եթե կարող ես ասել «մեկ» → <b className="text-white">gusta</b></p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-black text-xl">∞</div>
                    <p className="text-slate-300 font-medium">Եթե կարող ես ասել «շատ» → <b className="text-white">gustan</b></p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-pink-50 border border-pink-100 rounded-[40px] relative overflow-hidden">
                <Play className="absolute -bottom-4 -right-4 w-24 h-24 text-pink-200 rotate-12" />
                <h4 className="text-2xl font-black text-slate-900 mb-6">5. Գործողություն</h4>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Եթե կա բայ (գործողություն), միշտ ասում ենք <b className="text-pink-600">gusta</b>:
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-pink-100">
                    <p className="font-black text-slate-800">Me gusta bailar 💃</p>
                    <p className="text-slate-400 text-xs mt-1">(Ինձ դուր է գալիս պարել)</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-pink-100">
                    <p className="font-black text-slate-800">Me gusta jugar ⚽</p>
                    <p className="text-slate-400 text-xs mt-1">(Ինձ դուր է գալիս խաղալ)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Try it yourself */}
            <div className="bg-gradient-to-br from-pink-500 to-indigo-600 rounded-[50px] p-12 text-center text-white shadow-2xl">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-4xl font-black mb-8 tracking-tight">🎯 ՓՈՐՁԻՐ ԴՈՒ</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { a: 'Ինձ դուր է գալիս շոկոլադը', s: 'Me gusta el chocolate' },
                  { a: 'Քեզ դուր են գալիս շները', s: 'Te gustan los perros' },
                  { a: 'Նրանց դուր է գալիս երգել', s: 'Les gusta cantar' }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/10 backdrop-blur-md rounded-[40px] border border-white/20 flex flex-col items-center justify-center group hover:bg-white/20 transition-all cursor-default">
                    <p className="text-white/60 text-sm font-bold mb-3 uppercase tracking-widest">{item.a}</p>
                    <p className="text-2xl font-black">{item.s}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-pink-100">
      {/* Sidebar / Navigation */}
      <nav className="fixed top-0 left-0 h-full w-20 md:w-72 bg-white border-r border-slate-200 z-50 flex flex-col p-4 md:p-8">
        <div className="mb-12 flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-pink-600/20">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <h1 className="hidden md:block text-xl font-black tracking-tighter uppercase">Spanish Guide</h1>
        </div>

        <div className="flex-1 space-y-2">
          {[
            { id: 'intro', icon: Sparkles, label: 'Ներածություն' },
            { id: 'gustar', icon: Star, label: 'Gustar բայը' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as Section)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                activeSection === item.id 
                  ? 'bg-pink-50 text-pink-600' 
                  : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
              }`}
            >
              <item.icon className={`w-6 h-6 shrink-0 ${activeSection === item.id ? 'text-pink-600' : ''}`} />
              <span className="hidden md:block font-black text-sm uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto hidden md:block">
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Spanish Guide</p>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Սովորիր իսպաներեն հեշտ և արագ:
            </p>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pl-20 md:pl-72 min-h-screen">
        <div className="max-w-4xl mx-auto py-12 px-6 md:py-20 md:px-12">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 z-40 flex items-center justify-between">
        <span className="font-black tracking-tighter uppercase text-sm">Spanish Guide</span>
        <Heart className="w-6 h-6 text-pink-600 fill-pink-600" />
      </div>
    </div>
  );
}
