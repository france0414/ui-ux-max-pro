'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Menu,
    ChevronRight,
    Play,
    ArrowUpRight,
    Maximize2,
    Zap,
    Activity,
    ArrowRight,
    Target,
    Shield,
    Award,
    Globe,
    Users,
    Phone,
    Mail,
    MapPin,
    CheckCircle2
} from 'lucide-react';

export default function TopOneV2Page() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 15,
                y: (e.clientY / window.innerHeight - 0.5) * 15
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const products = [
        { id: 'bed-mill', name: 'CNC Bed Mill', desc: 'High rigidity for heavy-duty cutting operations.', specs: ['Table: 1200x500mm', 'Spindle: 8000rpm', 'Weight: 6500kg'] },
        { id: 'wheel-lathe', name: 'Alloy Wheel Lathe', desc: 'Diamond turning for automotive wheel finishing.', specs: ['Max Dia: 800mm', 'Spindle: 3000rpm', 'Accuracy: ±0.01mm'] },
        { id: 'grinder', name: 'ID/OD Grinder', desc: 'Precision grinding for complex internal geometries.', specs: ['Table: 600x400mm', 'Spindle: 60000rpm', 'Surface: Ra0.1'] },
        { id: 'column', name: 'Column Machines', desc: 'Versatile solutions for general machining needs.', specs: ['Travel X: 1500mm', 'Travel Y: 800mm', 'Travel Z: 600mm'] }
    ];

    const industries = [
        { name: 'Aerospace', desc: 'Machining exotic alloys with strict quality standards.', icon: Target },
        { name: 'Automotive', desc: 'Engine, suspension, and brake components.', icon: Activity },
        { name: 'Medical', desc: 'High precision implants and surgical tools.', icon: Shield },
        { name: 'Energy', desc: 'Components for renewable and traditional power.', icon: Zap },
        { name: 'Micromachining', desc: 'Tools under 0.015" diameter with ultra-tight tolerance.', icon: Target }
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950 overflow-x-hidden">

            {/* Navigation - Hybrid: Clean + Angled Accent */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-zinc-950/95 backdrop-blur-xl py-4 shadow-2xl shadow-black/50' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center relative overflow-hidden transform -skew-x-6 group-hover:skew-x-0 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                            <span className="font-black text-2xl text-zinc-950 transform skew-x-6 group-hover:skew-x-0 transition-transform">T1</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-[0.15em] leading-none text-white">TOP-ONE</span>
                            <span className="text-[0.65rem] text-zinc-500 uppercase tracking-widest leading-none mt-1">Precision Machinery</span>
                        </div>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-10">
                        {['Products', 'Industries', 'OEM/ODM', 'About', 'Contact'].map((item, idx) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group py-2">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <button className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transform -skew-x-6 hover:skew-x-0">
                        <span className="transform skew-x-6 group-hover:skew-x-0">Get Quote</span>
                        <Zap className="w-4 h-4 transform skew-x-6" />
                    </button>
                </div>
            </nav>

            {/* Hero - Hybrid: Structured Content + Dynamic Background */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
                {/* Dynamic Background with Mouse Parallax */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-[url('https://picsum.photos/seed/cnc_precision/1920/1080')] bg-cover bg-center opacity-30 filter contrast-110 transition-transform duration-150 ease-out"
                        style={{ transform: `scale(1.15) translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/70"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                </div>

                {/* Diagonal Accent Shapes */}
                <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-amber-500/5 to-transparent -skew-x-12 pointer-events-none"></div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Hero Content - Grid Layout for Structure */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
                    {/* Left: Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="h-[2px] w-8 bg-amber-500"></div>
                            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em]">Taiwan's CNC Leader</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.95] tracking-tight">
                            Precision <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 italic transform inline-block -skew-x-3">Engineered</span>
                            <br />for Excellence.
                        </h1>

                        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">
                            Since 1988, TOP-ONE delivers world-class CNC machining centers with uncompromising accuracy. Your trusted OEM/ODM partner for aerospace, automotive, and medical industries.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <button className="group relative px-8 py-4 bg-amber-500 text-zinc-950 font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:shadow-xl hover:shadow-amber-500/30">
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Products <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                            </button>
                            <button className="group flex items-center gap-3 px-6 py-4 border border-zinc-700 hover:border-amber-500 text-zinc-300 hover:text-white transition-all">
                                <div className="w-10 h-10 rounded-full border border-zinc-600 group-hover:border-amber-500 flex items-center justify-center group-hover:bg-amber-500 transition-all">
                                    <Play className="w-4 h-4 fill-current group-hover:text-zinc-950" />
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-widest">Watch Film</span>
                            </button>
                        </div>

                        {/* Quick Stats Row */}
                        <div className="flex gap-8 pt-8 border-t border-zinc-800/50">
                            {[
                                { val: '35+', label: 'Years' },
                                { val: '50+', label: 'Countries' },
                                { val: '5000+', label: 'Machines Sold' }
                            ].map((stat, i) => (
                                <div key={i} className="group">
                                    <div className="text-3xl font-black text-white group-hover:text-amber-500 transition-colors">{stat.val}</div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Featured Machine Image */}
                    <div className="relative hidden lg:block">
                        <div className="absolute -top-10 -left-10 w-full h-full border border-amber-500/20 transform rotate-3 rounded-sm"></div>
                        <img
                            src="https://picsum.photos/seed/cnc_hero_machine/800/700"
                            alt="Featured CNC Machine"
                            className="relative z-10 w-full object-cover rounded-sm shadow-2xl shadow-black/50 transform -rotate-2 hover:rotate-0 transition-transform duration-700"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 p-6 z-20 rounded-sm shadow-xl">
                            <div className="text-amber-500 text-3xl font-black">CNC-500X</div>
                            <div className="text-zinc-500 text-xs uppercase tracking-widest">Flagship Model</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section - Tabbed Interface (Structured) */}
            <section id="products" className="py-32 bg-zinc-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left: Section Title */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-32">
                                <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Our Range</span>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    CNC Machining <br />
                                    <span className="italic text-outline-amber text-transparent">Centers</span>
                                </h2>
                                <p className="text-zinc-400 leading-relaxed mb-8">
                                    Delve into our diverse product range, each imbued with innovation, quality, and performance.
                                </p>
                                <a href="#" className="text-amber-500 font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors group">
                                    View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Right: Product Tabs */}
                        <div className="lg:w-2/3">
                            {/* Tab Headers */}
                            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                                {products.map((p, idx) => (
                                    <button
                                        key={p.id}
                                        onClick={() => setActiveTab(idx)}
                                        className={`px-6 py-3 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all border ${activeTab === idx ? 'bg-amber-500 text-zinc-950 border-amber-500' : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-white'}`}
                                    >
                                        {p.name}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-12 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>

                                <div className="flex flex-col md:flex-row gap-12 relative z-10">
                                    <div className="md:w-1/2">
                                        <img
                                            src={`https://picsum.photos/seed/${products[activeTab].id}/600/500`}
                                            alt={products[activeTab].name}
                                            className="w-full object-cover rounded-sm shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>
                                    <div className="md:w-1/2 flex flex-col justify-center">
                                        <h3 className="text-3xl font-black text-white mb-4">{products[activeTab].name}</h3>
                                        <p className="text-zinc-400 mb-8 leading-relaxed">{products[activeTab].desc}</p>
                                        <ul className="space-y-3 mb-8">
                                            {products[activeTab].specs.map((spec, i) => (
                                                <li key={i} className="flex items-center gap-3 text-zinc-300">
                                                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                                                    {spec}
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="self-start px-6 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-zinc-950 transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                            View Specs <Maximize2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section - Dynamic Accordion (Hybrid) */}
            <section id="industries" className="py-32 bg-zinc-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Applications</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white italic transform -skew-x-3">
                            Sectors <span className="text-amber-500">Dominated</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {industries.map((ind, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 p-8 transition-all duration-500 hover:bg-zinc-900/50 cursor-pointer overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-zinc-800 group-hover:bg-amber-500 transition-colors flex items-center justify-center mb-6 transform -skew-x-6 group-hover:skew-x-0">
                                        <ind.icon className="w-6 h-6 text-amber-500 group-hover:text-zinc-950 transform skew-x-6 group-hover:skew-x-0 transition-all" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{ind.name}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300">{ind.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OEM/ODM Section - Horizontal Steps (Structured + Stylized) */}
            <section id="oem/odm" className="py-32 bg-zinc-900 clip-path-diagonal relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(245,158,11,0.02)_25%,rgba(245,158,11,0.02)_50%,transparent_50%,transparent_75%,rgba(245,158,11,0.02)_75%)] bg-[length:30px_30px]"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                        <div>
                            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Partnership</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white">OEM / ODM Services</h2>
                        </div>
                        <p className="text-zinc-400 max-w-md text-right">
                            From ambitious concept to precision reality. We transform your vision into world-class machinery.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { step: '01', title: 'Consult', desc: 'Requirement deep-dive' },
                            { step: '02', title: 'Design', desc: 'CAD & FEA simulation' },
                            { step: '03', title: 'Cast', desc: 'Meehanite precision' },
                            { step: '04', title: 'Machine', desc: '5-axis CNC core' },
                            { step: '05', title: 'Assemble', desc: 'Hand-scraping craft' },
                            { step: '06', title: 'Verify', desc: 'Laser calibration' }
                        ].map((item, i) => (
                            <div key={i} className="group bg-zinc-950 border border-zinc-800 hover:border-amber-500 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/20 relative overflow-hidden">
                                <div className="text-amber-500/10 font-black text-6xl absolute -top-2 -right-2 group-hover:text-amber-500/20 transition-colors">{item.step}</div>
                                <div className="relative z-10">
                                    <div className="w-10 h-10 bg-zinc-800 group-hover:bg-amber-500 transition-colors flex items-center justify-center mb-4 transform rotate-45 group-hover:rotate-0">
                                        <Activity className="w-5 h-5 text-zinc-500 group-hover:text-zinc-950 transform -rotate-45 group-hover:rotate-0 transition-all" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{item.title}</h4>
                                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section (NEW - Added for Content Depth) */}
            <section id="about" className="py-32 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">About Us</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                35+ Years of <br />
                                <span className="italic text-amber-500">Engineering Excellence</span>
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                TOP-ONE Machinery was founded in 1988 in Taichung, Taiwan—the heart of the world's machine tool industry. We have built our reputation on unwavering quality, relentless innovation, and a customer-first approach.
                            </p>
                            <p className="text-zinc-500 leading-relaxed mb-10">
                                Today, our machines operate in over 50 countries across every major industry, from precision medical devices to towering wind turbines. We don't just build machines; we build partnerships.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Award, label: 'ISO 9001 Certified' },
                                    { icon: Globe, label: '50+ Export Countries' },
                                    { icon: Users, label: '200+ Team Members' },
                                    { icon: Shield, label: '5-Year Warranty' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                                            <item.icon className="w-5 h-5 text-amber-500" />
                                        </div>
                                        <span className="text-zinc-300 font-medium">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 border border-dashed border-amber-500/20 transform rotate-2"></div>
                            <img
                                src="https://picsum.photos/seed/topone_factory/800/600"
                                alt="TopOne Factory"
                                className="relative z-10 w-full object-cover rounded-sm shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 bg-zinc-900 border-t border-amber-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Get in Touch</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                                Ready to <span className="italic text-amber-500">Elevate</span> <br />Your Production?
                            </h2>
                            <p className="text-zinc-400 mb-10 leading-relaxed">
                                Contact our team for a consultation. We'll help you find the perfect CNC solution for your unique requirements.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: MapPin, label: 'No. 6, Ln. 476, Sec. 3, Sanfeng Rd., Fengyuan Dist., Taichung, Taiwan' },
                                    { icon: Phone, label: '+886-4-2562-4226' },
                                    { icon: Mail, label: 'info@topone-m.com' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 text-zinc-300 hover:text-white transition-colors cursor-pointer group">
                                        <div className="w-10 h-10 bg-zinc-800 group-hover:bg-amber-500 flex items-center justify-center transition-colors flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-amber-500 group-hover:text-zinc-950" />
                                        </div>
                                        <span className="pt-2">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-12">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Your Name" className="w-full bg-zinc-900 border border-zinc-700 px-4 py-4 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors" />
                                    <input type="email" placeholder="Email Address" className="w-full bg-zinc-900 border border-zinc-700 px-4 py-4 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors" />
                                </div>
                                <input type="text" placeholder="Company Name" className="w-full bg-zinc-900 border border-zinc-700 px-4 py-4 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors" />
                                <textarea placeholder="Your Message" rows={5} className="w-full bg-zinc-900 border border-zinc-700 px-4 py-4 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors resize-none"></textarea>
                                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 px-8 py-4 font-bold uppercase tracking-widest transition-all">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-zinc-500 pt-20 pb-10 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-amber-500 flex items-center justify-center text-zinc-950 font-black text-lg transform -skew-x-6">T1</div>
                                <span className="text-2xl font-black text-white tracking-widest">TOP-ONE</span>
                            </div>
                            <p className="text-zinc-500 mb-6 max-w-sm">
                                Taiwan's premier CNC machining center manufacturer. Precision engineered since 1988.
                            </p>
                        </div>

                        <div>
                            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h5>
                            <ul className="space-y-3 text-sm">
                                {['Products', 'Industries', 'OEM/ODM', 'About', 'Careers'].map(link => (
                                    <li key={link}><a href="#" className="hover:text-amber-500 transition-colors">{link}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Follow Us</h5>
                            <ul className="space-y-3 text-sm">
                                {['LinkedIn', 'YouTube', 'Facebook'].map(link => (
                                    <li key={link}><a href="#" className="hover:text-amber-500 transition-colors">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest">
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                        <div className="mt-4 md:mt-0 opacity-60">
                            © 2026 TOP-ONE MACHINERY CO., LTD.
                        </div>
                    </div>
                </div>
            </footer>

            {/* Global CSS */}
            <style jsx global>{`
         .clip-path-diagonal {
            clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
         }
         .text-outline-amber {
            -webkit-text-stroke: 2px #f59e0b;
            color: transparent;
         }
      `}</style>
        </div>
    );
}
