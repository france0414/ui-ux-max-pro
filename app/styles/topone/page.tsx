'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Menu,
    X,
    ChevronRight,
    Play,
    Settings,
    Cpu,
    Award,
    Globe,
    ArrowUpRight,
    Maximize2,
    Zap,
    Activity,
    ArrowRight
} from 'lucide-react';

export default function TopOnePage() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950 overflow-x-hidden">

            {/* Cinematic Navigation - Angled */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-zinc-950/90 backdrop-blur-xl py-3 border-b border-amber-500/10' : 'bg-transparent py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
                    {/* Decorative Angled Line */}
                    <div className={`absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-amber-500/10 to-transparent -skew-x-12 transform origin-top-right transition-transform duration-700 ${scrollY > 50 ? 'translate-x-0' : 'translate-x-full'}`}></div>

                    {/* Logo */}
                    <div className="flex items-center gap-3 group cursor-pointer relative z-10">
                        <div className="w-12 h-12 border-2 border-amber-500 flex items-center justify-center relative overflow-hidden transform -skew-x-12 hover:skew-x-0 transition-transform duration-300">
                            <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="font-serif text-2xl font-bold text-amber-500 group-hover:text-zinc-950 transition-colors z-10 transform skew-x-12 group-hover:skew-x-0">T</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-[0.2em] leading-none text-white group-hover:text-amber-500 transition-colors">TOP-ONE</span>
                            <span className="text-[0.6rem] text-zinc-500 uppercase tracking-widest leading-none mt-1 group-hover:text-zinc-400 transition-colors">Precision Machinery</span>
                        </div>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-12 relative z-10">
                        {['Machinery', 'OEM/ODM', 'Industries', 'Global'].map((item) => (
                            <a key={item} href="#" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group py-2">
                                <span className="relative z-10">{item}</span>
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"></span>
                                <span className="absolute -top-1 -right-2 w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button - Slanted */}
                    <button className="hidden md:flex items-center relative group px-8 py-2 overflow-hidden transform -skew-x-12 border border-zinc-700 hover:border-amber-500 transition-colors">
                        <div className="absolute inset-0 bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                        <span className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 group-hover:text-zinc-950 transform skew-x-12 transition-colors">
                            Contact <Zap className="w-3 h-3 fill-current" />
                        </span>
                    </button>
                </div>
            </nav>

            {/* Hero Section - Dynamic & Asymmetric */}
            <section ref={heroRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
                {/* Dynamic Background Layers */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-[url('https://picsum.photos/seed/dark_metal/1920/1080')] bg-cover bg-center opacity-20 filter contrast-125 transition-transform duration-100 ease-out"
                        style={{ transform: `scale(1.1) translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900/90 to-amber-900/20"></div>
                </div>

                {/* Slanted Overlay Shapes */}
                <div className="absolute top-0 right-0 w-[60%] h-full bg-zinc-900/10 -skew-x-12 border-l border-white/5 pointer-events-none transform translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-[40%] h-[120%] bg-amber-500/5 rotate-12 pointer-events-none blur-3xl"></div>

                {/* Hero Content */}
                <div className="relative z-10 text-center w-full max-w-7xl px-4 flex flex-col items-center">

                    <div className="relative mb-8 group">
                        <div className="absolute -inset-4 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <span className="relative inline-block border border-amber-500/30 bg-zinc-950/50 backdrop-blur-md px-6 py-2 text-amber-400 text-xs font-bold uppercase tracking-[0.4em] transform skew-x-[-10deg] hover:skew-x-0 transition-transform duration-300 cursor-default">
                            <span className="block transform skew-x-[10deg] group-hover:skew-x-0 transition-transform duration-300">Engineering Excellence</span>
                        </span>
                    </div>

                    <h1 className="text-7xl md:text-[10rem] font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-6 tracking-tighter leading-none transform -skew-x-6 relative select-none">
                        PRECISION
                        <div className="absolute top-0 left-1 text-amber-500/10 -z-10 blur-sm transform translate-x-2 translate-y-2">PRECISION</div>
                    </h1>

                    <div className="flex items-center gap-6 md:gap-12 mb-12">
                        <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent to-amber-500"></div>
                        <p className="text-zinc-300 text-lg md:text-2xl font-light tracking-wide uppercase">
                            Advanced CNC Solutions
                        </p>
                        <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-transparent to-amber-500"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
                        <button className="relative group overflow-hidden px-10 py-5 bg-amber-500 text-zinc-950 font-black uppercase tracking-widest text-sm clip-path-slant-right hover:bg-white transition-colors duration-300">
                            <span className="relative z-10 flex items-center gap-3">
                                Explore Models <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                        </button>

                        <button className="group flex items-center gap-4 px-8 py-4 text-zinc-400 hover:text-white transition-colors">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <div className="absolute inset-0 border border-zinc-600 rounded-full group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-500"></div>
                                <div className="absolute inset-0 border border-amber-500 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
                                <Play className="w-4 h-4 fill-current relative z-10" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest group-hover:underline decoration-amber-500 underline-offset-4 decoration-2">See It In Action</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Diagonal Cut Section - The Showcase */}
            <section className="py-40 relative bg-zinc-900 overflow-hidden clip-path-diagonal">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-[length:20px_20px] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Content Side */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="inline-block mb-6 relative">
                                <div className="absolute -inset-2 bg-amber-500/20 skew-x-[-12deg]"></div>
                                <h2 className="relative text-amber-500 font-bold text-xs uppercase tracking-[0.3em]">Flagship Series</h2>
                            </div>
                            <h3 className="text-5xl md:text-7xl font-black italic text-white mb-8 leading-none -ml-1">
                                CNC-500<span className="text-outline-amber text-transparent">X</span>
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-10 border-l-2 border-amber-500 pl-6">
                                Engineered for those who refuse to compromise. Micron-level accuracy meets industrial durability in a package that redefines what's possible.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { label: 'Positioning', val: '0.003', unit: 'mm' },
                                    { label: 'Rapid Feed', val: '36', unit: 'm/min' },
                                    { label: 'Spindle', val: '20k', unit: 'rpm' }
                                ].map((spec, i) => (
                                    <div key={i} className="group flex items-center justify-between border-b border-zinc-800 pb-4 hover:border-amber-500/50 transition-colors cursor-default">
                                        <span className="text-zinc-500 uppercase text-xs font-bold tracking-widest group-hover:text-amber-500 transition-colors">{spec.label}</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform origin-right">{spec.val}</span>
                                            <span className="text-xs text-zinc-600">{spec.unit}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <button className="flex items-center gap-3 text-amber-500 font-bold uppercase tracking-widest text-xs group hover:text-white transition-colors">
                                    <span className="border-b-2 border-amber-500 pb-1 group-hover:border-white transition-colors">View Technical Specs</span>
                                    <Maximize2 className="w-4 h-4 group-hover:scale-125 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Image Side - Floating & Interactive */}
                        <div className="lg:col-span-7 order-1 lg:order-2 relative perspective-1000">
                            <div className="relative transform transition-transform duration-500 hover:rotate-y-[-5deg] hover:rotate-x-[5deg]">
                                {/* Geometric Decor */}
                                <div className="absolute -top-10 -right-10 w-64 h-64 border-[20px] border-zinc-800 rounded-full opacity-50 blur-sm animate-[spin_20s_linear_infinite]"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>

                                <img
                                    src="https://picsum.photos/seed/cnc_machine_glossy/1000/800"
                                    alt="CNC Machine"
                                    className="relative z-10 w-full object-cover clip-path-slant-left shadow-2xl shadow-amber-900/20 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                                />

                                {/* Interactive Hotspots - Pulsing */}
                                {[
                                    { t: '20%', l: '30%', title: 'Ceramic Spindle', text: 'Thermal stability optimized' },
                                    { t: '60%', l: '60%', title: 'Cast Iron Base', text: 'Meehanite verified' },
                                    { t: '40%', l: '80%', title: 'ATC System', text: '24-tool rapid change' }
                                ].map((spot, idx) => (
                                    <div key={idx} className="absolute z-20 group/spot" style={{ top: spot.t, left: spot.l }}>
                                        <div className="relative">
                                            <div className="w-6 h-6 border-2 border-amber-500 rounded-full flex items-center justify-center cursor-pointer bg-zinc-950/50 backdrop-blur-sm group-hover/spot:bg-amber-500 transition-colors">
                                                <div className="w-2 h-2 bg-amber-500 rounded-full group-hover/spot:bg-zinc-950"></div>
                                            </div>
                                            <div className="absolute w-6 h-6 border-2 border-amber-500 rounded-full animate-ping opacity-50"></div>
                                        </div>

                                        {/* Popover */}
                                        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-48 bg-zinc-900/90 border-l-2 border-amber-500 p-4 opacity-0 group-hover/spot:opacity-100 transform translate-x-4 group-hover/spot:translate-x-0 transition-all duration-300 pointer-events-none backdrop-blur-xl">
                                            <h4 className="text-white text-xs font-bold uppercase mb-1">{spot.title}</h4>
                                            <p className="text-zinc-400 text-[10px] leading-tight">{spot.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Angled Industries - Breaking the Grid */}
            <section className="bg-zinc-950 py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white italic transform -skew-x-6 text-right">
                        SECTORS <span className="text-amber-500">DOMINATED</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row h-[120vh] md:h-[600px] w-full">
                    {[
                        { id: '01', name: 'Aerospace', img: 'https://picsum.photos/seed/aerospace_jet/800/1200' },
                        { id: '02', name: 'Automotive', img: 'https://picsum.photos/seed/car_chassis/800/1200' },
                        { id: '03', name: 'Medical', img: 'https://picsum.photos/seed/medical_tool/800/1200' },
                        { id: '04', name: 'Energy', img: 'https://picsum.photos/seed/wind_turbine/800/1200' }
                    ].map((sector, idx) => (
                        <div key={idx} className="relative flex-1 group transition-all duration-700 ease-in-out hover:flex-[2] overflow-hidden border-r border-zinc-800 hover:border-amber-500/50">
                            {/* Skewed Title Wrapper */}
                            <div className="absolute top-10 left-0 w-full z-20 pointer-events-none mix-blend-difference px-6">
                                <span className="block text-6xl font-black text-transparent text-outline-white opacity-50 group-hover:opacity-100 group-hover:text-white transition-all duration-500 transform -skew-x-12 origin-left">
                                    {sector.name}
                                </span>
                                <span className="text-amber-500 font-mono text-sm mt-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        // 0{idx + 1}
                                </span>
                            </div>

                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-zinc-950/80 group-hover:bg-zinc-950/20 transition-colors duration-700 z-10"></div>
                                <img src={sector.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" alt={sector.name} />
                            </div>

                            {/* Hover Content Bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-zinc-950 to-transparent">
                                <button className="flex items-center gap-4 text-white hover:text-amber-500 transition-colors uppercase font-bold tracking-widest text-xs">
                                    View Case Studies <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Horizontal Scroll Service - Slanted Cards */}
            <section className="py-32 bg-zinc-900 border-t border-zinc-800 relative clip-path-diagonal-reverse mt-[-50px] pt-[150px]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">Workflow</h2>
                            <h3 className="text-4xl text-white font-bold">OEM / ODM Process</h3>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-10 h-10 border border-zinc-700 hover:bg-amber-500 hover:border-amber-500 hover:text-black flex items-center justify-center transition-all cursor-pointer transform -skew-x-12">
                                <ChevronRight className="w-5 h-5 rotate-180 transform skew-x-12" />
                            </div>
                            <div className="w-10 h-10 border border-zinc-700 hover:bg-amber-500 hover:border-amber-500 hover:text-black flex items-center justify-center transition-all cursor-pointer transform -skew-x-12">
                                <ChevronRight className="w-5 h-5 transform skew-x-12" />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-12 snap-x scrollbar-hide px-4">
                        {[
                            { step: '01', title: 'Consult', desc: 'Requirements analysis & feasibility study.' },
                            { step: '02', title: 'Design', desc: '3D CAD modeling & stress simulation.' },
                            { step: '03', title: 'Cast', desc: 'Precision casting with seasoning process.' },
                            { step: '04', title: 'Machine', desc: '5-axis machining of core components.' },
                            { step: '05', title: 'Assemble', desc: 'Hand-scraping & precision assembly.' },
                            { step: '06', title: 'Verify', desc: 'Laser audit & cutting tests.' }
                        ].map((item, i) => (
                            <div key={i} className="min-w-[300px] bg-zinc-950 p-8 border border-zinc-800 hover:border-amber-500 transition-all duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/20 snap-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-zinc-700 group-hover:text-amber-500 transition-colors select-none">{item.step}</div>
                                <div className="mb-6 w-12 h-12 bg-zinc-900 group-hover:bg-amber-500 transition-colors flex items-center justify-center rounded-sm transform rotate-45 group-hover:rotate-0 duration-500">
                                    <Activity className="w-5 h-5 text-zinc-500 group-hover:text-zinc-950 transform -rotate-45 group-hover:rotate-0 transition-transform" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{item.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer - Tech Grid */}
            <footer className="bg-black text-zinc-500 pt-24 pb-12 border-t border-amber-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        <div className="md:col-span-5">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-4xl font-black text-white tracking-widest italic transform -skew-x-6">TOP-ONE</span>
                                <span className="px-2 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase">Industry 4.0</span>
                            </div>
                            <p className="text-zinc-400 max-w-sm mb-8 font-light">
                                Pushing the boundaries of precision engineering since 1988.
                                Taiwan's premier CNC solution provider.
                            </p>
                            <div className="flex gap-4">
                                <input type="email" placeholder="ENTER EMAIL" className="bg-zinc-900 border border-zinc-800 px-4 py-3 w-full text-xs tracking-widest text-white outline-none focus:border-amber-500 transition-colors" />
                                <button className="bg-amber-500 hover:bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-widest transition-colors">
                                    Join
                                </button>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Sitemap</h5>
                            <ul className="space-y-4 text-xs font-medium tracking-wide">
                                <li className="hover:text-amber-500 cursor-pointer transition-colors">MACHINERY</li>
                                <li className="hover:text-amber-500 cursor-pointer transition-colors">TECHNOLOGY</li>
                                <li className="hover:text-amber-500 cursor-pointer transition-colors">SHOWROOM</li>
                                <li className="hover:text-amber-500 cursor-pointer transition-colors">CAREERS</li>
                            </ul>
                        </div>

                        <div className="md:col-span-5">
                            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Global HQ</h5>
                            <div className="grid grid-cols-2 gap-8 text-xs leading-relaxed">
                                <div>
                                    <p className="text-white mb-2 font-bold">TAICHUNG, TAIWAN</p>
                                    <p>No. 6, Ln. 476, Sec. 3<br />Sanfeng Rd., Fengyuan Dist.</p>
                                </div>
                                <div>
                                    <p className="text-white mb-2 font-bold">CONTACT</p>
                                    <p className="hover:text-amber-500 transition-colors cursor-pointer">+886-4-2562-4226</p>
                                    <p className="hover:text-amber-500 transition-colors cursor-pointer">info@topone-m.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em]">
                        <div className="flex gap-8">
                            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
                        </div>
                        <div className="mt-4 md:mt-0 opacity-50">
                            © 2026 TOP-ONE MACHINERY CO., LTD.
                        </div>
                    </div>
                </div>
            </footer>

            {/* Global CSS for Clip Paths & Animations */}
            <style jsx global>{`
         .clip-path-slant-right {
            clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
         }
         .clip-path-slant-left {
            clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
         }
         .clip-path-diagonal {
            clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
         }
         .clip-path-diagonal-reverse {
            clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
         }
         .text-outline-white {
            -webkit-text-stroke: 1px rgba(255,255,255,0.3);
            color: transparent;
         }
         .text-outline-amber {
            -webkit-text-stroke: 1px #f59e0b;
            color: transparent;
         }
         @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
         }
      `}</style>
        </div>
    );
}
