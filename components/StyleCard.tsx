// components/StyleCard.tsx
import Link from 'next/link';
import { StyleData } from '@/lib/styles-data';

interface StyleCardProps {
    data: StyleData;
}

export function StyleCard({ data }: StyleCardProps) {
    const style = data;
    const complexityColors = {
        Low: 'bg-green-500/20 text-green-300',
        Medium: 'bg-yellow-500/20 text-yellow-300',
        High: 'bg-red-500/20 text-red-300',
    };

    return (
        <Link
            href={style.implemented ? `/styles/${style.slug}` : '#'}
            className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 ${style.implemented
                ? 'hover:bg-white/10 hover:border-purple-500/50 cursor-pointer'
                : 'opacity-50 cursor-not-allowed'
                }`}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
                    {style.type}
                </span>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${complexityColors[style.complexity]}`}>
                    {style.complexity}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {style.id}. {style.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-400 mb-3 line-clamp-2">{style.description}</p>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mb-4">
                {style.keywords.slice(0, 3).map((keyword, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-md bg-slate-700/50 text-slate-300">
                        {keyword}
                    </span>
                ))}
            </div>

            {/* Color Palette */}
            <div className="mb-3">
                <span className="text-xs text-slate-500 block mb-2">Color Palette:</span>
                <div className="flex gap-2">
                    {style.primaryColors.slice(0, 4).map((color, idx) => (
                        <div
                            key={idx}
                            className="w-8 h-8 rounded-lg border border-white/20"
                            style={{ background: color }}
                            title={color}
                        />
                    ))}
                </div>
            </div>

            {/* Best For */}
            <div className="text-sm">
                <span className="text-slate-500">Best For: </span>
                <span className="text-emerald-300">{style.bestFor.slice(0, 2).join(', ')}</span>
            </div>

            {/* Accessibility */}
            <div className="text-sm mt-2">
                <span className="text-slate-500">Accessibility: </span>
                <span className="text-amber-300">{style.accessibility}</span>
            </div>

            {/* Status Badge */}
            {style.implemented ? (
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold">
                    ✓ Live
                </div>
            ) : (
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-slate-500/20 text-slate-400 text-xs font-semibold">
                    Coming Soon
                </div>
            )}

            {/* Skill Badge */}
            {style.usedSkill && (
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-xs font-semibold flex items-center gap-1">
                    <span className="text-pink-300">🤖</span>
                    <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Skill Made</span>
                </div>
            )}
        </Link>
    );
}
