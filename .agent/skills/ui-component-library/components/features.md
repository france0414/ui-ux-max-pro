# Features & Content Components

Optimized layouts for presenting technical details, advantages, and processes.

## 1. Feature Grid (Icon Cards)
*Best for: Key advantages, service capabilities*

```tsx
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
      <p className="mt-4 text-xl text-gray-500">Industry leading durability and precision.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-[Primary_Color]/10 rounded-lg flex items-center justify-center mb-6">
            <Icon className="w-6 h-6 text-[Primary_Color]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">High Precision</h3>
          <p className="text-gray-500">
            Achieve 0.001mm tolerance with our advanced control systems.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
```

## 2. Split Content (Zig-Zag)
*Best for: Detailed product features, step-by-step process*

```tsx
<section className="py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 space-y-24">
    {/* Item 1: Text Left, Image Right */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Smart Monitoring System</h3>
        <p className="text-lg text-gray-500 mb-6">
          Real-time data acquisition directly from the machine controller. Monitor spindle load, temperature, and vibration.
        </p>
        <ul className="space-y-3">
          {['24/7 Remote Access', 'Predictive Maintenance', 'Error Logging'].map((item, i) => (
             <li key={i} className="flex items-center gap-3">
               <CheckCircle className="w-5 h-5 text-[Primary_Color]" />
               <span className="text-gray-700">{item}</span>
             </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-[Primary_Color]/5 transform rotate-3 rounded-2xl"></div>
        <img src="..." className="relative rounded-2xl shadow-xl w-full" />
      </div>
    </div>

    {/* Item 2: Image Left, Text Right (Order Swap) */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
       <div className="order-2 lg:order-1 relative">
         <div className="absolute inset-0 bg-[Primary_Color]/5 transform -rotate-3 rounded-2xl"></div>
         <img src="..." className="relative rounded-2xl shadow-xl w-full" />
       </div>
       <div className="order-1 lg:order-2">
         {/* Content... */}
       </div>
    </div>
  </div>
</section>
```

## 3. Checklist Grid
*Best for: Technical specifications, compliance list*

```tsx
<div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
  <h3 className="text-2xl font-bold mb-6">Standard Specifications</h3>
  <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
    {specs.map((spec, i) => (
      <div key={i} className="flex justify-between border-b border-gray-100 pb-2">
         <span className="text-gray-500">{spec.label}</span>
         <span className="font-medium text-gray-900">{spec.value}</span>
      </div>
    ))}
  </div>
</div>
```
