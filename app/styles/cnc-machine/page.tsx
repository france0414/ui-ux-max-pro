// app/styles/cnc-machine/page.tsx
// Refactored using:
// 1. ui-ux-pro-max (Design Strategy: Industrial Minimalism, Dark + Amber)
// 2. ui-component-library (Structure Templates: Standard Hero, Product Grid, Stats)
"use client";

import { Settings, Cpu, Globe, ChevronRight, Play, Check, ArrowRight, Phone, Mail, MapPin, Maximize, Zap, BarChart } from 'lucide-react';
import { useState } from 'react';

export default function CNCMachinePage() {
    const [activeProductTab, setActiveProductTab] = useState(0);

    const productCategories = [
        { id: 'lathe', name: 'Turning Centers' },
        { id: 'mill', name: 'Machining Centers' },
        { id: 'multi', name: 'Multi-Tasking' },
    ];

    const products = [
        {
            category: 0,
            name: 'CL-2000 Series',
            series: 'HIGH PERFORMANCE',
            description: 'Compact CNC turning center designed for high-volume production of small parts with exceptional accuracy.',
            spec1: '6,000 RPM',
            spec2: '±0.002mm',
            image: 'https://picsum.photos/seed/cnc-lathe-1/600/400'
        },
        {
            category: 0,
            name: 'CL-3500 Heavy Duty',
            series: 'HEAVY CUTTING',
            description: 'Slant bed design with box ways, perfect for heavy -duty cutting of large workpieces.',
            spec1: '3,500 RPM',
            spec2: '750mm Turn',
            image: 'https://picsum.photos/seed/cnc-lathe-2/600/400'
        },
        {
            category: 1,
            name: 'VM-1000 Vertical',
            series: 'MOLD MAKING',
            description: 'High-speed vertical processing center optimized for mold and die layout.',
            spec1: '15,000 RPM',
            spec2: 'Rapid 48m',
            image: 'https://picsum.photos/seed/cnc-mill-1/600/400'
        },
        {
            category: 1,
            name: 'HM-800 Horizontal',
            series: 'PRODUCTION',
            description: 'Horizontal machining center with dual pallet changer for non-stop production.',
            spec1: '10,000 RPM',
            spec2: 'Pallet 800mm',
            image: 'https://picsum.photos/seed/cnc-mill-3/600/400'
        },
        {
            category: 2,
            name: 'MT-3000 Multi-Task',
            series: 'Flagship',
            description: 'Done-in-one capability. Milling, turning, and gear cutting on a single machine.',
            spec1: '5-Axis',
            spec2: 'B-Axis 240°',
            image: 'https://picsum.photos/seed/cnc-multi-1/600/400'
        }
    ];

    const specs = [
        { label: 'Spindle Speed', value: '4,500 - 15,000 RPM' },
        { label: 'Axis Travel (X/Y/Z)', value: '1000 / 600 / 600 mm' },
        { label: 'Rapid Feed Rate', value: '36 m/min' },
        { label: 'Tool Capacity', value: '24 / 30 / 40 Tools' },
        { label: 'Positioning Accuracy', value: '±0.003 mm' },
        { label: 'Repeatability', value: '±0.002 mm' },
    ];

    const filteredProducts = products.filter(p => p.category === activeProductTab);

    return (
        <div className="min-h-screen bg-[#1A1A1A] text-gray-100" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
                .font-inter { font-family: 'Inter', sans-serif; }
            `}</style>

            {/* HEADER (Custom Industrial Theme) */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#F59E0B] flex items-center justify-center rounded-sm">
                            <Settings className="w-6 h-6 text-[#1A1A1A]" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white">PRECISION<span className="text-[#F59E0B]">CNC</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                        <a href="#products" className="text-gray-400 hover:text-[#F59E0B] transition-colors">Production</a>
                        <a href="#specs" className="text-gray-400 hover:text-[#F59E0B] transition-colors">Technology</a>
                        <a href="#global" className="text-gray-400 hover:text-[#F59E0B] transition-colors">Global</a>
                        <button className="px-5 py-2 bg-[#F59E0B] text-[#1A1A1A] font-bold rounded-sm hover:bg-[#FBBF24] transition-colors">
                            Get Quote
                        </button>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION (Pattern: Standard Hero / Dark Mode Variant) */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-6 text-center lg:text-left relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded text-[#F59E0B] text-xs font-bold tracking-widest uppercase mb-6">
                                <Zap className="w-3 h-3" /> Industry 4.0 Ready
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                                Precision <br />
                                <span className="text-[#F59E0B]">Engineering.</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-inter leading-relaxed">
                                Advanced multi-axis CNC machining centers designed for aerospace, automotive, and precision medical manufacturing.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#contact" className="px-8 py-4 bg-[#F59E0B] text-[#1A1A1A] font-bold text-lg rounded-sm hover:bg-[#FBBF24] transition-colors flex items-center justify-center gap-2">
                                    Book Consultation <ArrowRight className="w-5 h-5" />
                                </a>
                                <button className="px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                                    <Play className="w-5 h-5" /> Watch Video
                                </button>
                            </div>
                        </div>

                        {/* Right Image (Hero Visual) */}
                        <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F59E0B]/20 rounded-full blur-3xl"></div>
                            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://picsum.photos/seed/cnc-factory/800/600"
                                    alt="CNC High Tech Factory"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-[#1A1A1A]/90 p-6 border-t border-white/10 flex justify-between items-center backdrop-blur-sm">
                                    <div>
                                        <p className="text-[#F59E0B] font-bold text-xl">0.001 mm</p>
                                        <p className="text-gray-500 text-xs uppercase tracking-wider">Ultra Precision</p>
                                    </div>
                                    <div className="h-8 w-px bg-white/10"></div>
                                    <div>
                                        <p className="text-white font-bold text-xl">24/7</p>
                                        <p className="text-gray-500 text-xs uppercase tracking-wider">Operation</p>
                                    </div>
                                    <div className="h-8 w-px bg-white/10"></div>
                                    <div>
                                        <p className="text-white font-bold text-xl">5-Axis</p>
                                        <p className="text-gray-500 text-xs uppercase tracking-wider">Control</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST / STATS ROW (Pattern: Stats Counter) */}
            <section className="border-y border-white/5 bg-[#141414] py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { value: '40+', label: 'Years Experience' },
                            { value: '85', label: 'Export Countries' },
                            { value: '15k', label: 'Machines Installed' },
                            { value: 'IS0', label: '9001 Certified' },
                        ].map((stat, i) => (
                            <div key={i}>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                                <p className="text-[#F59E0B] font-medium tracking-wide text-sm uppercase">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRODUCTS SECTION (Pattern: Product Grid) */}
            <section id="products" className="py-24 px-6 bg-[#1A1A1A]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Machining Solutions</h2>
                        <p className="text-gray-400 font-inter text-lg">
                            From versatile turning centers to complex 5-axis multitasking machines, we have the solution for every production need.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-[#0D0D0D] p-1 rounded-md border border-white/10">
                            {productCategories.map((cat, i) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveProductTab(i)}
                                    className={`px-6 py-3 rounded-sm text-sm font-bold transition-all ${activeProductTab === i
                                            ? 'bg-[#F59E0B] text-[#1A1A1A] shadow-lg'
                                            : 'text-gray-500 hover:text-white'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid (Using Template Structure) */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product, i) => (
                            <div key={i} className="group bg-[#0D0D0D] border border-white/10 rounded-sm overflow-hidden hover:border-[#F59E0B] transition-colors duration-300">
                                <div className="aspect-[4/3] bg-[#000] relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className="px-3 py-1 bg-[#1A1A1A]/90 backdrop-blur border border-white/10 text-[10px] uppercase font-bold text-[#F59E0B] rounded-sm">
                                            {product.series}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F59E0B] transition-colors">{product.name}</h3>
                                    <p className="text-gray-400 text-sm mb-6 font-inter h-10 line-clamp-2">{product.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-[#F59E0B]" />
                                            <span className="text-white text-sm font-medium">{product.spec1}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Maximize className="w-4 h-4 text-[#F59E0B]" />
                                            <span className="text-white text-sm font-medium">{product.spec2}</span>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 bg-[#1A1A1A] border border-white/10 text-white font-medium text-sm rounded-sm hover:bg-[#F59E0B] hover:text-[#1A1A1A] hover:border-[#F59E0B] transition-all cursor-pointer">
                                        View Specifications
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SPECS SECTION (Pattern: Checklist Grid) */}
            <section id="specs" className="py-24 bg-[#0D0D0D] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#F59E0B]/20 to-transparent rounded-2xl blur-xl"></div>
                            <img
                                src="https://picsum.photos/seed/cnc-specs/600/600"
                                alt="Internal Components"
                                className="relative z-10 w-full rounded-sm shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-white mb-6">Technical Excellence</h2>
                            <p className="text-gray-400 text-lg mb-10 font-inter">
                                Built with a heavy-duty Meehanite cast iron base to ensure maximum stability and vibration damping during high-speed machining.
                            </p>

                            {/* Filter Specs (Checklist) */}
                            <div className="grid gap-4">
                                {specs.map((spec, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-[#1A1A1A] border border-white/5 rounded-sm hover:border-[#F59E0B]/30 transition-colors">
                                        <span className="text-gray-400 font-medium flex items-center gap-3">
                                            <Check className="w-4 h-4 text-[#F59E0B]" />
                                            {spec.label}
                                        </span>
                                        <span className="text-white font-bold">{spec.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <a href="#" className="text-[#F59E0B] font-bold hover:text-white hover:underline flex items-center gap-2 transition-colors">
                                    Download Full Datasheet <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - Keeping existing simple industrial footer structure but cleaned up */}
            <footer className="py-12 px-6 bg-[#000] border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#F59E0B] flex items-center justify-center rounded-sm">
                            <Settings className="w-5 h-5 text-[#1A1A1A]" />
                        </div>
                        <span className="text-xl font-bold text-white">PRECISION<span className="text-[#F59E0B]">CNC</span></span>
                    </div>
                    <p className="text-gray-500 text-sm">© 2026 PrecisionCNC. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
