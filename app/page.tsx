"use client";

import { useState } from 'react';
import { StyleCard } from '../components/StyleCard';
import { STYLES_DATABASE } from '../lib/styles-data';
import { Palette, Layers, Layout, Zap, Search } from 'lucide-react';

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'skill' | 'landing'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStyles = STYLES_DATABASE.filter((style) => {
    const matchesFilter =
      filter === 'all'
        ? true
        : filter === 'skill'
          ? style.usedSkill
          : style.type === 'Landing Page';

    const matchesSearch = style.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      style.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const totalStyles = STYLES_DATABASE.length;
  const totalColors = STYLES_DATABASE.reduce((acc, curr) => acc + curr.primaryColors.length, 0);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
              UI/UX Design Showcase
            </h1>
            <p className="text-slate-400 text-lg">
              Exploring {totalStyles} design patterns & {totalColors}+ color combinations
            </p>
          </div>

          {/* Stats Badges */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center bg-white/5 rounded-lg p-3 border border-white/10">
              <span className="text-2xl font-bold text-white">{totalStyles}</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Styles</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 rounded-lg p-3 border border-white/10">
              <span className="text-2xl font-bold text-white">4</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Industries</span>
            </div>
          </div>
        </div>

        {/* Controls Area */}
        <div className="flex flex-col md:flex-row gap-6 bg-slate-800/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search styles, keywords..."
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex bg-slate-900/50 p-1 rounded-lg border border-slate-700">
            {[
              { id: 'all', label: 'All Styles', icon: Layout },
              { id: 'skill', label: 'Skill Generated', icon: Zap },
              { id: 'landing', label: 'Landing Pages', icon: Layers },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id as any)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium transition-all ${filter === item.id
                    ? 'bg-slate-700 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
              >
                <item.icon className={`w-4 h-4 ${filter === item.id ? 'text-blue-400' : ''}`} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid Content */}
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStyles.map((style) => (
            <StyleCard key={style.id} data={style} />
          ))}
        </div>

        {filteredStyles.length === 0 && (
          <div className="text-center py-32">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-300 mb-2">No styles found</h3>
            <p className="text-slate-500">Try adjusting your search or filters</p>
          </div>
        )}
      </main>
    </div>
  );
}
