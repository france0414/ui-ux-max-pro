// app/styles/neumorphism/page.tsx
// Industry: Health/Wellness App - 強調課程、教練、用戶體驗
"use client";

export default function NeumorphismPage() {
    return (
        <div className="min-h-screen bg-[#E8EEF5]">
            {/* Soft Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E8EEF5] px-6 py-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between bg-[#E8EEF5] rounded-2xl p-4 shadow-[8px_8px_16px_#c8d4e0,-8px_-8px_16px_#ffffff]">
                    <div className="text-xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">🧘 Serenity</div>
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#programs" className="px-4 py-2 text-gray-600 hover:text-teal-600 rounded-xl hover:shadow-[inset_4px_4px_8px_#c8d4e0,inset_-4px_-4px_8px_#ffffff] transition-all">課程</a>
                        <a href="#instructors" className="px-4 py-2 text-gray-600 hover:text-teal-600 rounded-xl hover:shadow-[inset_4px_4px_8px_#c8d4e0,inset_-4px_-4px_8px_#ffffff] transition-all">教練</a>
                        <a href="#download" className="px-4 py-2 text-gray-600 hover:text-teal-600 rounded-xl hover:shadow-[inset_4px_4px_8px_#c8d4e0,inset_-4px_-4px_8px_#ffffff] transition-all">下載</a>
                        <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-2xl shadow-[4px_4px_8px_#c8d4e0,-4px_-4px_8px_#ffffff]">
                            開始練習
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero with App Preview */}
            <section className="min-h-screen pt-32 px-6 flex items-center">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-4 py-2 bg-[#E8EEF5] rounded-full text-teal-600 font-bold mb-6 shadow-[4px_4px_8px_#c8d4e0,-4px_-4px_8px_#ffffff]">
                            ✨ App Store 精選
                        </div>
                        <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            找到你的
                            <br />
                            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">內在平靜</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            冥想、瑜伽、睡眠引導，讓身心靈獲得真正的放鬆
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-[#E8EEF5] rounded-2xl shadow-[8px_8px_16px_#c8d4e0,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#c8d4e0,inset_-4px_-4px_8px_#ffffff] transition-all font-bold text-gray-800">
                                📱 App Store
                            </button>
                            <button className="px-8 py-4 bg-[#E8EEF5] rounded-2xl shadow-[8px_8px_16px_#c8d4e0,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#c8d4e0,inset_-4px_-4px_8px_#ffffff] transition-all font-bold text-gray-800">
                                🤖 Google Play
                            </button>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="flex justify-center">
                        <div className="bg-[#E8EEF5] rounded-[3rem] p-6 shadow-[20px_20px_40px_#c8d4e0,-20px_-20px_40px_#ffffff]">
                            <div className="w-64 bg-[#E8EEF5] rounded-[2.5rem] overflow-hidden shadow-[inset_6px_6px_12px_#c8d4e0,inset_-6px_-6px_12px_#ffffff]">
                                <img src="https://picsum.photos/seed/meditation/300/600" alt="App" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
                    {[
                        { value: '500+', label: '冥想課程' },
                        { value: '2M+', label: '活躍用戶' },
                        { value: '4.9', label: 'App 評分' },
                    ].map((s, i) => (
                        <div key={i} className="p-6 bg-[#E8EEF5] rounded-2xl shadow-[8px_8px_16px_#c8d4e0,-8px_-8px_16px_#ffffff] text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">{s.value}</div>
                            <div className="text-gray-500">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Programs - 課程類別 (獨特) */}
            <section id="programs" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">探索課程</h2>
                    <p className="text-center text-gray-500 mb-12">找到適合你的練習</p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: '🧘', title: '冥想入門', count: '30 堂', color: 'from-teal-400 to-cyan-400' },
                            { icon: '🌙', title: '睡眠引導', count: '45 堂', color: 'from-purple-400 to-pink-400' },
                            { icon: '🌅', title: '晨間瑜伽', count: '28 堂', color: 'from-orange-400 to-yellow-400' },
                            { icon: '🌊', title: '呼吸練習', count: '20 堂', color: 'from-blue-400 to-cyan-400' },
                            { icon: '💪', title: '專注力訓練', count: '15 堂', color: 'from-red-400 to-orange-400' },
                            { icon: '🎵', title: '療癒音樂', count: '100+', color: 'from-pink-400 to-rose-400' },
                            { icon: '⏱️', title: '快速放鬆', count: '25 堂', color: 'from-green-400 to-teal-400' },
                            { icon: '📚', title: '正念課程', count: '12 堂', color: 'from-indigo-400 to-purple-400' },
                        ].map((p, i) => (
                            <div key={i} className="p-6 bg-[#E8EEF5] rounded-2xl shadow-[8px_8px_16px_#c8d4e0,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#c8d4e0,-4px_-4px_8px_#ffffff] transition-all cursor-pointer group">
                                <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-r ${p.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                                    {p.icon}
                                </div>
                                <h3 className="font-bold text-gray-800">{p.title}</h3>
                                <p className="text-sm text-gray-500">{p.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Instructors (獨特) */}
            <section id="instructors" className="py-20 px-6 bg-gradient-to-b from-[#E8EEF5] to-[#dce4ed]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">專業教練團隊</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { name: 'Amy Lin', role: '冥想導師', exp: '10年經驗' },
                            { name: 'David Chen', role: '瑜伽老師', exp: 'RYT-500' },
                            { name: 'Sarah Wu', role: '睡眠專家', exp: '臨床心理師' },
                            { name: 'Kevin Liu', role: '呼吸教練', exp: '8年經驗' },
                        ].map((t, i) => (
                            <div key={i} className="p-6 bg-[#E8EEF5] rounded-2xl shadow-[8px_8px_16px_#c8d4e0,-8px_-8px_16px_#ffffff] text-center">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-[4px_4px_8px_#c8d4e0,-4px_-4px_8px_#ffffff]">
                                    <img src={`https://picsum.photos/seed/instructor${i}/200/200`} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-bold text-gray-800">{t.name}</h3>
                                <p className="text-teal-600 text-sm">{t.role}</p>
                                <p className="text-gray-400 text-xs">{t.exp}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* User Journey / Daily Routine (獨特) */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">你的一天</h2>
                    <div className="relative">
                        {/* Timeline */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-400 -translate-x-1/2 rounded-full" />
                        {[
                            { time: '07:00', title: '晨間冥想', desc: '用 10 分鐘開啟美好的一天' },
                            { time: '12:00', title: '午間放鬆', desc: '快速呼吸練習，恢復專注' },
                            { time: '19:00', title: '傍晚瑜伽', desc: '舒展身體，釋放一天壓力' },
                            { time: '22:00', title: '睡前引導', desc: '進入深層放鬆，一夜好眠' },
                        ].map((item, i) => (
                            <div key={i} className={`flex items-center gap-8 mb-8 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <div className="inline-block p-6 bg-[#E8EEF5] rounded-2xl shadow-[8px_8px_16px_#c8d4e0,-8px_-8px_16px_#ffffff]">
                                        <div className="text-teal-600 font-bold">{item.time}</div>
                                        <div className="font-bold text-gray-800">{item.title}</div>
                                        <div className="text-gray-500 text-sm">{item.desc}</div>
                                    </div>
                                </div>
                                <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full shadow-lg z-10" />
                                <div className="flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download CTA */}
            <section id="download" className="py-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-[#E8EEF5] rounded-3xl p-12 shadow-[12px_12px_24px_#c8d4e0,-12px_-12px_24px_#ffffff]">
                        <div className="text-5xl mb-6">🌿</div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">開始你的平靜之旅</h2>
                        <p className="text-gray-500 mb-8">免費下載，前 7 天所有課程無限存取</p>
                        <div className="flex gap-4 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-2xl shadow-lg">
                                App Store
                            </button>
                            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-2xl shadow-lg">
                                Google Play
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 text-center text-gray-400 text-sm">
                <p>© 2026 Serenity</p>
                <a href="/" className="hover:text-teal-600">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
