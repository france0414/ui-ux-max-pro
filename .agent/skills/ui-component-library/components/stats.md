# Stats & Trust Components

Components to build credibility, showcasing numbers, certifications, and partnerships.

## 1. Stats Counter Row
*Best for: Homepage trusted by section, About page*

```tsx
<section className="bg-[Secondary_Color] py-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { value: '30+', label: 'Years Experience' },
        { value: '50+', label: 'Countries Exported' },
        { value: '10k+', label: 'Machines Installed' },
        { value: '24h', label: 'Service Response' },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <p className="text-4xl font-bold text-[Primary_Color] mb-1">{stat.value}</p>
          <p className="text-gray-600 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

## 2. Logo Grid (Partners)
*Best for: Client list, certifications*

```tsx
<div className="py-12 border-t border-gray-100">
  <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-8">Trusted by Industry Leaders</p>
  <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
     {/* Replace with actual logos */}
     <img src="/logos/logo1.svg" className="h-8 md:h-10" />
     <img src="/logos/logo2.svg" className="h-8 md:h-10" />
     <img src="/logos/logo3.svg" className="h-8 md:h-10" />
     <img src="/logos/logo4.svg" className="h-8 md:h-10" />
  </div>
</div>
```
