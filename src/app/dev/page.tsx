'use client';

import { CheckCircle, Clock, AlertTriangle, Code, Database, Shield, Zap, Eye, Brain, Wallet, Globe } from 'lucide-react';

export default function DevPage() {
  const systems = {
    active: [
      {
        name: 'Core Navigation',
        description: 'Multi-page routing system with portal isolation architecture. Diesel City hub with system navigation.',
        icon: Globe,
        status: 'operational'
      },
      {
        name: '3D Model Viewer (Babylon.js)',
        description: 'WebGL-based 3D rendering engine for character visualization and scene management.',
        icon: Eye,
        status: 'operational'
      },
      {
        name: 'AI Model Generation (Genkit/Tripo3D)',
        description: 'AI-powered 3D model generation and processing pipeline for dynamic content creation.',
        icon: Brain,
        status: 'operational'
      },
      {
        name: 'State Management',
        description: 'React state management with Context API for global application state and user sessions.',
        icon: Database,
        status: 'operational'
      },
      {
        name: 'Inventory System',
        description: 'Player inventory management with gear tracking, equipment slots, and item statistics.',
        icon: Database,
        status: 'operational'
      },
      {
        name: 'Combat System',
        description: 'Real-time combat mechanics with PvP arena, damage calculation, and battle statistics.',
        icon: Zap,
        status: 'operational'
      },
      {
        name: 'ABEX Banking System',
        description: 'Digital asset management with wallet integration, transaction processing, and ABEX token handling.',
        icon: Wallet,
        status: 'operational'
      },
      {
        name: 'Web3 Wallet Connection',
        description: 'MetaMask and Web3 wallet integration for blockchain transactions and digital asset management.',
        icon: Wallet,
        status: 'operational'
      },
      {
        name: 'Gateway Universe Portal',
        description: 'Inter-dimensional travel system with universe selection, portal mechanics, and transition effects.',
        icon: Globe,
        status: 'operational'
      },
      {
        name: 'MetaHuman DNA Portal',
        description: 'Client-side DNA file validation and metadata extraction operational. Supports MH.4 and DHI format .dna files up to 200MB. Full binary parsing requires Python backend (Phase 2).',
        icon: Code,
        status: 'experimental'
      },
      {
        name: 'Security & Validation',
        description: 'Input sanitization, CSRF protection, and data validation across all user interactions.',
        icon: Shield,
        status: 'operational'
      }
    ],
    planned: [
      {
        name: 'Python DNA Parser Backend',
        description: 'Server-side MetaHuman DNA binary file parsing with full metadata extraction and validation.',
        icon: Code,
        status: 'planned'
      },
      {
        name: 'Character Visualization Engine',
        description: 'Real-time 3D character rendering from DNA data with pose manipulation and animation.',
        icon: Eye,
        status: 'planned'
      },
      {
        name: 'Pilot ID System',
        description: 'Blockchain-based pilot identity management with DNA profile linking and verification.',
        icon: Shield,
        status: 'planned'
      },
      {
        name: 'Multiplayer Infrastructure',
        description: 'Real-time multiplayer networking with WebRTC and server-side game state management.',
        icon: Zap,
        status: 'planned'
      }
    ]
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'experimental':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'planned':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'border-green-500/30 bg-green-500/10';
      case 'experimental':
        return 'border-yellow-500/30 bg-yellow-500/10';
      case 'planned':
        return 'border-blue-500/30 bg-blue-500/10';
      default:
        return 'border-gray-500/30 bg-gray-500/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Development Log
            </h1>
            <div className="text-sm text-white/50">
              Genesis-Verse • System Status Dashboard
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        {/* Overview Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
            <div className="text-2xl font-bold text-green-400">{systems.active.length}</div>
            <div className="text-sm text-white/70">Active Systems</div>
          </div>
          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
            <div className="text-2xl font-bold text-blue-400">{systems.planned.length}</div>
            <div className="text-sm text-white/70">Planned Systems</div>
          </div>
          <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
            <div className="text-2xl font-bold text-yellow-400">
              {systems.active.filter(s => s.status === 'experimental').length}
            </div>
            <div className="text-sm text-white/70">Experimental Features</div>
          </div>
          <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
            <div className="text-2xl font-bold text-purple-400">
              {new Date().toLocaleDateString()}
            </div>
            <div className="text-sm text-white/70">Last Updated</div>
          </div>
        </div>

        {/* Active Systems */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-green-400">✅ Active Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {systems.active.map((system, index) => {
              const Icon = system.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border backdrop-blur-sm ${getStatusColor(system.status)}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-white/80" />
                    {getStatusIcon(system.status)}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{system.name}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{system.description}</p>
                  <div className="mt-4 flex items-center">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      system.status === 'operational' ? 'bg-green-500/20 text-green-400' :
                      system.status === 'experimental' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {system.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Planned Systems */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">⏳ Planned Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {systems.planned.map((system, index) => {
              const Icon = system.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border backdrop-blur-sm ${getStatusColor(system.status)}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-white/60" />
                    {getStatusIcon(system.status)}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white/80">{system.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{system.description}</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                      {system.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Development Notes */}
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20">
          <h3 className="text-lg font-bold mb-4 text-cyan-400">📝 Development Notes</h3>
          <div className="space-y-3 text-sm text-white/70">
            <p>• <strong>Portal Architecture:</strong> Experimental features isolated in /portals/ directory for clean separation</p>
            <p>• <strong>Performance:</strong> Client-side DNA validation limits file size to 200MB to prevent browser crashes</p>
            <p>• <strong>Security:</strong> All user inputs validated, no direct file system access from browser</p>
            <p>• <strong>Scalability:</strong> Next.js 14 with app directory provides excellent performance and SEO</p>
            <p>• <strong>Integration:</strong> Web3 wallet connection enables blockchain-based pilot identities</p>
          </div>
        </div>
      </main>
    </div>
  );
}