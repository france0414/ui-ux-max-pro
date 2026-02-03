# Product Components

Templates for B2B product catalogs, dealing with SKU variations, specs, and inquiries.

## 1. Product Grid Card (B2B Standard)
*Best for: Product listing page, category view*

```tsx
<div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[Primary_Color] transition-colors">
  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="absolute top-2 right-2">
      <span className="px-2 py-1 bg-white/90 backdrop-blur text-[10px] uppercase font-bold text-gray-600 rounded">
        {product.series}
      </span>
    </div>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[Primary_Color] transition-colors">
      {product.name}
    </h3>
    <p className="text-sm text-gray-500 mb-3">{product.description}</p>
    
    {/* Key Specs Row */}
    <div className="flex gap-4 mb-4 text-xs text-gray-500">
      <div className="flex items-center gap-1">
        <Cpu className="w-3 h-3" /> <span>{product.spec1}</span>
      </div>
      <div className="flex items-center gap-1">
        <Maximize className="w-3 h-3" /> <span>{product.spec2}</span>
      </div>
    </div>
    
    <button className="w-full py-2 bg-gray-50 text-gray-700 font-medium text-sm rounded hover:bg-[Primary_Color] hover:text-white transition-colors">
      View Details
    </button>
  </div>
</div>
```

## 2. Product Showcase (Featured)
*Best for: Highlighting a flagship product on the homepage*

```tsx
<section className="bg-[Dark_Color] text-white py-20">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <div className="inline-block px-3 py-1 bg-[Accent_Color] text-white text-xs font-bold rounded mb-4">
        NEW ARRIVAL
      </div>
      <h2 className="text-4xl font-bold mb-6">X-Series 5000</h2>
      <p className="text-white/70 text-lg mb-8">
        The most advanced 5-axis controller in our lineup. Featuring AI-driven optimization and 30% faster processing.
      </p>
      <div className="grid grid-cols-3 gap-6 mb-8 border-t border-white/10 pt-8">
        <div>
           <div className="text-2xl font-bold text-[Accent_Color]">0.001mm</div>
           <div className="text-sm text-white/50">Precision</div>
        </div>
        <div>
           <div className="text-2xl font-bold text-[Accent_Color]">20,000</div>
           <div className="text-sm text-white/50">RPM</div>
        </div>
        <div>
           <div className="text-2xl font-bold text-[Accent_Color]">24/7</div>
           <div className="text-sm text-white/50">Operation</div>
        </div>
      </div>
      <button className="px-6 py-3 border border-white/30 rounded hover:bg-white hover:text-gray-900 transition-colors">
        Download Brochure
      </button>
    </div>
    <div className="relative">
      {/* Abstract Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[Accent_Color]/20 to-transparent rounded-full blur-3xl"></div>
      <img src="..." alt="Product" className="relative z-10 w-full drop-shadow-2xl" />
    </div>
  </div>
</section>
```
