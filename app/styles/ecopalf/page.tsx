'use client';

import React from 'react';
import {
    ArrowRight,
    Droplets,
    Wind,
    Recycle,
    Leaf,
    Flower,
    Sun,
    Sprout,
    Shirt,
    ShoppingBag,
    Armchair,
    CheckCircle2,
    ChevronDown
} from 'lucide-react';

export default function EcopalfPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F1] font-sans text-[#2C2C24] selection:bg-[#8FA206] selection:text-white">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#F5F5F1]/90 backdrop-blur-md border-b border-[#E6E6E0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center gap-2">
                            {/* Abstract Pineapple Leaf Logo */}
                            <div className="w-10 h-10 bg-[#8FA206] rounded-tl-3xl rounded-br-3xl flex items-center justify-center text-white">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <span className="font-serif text-2xl font-bold tracking-tight text-[#4A4A3F]">ECOPALF</span>
                        </div>

                        <div className="hidden md:flex space-x-12">
                            {['The Story', 'Impact', 'Process', 'Applications', 'Partners'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="text-[#5C5C54] hover:text-[#8FA206] font-medium tracking-wide text-sm uppercase transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button className="bg-[#2C2C24] text-[#F5F5F1] px-8 py-3 rounded-full font-serif font-medium hover:bg-[#8FA206] transition-colors duration-500">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Cinematic */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://picsum.photos/seed/pineapple_farm/1920/1080"
                        alt="Pineapple Farm"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#2C2C24]/30 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <span className="inline-block py-2 px-6 border border-white/30 rounded-full text-white/90 text-sm tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
                        Circular Economy in Action
                    </span>
                    <h1 className="font-serif text-6xl md:text-8xl text-[#F5F5F1] mb-8 leading-tight">
                        Reinventing <br />
                        <span className="italic text-[#D4E058]">Natural Resources</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Transforming agricultural waste into premium sustainable fibers.
                        A gift from nature, refined by technology.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <button className="bg-[#F5F5F1] text-[#2C2C24] px-10 py-4 rounded-full font-serif text-lg hover:bg-[#D4E058] transition-colors duration-300">
                            Discover the Journey
                        </button>
                        <ChevronDown className="w-8 h-8 text-white/50 animate-bounce mt-8" />
                    </div>
                </div>
            </section>

            {/* Story Section - Text Heavy / Editorial */}
            <section id="story" className="py-32 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="w-[80%] ml-auto aspect-[3/4] overflow-hidden rounded-sm">
                            <img src="https://picsum.photos/seed/fiber_thread/800/1000" alt="Fiber Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                        </div>
                        <div className="absolute top-20 left-0 w-[60%] aspect-square overflow-hidden rounded-sm border-8 border-[#F5F5F1] shadow-2xl">
                            <img src="https://picsum.photos/seed/pineapple_leaves/600/600" alt="Raw Leaves" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="lg:pl-10">
                        <h2 className="font-serif text-5xl text-[#2C2C24] mb-8 leading-tight">From Waste to Wealth</h2>
                        <div className="prose prose-lg text-[#5C5C54] prose-headings:font-serif">
                            <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
                                For centuries, pineapple farming has left behind millions of tons of leaves as agricultural waste. Usually burned or left to rot, these leaves released significant carbon emissions into our atmosphere.
                            </p>
                            <p className="mb-6">
                                At ECOPALF, we saw not waste, but opportunity. Through years of innovative R&D, we have developed a proprietary process to extract strong, fine, and versatile fibers from these discarded leaves.
                            </p>
                            <blockquote className="border-l-4 border-[#8FA206] pl-6 italic text-[#4A4A3F] text-xl my-8 bg-white/50 py-4 pr-4">
                                "Empowering Eco-Fashion Through Nature's Threads. We are charting a path towards sustainable development."
                            </blockquote>
                            <p>
                                This isn't just about making fabric. It's about revitalizing rural economies, reducing environmental footprints, and offering the fashion industry a truly circular alternative to cotton and synthetics.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-8">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#F5F5F1] overflow-hidden bg-gray-200">
                                        <img src={`https://picsum.photos/seed/farmer_${i}/100/100`} className="w-full h-full object-cover" alt="Farmer" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm font-medium text-[#5C5C54]">
                                Supporting <span className="text-[#8FA206] font-bold">500+</span> Farming Families
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Metrics - Big Data Visuals */}
            <section id="impact" className="py-32 bg-[#2C2C24] text-[#F5F5F1] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8FA206]/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">Quantifiable Impact</h2>
                        <p className="text-white/60 text-lg">
                            Every metric ton of PALF (Pineapple Leaf Fiber) produced creates a measurable positive ripple effect on our planet.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                            <Droplets className="w-12 h-12 text-[#4DB6E8] mb-6" />
                            <div className="text-6xl font-serif font-bold mb-4">97%</div>
                            <h3 className="text-xl font-bold mb-2">Less Water Used</h3>
                            <p className="text-white/60 leading-relaxed">
                                Compared to conventional cotton farming, PALF production requires virtually no additional irrigation.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-colors duration-300 relative overflow-hidden">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#8FA206]/20 rounded-full blur-3xl"></div>
                            <Wind className="w-12 h-12 text-[#8FA206] mb-6" />
                            <div className="text-6xl font-serif font-bold mb-4">2.4<span className="text-3xl">t</span></div>
                            <h3 className="text-xl font-bold mb-2">Carbon Saved</h3>
                            <p className="text-white/60 leading-relaxed">
                                Per metric ton of fiber produced, by preventing the burning of agricultural waste leaves.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                            <Recycle className="w-12 h-12 text-[#E8A64D] mb-6" />
                            <div className="text-6xl font-serif font-bold mb-4">100%</div>
                            <h3 className="text-xl font-bold mb-2">Biodegradable</h3>
                            <p className="text-white/60 leading-relaxed">
                                A fully circular material that returns to the earth without leaving microplastics behind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process - Horizontal Scroll Feel */}
            <section id="process" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="font-serif text-5xl text-center text-[#2C2C24] mb-20">The Refinement Process</h2>

                    <div className="space-y-0">
                        {[
                            { title: 'Collection', desc: 'Partnering with local farmers to collect leaves post-harvest.', icon: Sprout, img: 'https://picsum.photos/seed/harvest/800/400' },
                            { title: 'Extraction', desc: 'Mechanical decortication separates fibers from the biomass.', icon: Leaf, img: 'https://picsum.photos/seed/machine_fiber/800/400' },
                            { title: 'Washing & Drying', desc: 'Natural sun drying reduces energy consumption.', icon: Sun, img: 'https://picsum.photos/seed/sun_drying/800/400' },
                            { title: 'Spinning', desc: 'Blending with other sustainable fibers to create versatile yarns.', icon: Flower, img: 'https://picsum.photos/seed/yarn_spools/800/400' }
                        ].map((step, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} group`}>
                                <div className="md:w-1/2 overflow-hidden">
                                    <img src={step.img} alt={step.title} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" />
                                </div>
                                <div className="md:w-1/2 p-16 flex flex-col justify-center bg-[#F9F9F7] group-hover:bg-[#F0F0EB] transition-colors">
                                    <div className="text-[#8FA206] font-serif text-6xl opacity-20 font-bold mb-4">0{idx + 1}</div>
                                    <h3 className="font-serif text-3xl text-[#2C2C24] mb-4 flex items-center gap-3">
                                        <step.icon className="w-6 h-6 text-[#8FA206]" />
                                        {step.title}
                                    </h3>
                                    <p className="text-[#5C5C54] text-lg leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications Gallery - Masonry */}
            <section id="applications" className="py-32 bg-[#E6E6E0]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="font-serif text-5xl text-[#2C2C24] mb-4">Material Applications</h2>
                            <p className="text-[#5C5C54] max-w-xl text-lg">
                                From high-end fashion to durable home textiles, PALF offers a versatile, textured, and sustainable alternative.
                            </p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-[#2C2C24] font-bold uppercase tracking-widest hover:text-[#8FA206] transition-colors">
                            View Catalog <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[800px]">
                        {/* Tall Item */}
                        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-sm cursor-pointer">
                            <img src="https://picsum.photos/seed/fashion_dress/600/1000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Fashion" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-8">
                                <div className="text-white">
                                    <Shirt className="w-8 h-8 mb-2 opacity-80" />
                                    <h3 className="font-serif text-2xl">Eco-Fashion</h3>
                                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 text-sm">Durable, breathable fabrics for modern wear.</p>
                                </div>
                            </div>
                        </div>

                        {/* Wide Item */}
                        <div className="md:col-span-2 relative group overflow-hidden rounded-sm cursor-pointer">
                            <img src="https://picsum.photos/seed/sofa_fabric/800/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Interior" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-8">
                                <div className="text-white">
                                    <Armchair className="w-8 h-8 mb-2 opacity-80" />
                                    <h3 className="font-serif text-2xl">Interior Textiles</h3>
                                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 text-sm">Natural textures for sustainable living spaces.</p>
                                </div>
                            </div>
                        </div>

                        {/* Standard Item 1 */}
                        <div className="md:col-span-1 relative group overflow-hidden rounded-sm cursor-pointer">
                            <img src="https://picsum.photos/seed/tote_bag/600/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Accessories" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-8">
                                <div className="text-white">
                                    <ShoppingBag className="w-8 h-8 mb-2 opacity-80" />
                                    <h3 className="font-serif text-2xl">Accessories</h3>
                                </div>
                            </div>
                        </div>

                        {/* Standard Item 2 */}
                        <div className="md:col-span-1 relative group overflow-hidden rounded-sm cursor-pointer bg-white p-8 flex flex-col justify-between">
                            <div>
                                <h3 className="font-serif text-3xl text-[#2C2C24]">Custom Blends</h3>
                                <p className="text-[#5C5C54] mt-4">
                                    We offer custom blending services with cotton, tencel, and recycled polyester to meet specific fabric requirements.
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-[#8FA206] rounded-full flex items-center justify-center text-white self-end">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Certifications */}
            <section className="py-24 bg-white border-t border-[#E6E6E0]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-3xl text-[#2C2C24] mb-12">Trusted Global Partners & Certifications</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Oeko-Tex', 'Global Recycled Standard', 'USDA Organic', 'Fair Trade', 'ISO 9001'].map((cert) => (
                            <div key={cert} className="flex items-center gap-2 border-2 border-dashed border-[#2C2C24]/20 px-6 py-4 rounded-lg">
                                <CheckCircle2 className="w-6 h-6 text-[#2C2C24]" />
                                <span className="font-bold text-xl font-serif text-[#2C2C24]">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Footer */}
            <footer className="bg-[#1C1C16] text-[#E6E6E0] pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-[#2C2C24] pb-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-[#8FA206] rounded-tl-2xl rounded-br-2xl flex items-center justify-center text-white">
                                    <Leaf className="w-5 h-5" />
                                </div>
                                <span className="font-serif text-xl font-bold tracking-tight text-[#F5F5F1]">ECOPALF</span>
                            </div>
                            <p className="text-white/60 leading-relaxed max-w-xs">
                                Pioneering the future of sustainable textiles through innovation, responsibility, and respect for nature.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-serif text-xl mb-6 text-white">Headquarters</h4>
                            <div className="space-y-4 text-white/60 text-sm">
                                <p>25F-7, NO.97, Sec. 1, Xintai 5th Rd.</p>
                                <p>Xizhi Dist, New Taipei City</p>
                                <p>22175 TAIWAN</p>
                                <a href="tel:+886226975088" className="block hover:text-[#8FA206] transition-colors">+886-2-2697-5088</a>
                                <a href="mailto:gary@ukl.com.tw" className="block hover:text-[#8FA206] transition-colors">gary@ukl.com.tw</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-serif text-xl mb-6 text-white">Navigation</h4>
                            <ul className="space-y-4 text-white/60 text-sm">
                                {['About Us', 'Sustainability', 'Technology', 'Media Reports', 'Contact'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-[#8FA206] transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-serif text-xl mb-6 text-white">Newsletter</h4>
                            <p className="text-white/60 text-sm mb-4">Join our community for sustainability updates.</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email Address" className="bg-[#2C2C24] text-white px-4 py-2 rounded-sm w-full outline-none focus:ring-1 focus:ring-[#8FA206]" />
                                <button className="bg-[#8FA206] text-white px-4 py-2 rounded-sm hover:bg-[#A3B808] transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-xs">
                        <div>&copy; {new Date().getFullYear()} ECOPALF. All Rights Reserved.</div>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
