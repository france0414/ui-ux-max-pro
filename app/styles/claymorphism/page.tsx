// app/styles/claymorphism/page.tsx
// Industry: Agricultural / Organic - 強調季節性、訂閱盒、農場故事
"use client";

export default function ClaymorphismPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8f5f0] to-[#e8f5e9]">
            {/* Friendly Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f5f0]/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#2e7d32]">🌿 綠野農場</div>
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#seasonal" className="text-gray-700 hover:text-[#2e7d32]">當季好物</a>
                        <a href="#subscription" className="text-gray-700 hover:text-[#2e7d32]">蔬菜箱訂閱</a>
                        <a href="#story" className="text-gray-700 hover:text-[#2e7d32]">農場故事</a>
                        <button className="px-6 py-3 bg-[#4caf50] text-white font-bold rounded-2xl shadow-[0_6px_0_#2e7d32] hover:shadow-[0_3px_0_#2e7d32] hover:translate-y-[3px] transition-all">
                            立即訂購 🥬
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero with Seasonal Highlight */}
            <section className="pt-28 pb-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-4 py-2 bg-[#fff8e1] rounded-full text-[#f57c00] font-bold mb-6 shadow-[0_4px_0_#ffe0b2]">
                            🥕 二月限定
                        </div>
                        <h1 className="text-5xl font-bold text-[#1b5e20] mb-6 leading-tight">
                            來自土地的<br /><span className="text-[#4caf50]">純淨饋贈</span>
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">堅持有機栽種，產地直送您的餐桌</p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-[#4caf50] text-white font-bold rounded-2xl shadow-[0_6px_0_#2e7d32] hover:shadow-[0_3px_0_#2e7d32] hover:translate-y-[3px] transition-all">
                                訂閱蔬菜箱
                            </button>
                            <button className="px-8 py-4 bg-white font-bold rounded-2xl shadow-[0_6px_0_#e8e8e8] hover:shadow-[0_3px_0_#e8e8e8] hover:translate-y-[3px] transition-all">
                                單品選購
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-[#c8e6c9] rounded-[3rem] p-6 shadow-[0_15px_0_#a5d6a7]">
                            <img src="https://picsum.photos/seed/veggies/600/500" alt="Fresh Vegetables" className="w-full rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seasonal Products - 當季輪播 */}
            <section id="seasonal" className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1b5e20]">當季好物</h2>
                            <p className="text-gray-600">二月｜高麗菜、蘿蔔、草莓季</p>
                        </div>
                        <button className="text-[#4caf50] font-bold">查看全部 →</button>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { name: '有機高麗菜', price: 'NT$80', tag: '當季', img: 'cabbage' },
                            { name: '白蘿蔔', price: 'NT$45', tag: '熱銷', img: 'radish' },
                            { name: '有機草莓', price: 'NT$180', tag: '限量', img: 'strawberry' },
                            { name: '地瓜', price: 'NT$60', tag: '新品', img: 'potato' },
                        ].map((p, i) => (
                            <div key={i} className="bg-[#f8f5f0] rounded-3xl overflow-hidden shadow-[0_8px_0_#e8e8e8] hover:shadow-[0_4px_0_#e8e8e8] hover:translate-y-[4px] transition-all">
                                <div className="relative aspect-square p-4">
                                    <img src={`https://picsum.photos/seed/${p.img}/400/400`} alt={p.name} className="w-full h-full object-cover rounded-2xl" />
                                    <span className="absolute top-6 left-6 px-3 py-1 bg-[#4caf50] text-white text-sm font-bold rounded-full">{p.tag}</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-800">{p.name}</h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-[#f57c00] font-bold">{p.price}</span>
                                        <button className="w-10 h-10 bg-[#4caf50] text-white rounded-full shadow-[0_3px_0_#2e7d32]">+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscription Box - 訂閱方案 (獨特) */}
            <section id="subscription" className="py-20 px-6 bg-[#e8f5e9]">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#1b5e20] mb-4">蔬菜箱訂閱</h2>
                    <p className="text-gray-600 mb-12">每週配送新鮮有機蔬果到府</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: '小家庭箱', qty: '6-8 樣', price: 'NT$450/週', color: '#c8e6c9' },
                            { name: '經典蔬菜箱', qty: '10-12 樣', price: 'NT$680/週', color: '#fff8e1', popular: true },
                            { name: '豐盛家庭箱', qty: '15-18 樣', price: 'NT$980/週', color: '#ffccbc' },
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 rounded-3xl shadow-[0_10px_0_rgba(0,0,0,0.1)] ${plan.popular ? 'bg-white scale-105' : 'bg-white'}`}>
                                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#4caf50] text-white text-sm font-bold rounded-full">最受歡迎</div>}
                                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-4" style={{ backgroundColor: plan.color }}>🥗</div>
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-gray-500 mb-4">{plan.qty}</p>
                                <p className="text-2xl font-bold text-[#4caf50] mb-6">{plan.price}</p>
                                <button className="w-full py-3 bg-[#4caf50] text-white font-bold rounded-xl shadow-[0_4px_0_#2e7d32]">訂閱</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Farm Story - 農場故事 */}
            <section id="story" className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://picsum.photos/seed/farm1/400/300" alt="Farm" className="rounded-2xl" />
                        <img src="https://picsum.photos/seed/farm2/400/300" alt="Farmer" className="rounded-2xl mt-8" />
                        <img src="https://picsum.photos/seed/farm3/400/300" alt="Harvest" className="rounded-2xl -mt-8" />
                        <img src="https://picsum.photos/seed/farm4/400/300" alt="Organic" className="rounded-2xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#1b5e20] mb-6">我們的故事</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            綠野農場位於台中新社，擁有得天獨厚的氣候與水源。自 2008 年起，我們堅持不使用農藥與化學肥料，讓土地與作物自然共生。
                        </p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-4 bg-[#f8f5f0] rounded-xl">
                                <div className="text-2xl font-bold text-[#4caf50]">15+</div>
                                <div className="text-sm text-gray-600">年經驗</div>
                            </div>
                            <div className="text-center p-4 bg-[#f8f5f0] rounded-xl">
                                <div className="text-2xl font-bold text-[#4caf50]">100%</div>
                                <div className="text-sm text-gray-600">有機認證</div>
                            </div>
                            <div className="text-center p-4 bg-[#f8f5f0] rounded-xl">
                                <div className="text-2xl font-bold text-[#4caf50]">3,000+</div>
                                <div className="text-sm text-gray-600">滿意訂戶</div>
                            </div>
                        </div>
                        <button className="px-8 py-4 bg-[#fff8e1] text-[#f57c00] font-bold rounded-2xl shadow-[0_4px_0_#ffe0b2]">
                            預約農場參觀 🚜
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#1b5e20] text-white text-center">
                <p className="mb-2">© 2026 綠野農場</p>
                <a href="/" className="text-white/60 hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
