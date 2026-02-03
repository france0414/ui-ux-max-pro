# Hero Components

Tailwind CSS templates for Hero sections designed for B2B/Industrial contexts.

## 1. Standard Hero (Left Content, Right Image)
*Best for: B2B introduction, industrial equipment showcase*

```tsx
<section className="relative bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <p className="text-base text-[PRIMARY_COLOR] font-semibold tracking-wide uppercase">// SUBTITLE_OR_TAG</p>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Main Value Prop</span>{' '}
            <span className="block text-[PRIMARY_COLOR] xl:inline">Highlighted Keyword</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Professional description focused on B2B value proposition. Mention key specs, efficiency gains, or industry standards.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
            <div className="rounded-md shadow">
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[PRIMARY_COLOR] hover:bg-[Hover_Color] md:py-4 md:text-lg md:px-10">
                Contact Sales
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[PRIMARY_COLOR] bg-[Secondary_Color]/10 hover:bg-[Secondary_Color]/20 md:py-4 md:text-lg md:px-10">
                View Products
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img
      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      src="[IMAGE_URL]"
      alt="Industrial Equipment"
    />
  </div>
</section>
```

## 2. Video Background Hero (Immersive)
*Best for: Brand storytelling, factory tour, automated production line*

```tsx
<div className="relative bg-[Dark_Color] h-[600px] flex items-center overflow-hidden">
  {/* Video Background Layer */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay */}
    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
      <source src="[VIDEO_URL]" type="video/mp4" />
    </video>
  </div>
  
  <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Future of <span className="text-[Accent_Color]">Automation</span>
    </h1>
    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
      Leading the industry with precision engineering and smart manufacturing solutions.
    </p>
    <button className="px-8 py-4 bg-[Accent_Color] text-white font-bold rounded hover:bg-[Accent_Hover] transition-colors">
      Watch Full Video
    </button>
  </div>
</div>
```

## 3. Carousel Hero (Product Highlights)
*Best for: Multi-product showcase, featured promotions*

*(Implementation Note: Use embla-carousel-react)*

```tsx
// Structure Concept
<div className="relative h-[500px] bg-gray-900">
  <Carousel>
    <Slide>
       <div className="grid grid-cols-2 h-full items-center max-w-7xl mx-auto px-6">
          <div className="text-white">
             <h2 className="text-4xl font-bold">New H-800 Series</h2>
             <p>High speed 5-axis machining center</p>
          </div>
          <img src="..." />
       </div>
    </Slide>
    {/* More Slides... */}
  </Carousel>
</div>
```
