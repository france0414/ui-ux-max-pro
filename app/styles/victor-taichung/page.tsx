'use client';

import React from 'react';
import {
    Globe,
    ChevronRight,
    ArrowRight,
    Settings,
    Factory,
    Cpu,
    Layers,
    Wrench,
    Leaf,
    PlayCircle,
    MapPin
} from 'lucide-react';

export default function VictorTaichungPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-600 selection:text-white">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-3">
                            {/* Logo Placeholder */}
                            <div className="w-10 h-10 bg-blue-900 flex items-center justify-center rounded-sm">
                                <span className="text-white font-bold text-xl">V</span>
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-blue-900 uppercase hidden md:block">Victor Taichung</span>
                        </div>
                        <div className="hidden lg:flex space-x-8">
                            {['Home', 'Advantage', 'Solutions', 'Products', 'Application', 'Worldwide', 'ESG'].map((item) => (
                                <a key={item} href="#" className="text-slate-600 hover:text-red-600 font-medium transition-colors uppercase text-sm tracking-wide">
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="text-slate-500 hover:text-blue-900 font-medium text-sm">EN</button>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-sm font-bold uppercase text-sm tracking-wider transition-all shadow-md hover:shadow-lg">
                                Inquiry
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://picsum.photos/seed/cnc_factory_wide/1920/1080"
                        alt="Victor Taichung Factory"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-white/90 rounded-sm mb-6 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="text-sm font-bold uppercase tracking-widest">Est. 1954</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
                            EXPERIENCE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">FUTURE</span> OF<br />
                            MACHINE TOOL INDUSTRY
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                            Cutting-edge vertical integration delivering superior customization, precision, and efficiency for the smart manufacturing era.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-red-600/25">
                                Our Advantage <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="group flex items-center gap-3 text-white font-bold uppercase tracking-wider px-8 py-4 hover:text-red-400 transition-colors">
                                <PlayCircle className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform" />
                                Watch Corporate Video
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR ADVANTAGE - 6 Pillars */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-red-600 font-bold uppercase tracking-widest text-sm block mb-2">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Core Advantages</h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Custom Solutions', icon: Settings, desc: 'Tailored machining solutions designed to meet specific production requirements with maximum efficiency.' },
                            { title: 'Precision Casting', icon: Layers, desc: 'In-house Meehanite® casting foundry ensuring structural rigidity and long-term absorption capabilities.' },
                            { title: 'Smart Machining', icon: Cpu, desc: 'Integration of IoT sensors and smart algorithms for real-time monitoring and adaptive control.' },
                            { title: 'Key Components', icon: Wrench, desc: 'Self-manufactured spindles and turrets to guarantee quality control at the source.' },
                            { title: 'Digital Sheet Metal', icon: Factory, desc: 'Advanced automated sheet metal processing line with eco-friendly powder coating.' },
                            { title: 'Smart Assembly', icon: Layers, desc: 'Intelligent assembly lines ensuring consistency and traceability of every machine built.' },
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-xl transition-all duration-300 rounded-sm">
                                <div className="w-14 h-14 bg-white group-hover:bg-blue-900 border border-slate-200 group-hover:border-blue-900 rounded-sm flex items-center justify-center mb-6 transition-colors shadow-sm">
                                    <item.icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTIONS - Comprehensive Support */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Comprehensive Manufacturing Solutions</h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                We don't just sell machines; we provide complete support systems. From precision parts machining to innovative smart services and total factory planning.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {['Turnkey Project Planning', 'Automation Integration', 'Process Optimization', 'After-Sales & Training'].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="font-bold text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="border-2 border-white/20 hover:border-red-600 hover:text-red-500 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider transition-all">
                                Explore Solutions
                            </button>
                        </div>
                        <div className="relative">
                            <img src="https://picsum.photos/seed/smart_factory_tablet/800/600" alt="Smart Solutions" className="rounded-sm shadow-2xl border-4 border-slate-700" />
                            <div className="absolute -bottom-8 -left-8 bg-red-600 p-8 rounded-sm shadow-xl hidden lg:block">
                                <p className="text-4xl font-bold mb-1">24/7</p>
                                <p className="text-sm font-bold uppercase tracking-wider opacity-80">Smart<br />Monitoring</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCTS - 5 Categories */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Product Matrix</h2>
                            <p className="text-slate-500 mt-2">Diverse portfolio for optimal technical support.</p>
                        </div>
                        <a href="#" className="hidden md:flex items-center gap-2 text-blue-900 font-bold uppercase tracking-wider hover:text-red-600 transition-colors">
                            View Full Catalog <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* 1. Multi-Tasking */}
                        <div className="col-span-1 lg:col-span-2 group relative h-80 rounded-sm overflow-hidden cursor-pointer">
                            <img src="https://picsum.photos/seed/cnc_multitask/800/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Multi-Tasking" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold text-white mb-2">Multi-Tasking Turning Centers</h3>
                                <p className="text-slate-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 w-2/3">Done-in-one processing for complex parts.</p>
                            </div>
                        </div>

                        {/* 2. 5-Axis */}
                        <div className="col-span-1 group relative h-80 rounded-sm overflow-hidden cursor-pointer">
                            <img src="https://picsum.photos/seed/cnc_5axis/600/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="5-Axis" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold text-white mb-2">5-Axis Machining</h3>
                            </div>
                        </div>

                        {/* 3. CNC Lathes */}
                        <div className="col-span-1 group relative h-64 rounded-sm overflow-hidden cursor-pointer">
                            <img src="https://picsum.photos/seed/cnc_lathe/600/400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lathes" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-xl font-bold text-white">CNC Turning Lathes</h3>
                            </div>
                        </div>

                        {/* 4. Machining Centers */}
                        <div className="col-span-1 group relative h-64 rounded-sm overflow-hidden cursor-pointer">
                            <img src="https://picsum.photos/seed/cnc_mcenter/600/400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Machining Centers" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-xl font-bold text-white">Machining Centers</h3>
                            </div>
                        </div>

                        {/* 5. Wheel Machining */}
                        <div className="col-span-1 group relative h-64 rounded-sm overflow-hidden cursor-pointer">
                            <img src="https://picsum.photos/seed/cnc_wheel/600/400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Wheel Machining" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-xl font-bold text-white">Wheel Machining & Turnkey</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY APPLICATIONS */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Industry Applications</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Semiconductor', 'New Energy', 'Aerospace', 'Medical', 'Transportation'].map((industry) => (
                            <div key={industry} className="bg-slate-50 border border-slate-200 px-8 py-4 rounded-sm font-bold text-slate-600 hover:bg-blue-900 hover:text-white hover:border-blue-900 cursor-pointer transition-all uppercase tracking-wider">
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WORLDWIDE SERVICE */}
            <section className="py-24 bg-[#0B1120] text-white overflow-hidden relative">
                {/* Abstract Map Background */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Globe className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-4">Worldwide Service Network</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-16">
                        Combining local R&D, cross-strait production, and global marketing to offer top-notch technical support through our network of agents.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-6 border border-slate-800 bg-slate-900/50 rounded-sm">
                            <div className="text-4xl font-bold text-white mb-2">2</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Main R&D Centers</div>
                        </div>
                        <div className="p-6 border border-slate-800 bg-slate-900/50 rounded-sm">
                            <div className="text-4xl font-bold text-white mb-2">9</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Subsidiaries</div>
                        </div>
                        <div className="p-6 border border-slate-800 bg-slate-900/50 rounded-sm">
                            <div className="text-4xl font-bold text-white mb-2">65+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Distributors</div>
                        </div>
                        <div className="p-6 border border-slate-800 bg-slate-900/50 rounded-sm">
                            <div className="text-4xl font-bold text-white mb-2">80+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Countries Served</div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <button className="text-red-500 hover:text-white font-bold uppercase tracking-wider flex items-center gap-2 mx-auto transition-colors">
                            Find Your Local Agent <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* SUSTAINABILITY */}
            <section className="py-20 bg-emerald-950 text-emerald-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/30 -skew-x-12 transform translate-x-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div>
                        <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest mb-4">
                            <Leaf className="w-5 h-5" />
                            <span>Sustainability</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Commitment to Green Energy</h2>
                        <p className="text-emerald-200/80 max-w-xl leading-relaxed">
                            We continuously strive for the development of green energy and are dedicated to creating a safe, healthy work environment for our future.
                        </p>
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider transition-all shadow-lg whitespace-nowrap">
                        View ESG Report
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-blue-900 flex items-center justify-center rounded-sm">
                                    <span className="text-white font-bold text-sm">V</span>
                                </div>
                                <span className="font-bold text-xl text-white uppercase">Victor Taichung</span>
                            </div>
                            <p className="text-sm leading-relaxed mb-6">
                                Leading the machine tool industry with innovation, quality, and service since 1954.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {['Products', 'Applications', 'Solutions', 'Support'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-red-500 transition-colors text-sm">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Corporate</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Investor Relations', 'News Center', 'Careers'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-red-500 transition-colors text-sm">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact HQ</h4>
                            <div className="text-sm space-y-2">
                                <p>No. 2088, Sec. 4, Taiwan Blvd.,</p>
                                <p>Taichung, Taiwan</p>
                                <p className="text-white pt-2">+886-4-23592101</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-900 flex justify-between items-center text-xs">
                        <div>&copy; {new Date().getFullYear()} Victor Taichung Machinery Works Co., Ltd.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
