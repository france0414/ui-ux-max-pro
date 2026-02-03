'use client';

import React from 'react';
import {
    Coffee,
    Cpu,
    Zap,
    Globe,
    ArrowRight,
    PlayCircle,
    Building2,
    Plane,
    ShoppingBag,
    Dumbbell,
    Utensils,
    ChevronRight,
    Sparkles
} from 'lucide-react';

export default function LDRobotPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-500 selection:text-white">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            {/* Logo Placeholder */}
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="font-bold text-xl tracking-tight text-slate-900 block leading-none">LEADER</span>
                                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block leading-none">Automation</span>
                            </div>
                        </div>
                        <div className="hidden lg:flex space-x-8">
                            {['Solutions', 'Products', 'Innovation', 'About', 'Contact'].map((item) => (
                                <a key={item} href="#" className="text-slate-600 hover:text-teal-600 font-medium transition-colors text-sm">
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                                <Zap className="w-4 h-4 text-teal-400" />
                                Get Solution
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-900 rounded-b-[3rem]">
                {/* Abstract Tech Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-teal-900/40 mix-blend-overlay z-10"></div>
                    <img
                        src="https://picsum.photos/seed/robot_coffee_arm/1920/1080"
                        alt="Robotic Service"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-20"></div>
                </div>

                <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 text-teal-300 rounded-full mb-8 backdrop-blur-md">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wide">The Future of Unmanned Retail</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-8">
                            Serve 24/7 with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Robotic Precision.</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                            Transform your business with AI-driven automated coffee and beverage solutions. Reduce costs, increase efficiency, and delight customers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-teal-500/25">
                                Explore Solutions <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="group flex items-center gap-3 text-white font-semibold px-8 py-4 hover:text-teal-300 transition-colors">
                                <PlayCircle className="w-12 h-12 text-white/20 group-hover:text-teal-400 transition-colors" />
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* INNOVATION: Bento Grid for Business Solutions */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Versatile Applications</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Our robotic units are designed to fit seamlessly into any high-traffic environment, providing premium service without the overhead.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">

                        {/* Large Item - Airports */}
                        <div className="col-span-1 md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
                            <img src="https://picsum.photos/seed/airport_terminal/800/800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Airport" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent p-8 flex flex-col justify-end">
                                <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white">
                                    <Plane className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Airports & Hubs</h3>
                                <p className="text-slate-300 opacity-80 mb-4">24/7 service for travelers worldwide.</p>
                                <span className="text-teal-400 font-bold text-sm uppercase tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    View Case Study <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>

                        {/* Wide Item - Shopping Malls */}
                        <div className="col-span-1 md:col-span-2 group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
                            <img src="https://picsum.photos/seed/shopping_mall_modern/800/400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Mall" />
                            <div className="absolute inset-0 bg-slate-900/40 hover:bg-slate-900/30 transition-colors p-8 flex flex-col justify-center items-start">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white"><ShoppingBag className="w-5 h-5" /></div>
                                    <h3 className="text-2xl font-bold text-white">Shopping Centers</h3>
                                </div>
                                <p className="text-slate-100 max-w-xs">Enhance the shopper experience with interactive robotic kiosks.</p>
                            </div>
                        </div>

                        {/* Hotel Lobbies */}
                        <div className="col-span-1 group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-slate-100">
                            <div className="p-6 h-full flex flex-col">
                                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-auto text-blue-600">
                                    <Building2 className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mt-4">Hotels</h3>
                                <p className="text-slate-500 text-sm mt-2">Premium unattended lobby service.</p>
                            </div>
                        </div>

                        {/* Gyms */}
                        <div className="col-span-1 group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-teal-50">
                            <div className="p-6 h-full flex flex-col">
                                <div className="bg-teal-100 w-10 h-10 rounded-full flex items-center justify-center mb-auto text-teal-600">
                                    <Dumbbell className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mt-4">Gyms</h3>
                                <p className="text-slate-500 text-sm mt-2">Protein shakes on demand.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* PRODUCTS: Split Row Layout */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Feature 1: Coffee */}
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                            <img src="https://picsum.photos/seed/robot_barista_coffee/800/600" alt="Robotic Coffee" className="rounded-3xl shadow-2xl z-10 relative" />
                        </div>
                        <div className="lg:w-1/2">
                            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-full text-xs uppercase tracking-wider mb-6">Flagship Product</div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Robotic Coffee Master</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Experience the perfect pour every time. Our AI-driven barista replicates the complex hand movements of professional coffee makers, ensuring consistent quality and taste.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Latte Art Capabilities', '90 Seconds per Cup', 'App & Kiosk Ordering'].map(feature => (
                                    <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                            <span className="text-xs">✓</span>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                View Specifications <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Feature 2: Bubble Tea (Reversed) */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-100/50 rounded-full blur-3xl -z-10"></div>
                            <img src="https://picsum.photos/seed/bubble_tea_robot/800/600" alt="Robotic Bubble Tea" className="rounded-3xl shadow-2xl z-10 relative" />
                        </div>
                        <div className="lg:w-1/2">
                            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 font-bold rounded-full text-xs uppercase tracking-wider mb-6">Trending</div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Automated Bubble Tea Shop</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Tap into the global bubble tea craze with a fully automated, compact solution. From cooking pearls to sealing cups, the entire process is mesmerizing and hygienic.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Customizable Sugar & Ice', 'Auto-Cleaning Cycle', 'High Throughput Design'].map(feature => (
                                    <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                            <span className="text-xs">✓</span>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="text-teal-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                View Specifications <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* INNOVATION STATS */}
            <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center divide-x divide-slate-800/50">
                        <div>
                            <div className="text-5xl font-bold text-teal-400 mb-2">66%</div>
                            <div className="text-slate-400 uppercase tracking-widest text-sm">Labor Cost Savings</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-blue-400 mb-2">24/7</div>
                            <div className="text-slate-400 uppercase tracking-widest text-sm">Operation Time</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-purple-400 mb-2">0.01</div>
                            <div className="text-slate-400 uppercase tracking-widest text-sm">Precision Error (mm)</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-pink-400 mb-2">Cloud</div>
                            <div className="text-slate-400 uppercase tracking-widest text-sm">Real-time Mgmt</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-slate-950 text-slate-400 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-md flex items-center justify-center text-white">
                            <Cpu className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg text-white">LEADER Automation</span>
                    </div>

                    <div className="flex gap-8 text-sm font-medium">
                        <a href="#" className="hover:text-white transition-colors">Business Solutions</a>
                        <a href="#" className="hover:text-white transition-colors">Robotic Coffee</a>
                        <a href="#" className="hover:text-white transition-colors">Group Intro</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="text-sm">
                        &copy; {new Date().getFullYear()} Leader Automation Co., Ltd.
                    </div>
                </div>
            </footer>

        </div>
    );
}
