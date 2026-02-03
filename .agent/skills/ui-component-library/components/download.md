# Download & Resource Components

Templates for technical documentation, software downloads, and resources.

## 1. Download List (Table Style)
*Best for: Drivers, Manuals, Technical Datasheets*

```tsx
<section className="py-12">
  <div className="max-w-5xl mx-auto px-6">
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-bold text-gray-900">Technical Documentation</h3>
        <span className="text-sm text-gray-500">Total 4 files</span>
      </div>
      <div className="divide-y divide-gray-100">
        {[
           { name: 'X-Series Operation Manual', size: '4.2 MB', date: '2025-01-15' },
           { name: 'Safety Guidelines V2.1', size: '1.8 MB', date: '2024-12-10' },
           { name: 'Network Configuration Guide', size: '2.5 MB', date: '2024-11-05' },
        ].map((file, i) => (
           <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                    <FileText className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-[Primary_Color] transition-colors">{file.name}</h4>
                    <p className="text-xs text-gray-500">{file.date} • {file.size}</p>
                 </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-[Primary_Color] transition-colors">
                 <Download className="w-5 h-5" />
              </button>
           </div>
        ))}
      </div>
    </div>
  </div>
</section>
```
