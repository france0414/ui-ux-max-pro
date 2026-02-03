# News & Updates Components

Templates for displaying latest news, exhibitions, and case studies.

## 1. News List (Preview)
*Best for: Homepage news section*

```tsx
<section className="py-16">
  <div className="max-w-7xl mx-auto px-6 flex justify-between items-end mb-10">
     <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
     <a href="/news" className="text-[Primary_Color] font-medium hover:underline flex items-center gap-1">
       View All News <ArrowRight className="w-4 h-4" />
     </a>
  </div>
  
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
     {news.map((item, i) => (
       <article key={i} className="flex flex-col group cursor-pointer">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
             <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
             <time>{item.date}</time>
             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
             <span className="text-[Primary_Color] font-medium">{item.category}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[Primary_Color] transition-colors line-clamp-2">
             {item.title}
          </h3>
          <p className="text-gray-500 line-clamp-3 mb-4 flex-1">
             {item.excerpt}
          </p>
          <span className="text-sm font-bold text-gray-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
             Read more <ArrowRight className="w-3 h-3" />
          </span>
       </article>
     ))}
  </div>
</section>
```
