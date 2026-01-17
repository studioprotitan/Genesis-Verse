'use client';

import { useRouter } from 'next/navigation';
import { Package, Sword, Banknote, Dna, ArrowRight } from 'lucide-react';

export default function DieselCityPage() {
  const router = useRouter();

  const navigationItems = [
    {
      id: 'inventory',
      name: 'Inventory',
      icon: Package,
      description: 'Manage your gear and equipment',
      color: 'from-blue-500 to-cyan-500',
      status: 'active'
    },
    {
      id: 'combat',
      name: 'Combat',
      icon: Sword,
      description: 'Battle system and PvP arena',
      color: 'from-red-500 to-orange-500',
      status: 'active'
    },
    {
      id: 'banking',
      name: 'ABEX Banking',
      icon: Banknote,
      description: 'Manage your digital assets',
      color: 'from-green-500 to-emerald-500',
      status: 'active'
    },
    {
      id: 'metahuman',
      name: 'MetaHuman Portal',
      icon: Dna,
      description: 'DNA file validation and character creation',
      color: 'from-purple-500 to-pink-500',
      status: 'active'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Diesel City
            </h1>
            <div className="text-sm text-white/50">
              Genesis-Verse Hub • Pilot Operations Center
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        {/* Welcome Banner */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-2">🏙️ Welcome to Diesel City</h2>
          <p className="text-white/70">
            Your central hub for all Genesis-Verse operations. Access inventory management,
            combat systems, banking, and experimental features from here.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'inventory') router.push('/inventory');
                  else if (item.id === 'combat') router.push('/combat');
                  else if (item.id === 'banking') router.push('/banking');
                  else if (item.id === 'metahuman') router.push('/portals/metahuman');
                }}
                className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                    {item.status === 'active' && (
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-left">{item.name}</h3>
                  <p className="text-sm text-white/60 text-left mb-4">{item.description}</p>
                  <div className="flex items-center text-sm text-white/50 group-hover:text-white/80 transition-colors">
                    <span>Access</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Status Panel */}
        <div className="mt-8 p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">📊 System Status</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-white/50">Web3 Wallet</p>
              <p className="text-green-400 font-semibold">✅ Connected</p>
            </div>
            <div>
              <p className="text-white/50">Gateway Universe</p>
              <p className="text-green-400 font-semibold">✅ Active</p>
            </div>
            <div>
              <p className="text-white/50">Inventory System</p>
              <p className="text-green-400 font-semibold">✅ Operational</p>
            </div>
            <div>
              <p className="text-white/50">Combat System</p>
              <p className="text-green-400 font-semibold">✅ Ready</p>
            </div>
            <div>
              <p className="text-white/50">ABEX Banking</p>
              <p className="text-green-400 font-semibold">✅ Online</p>
            </div>
            <div>
              <p className="text-white/50">MetaHuman Portal</p>
              <p className="text-green-400 font-semibold">✅ Experimental</p>
            </div>
            <div>
              <p className="text-white/50">Pilot ID System</p>
              <p className="text-yellow-400 font-semibold">⏳ Phase 4</p>
            </div>
            <div>
              <p className="text-white/50">Character Visualization</p>
              <p className="text-yellow-400 font-semibold">⏳ Phase 3</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}