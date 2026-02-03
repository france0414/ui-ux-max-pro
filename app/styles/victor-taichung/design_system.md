# Victor Taichung Design System

## Core Attributes
- **Archetype**: The Industrial Titan.
- **Palette**: Deep Blue, Silver, White, Red Accent.
- **Typography**: Inter (UI), Oswald (Headings).
- **Vibe**: Robust, Precise, Heavy-duty, Professional, Engineering-focused.

## Color Palette
| Color Role | Tailwind Class | Appx Hex | Usage |
|Data | | | |
| Primary | `bg-blue-900` | `#1e3a8a` | Core branding, headers, solid backgrounds |
| Secondary | `bg-slate-200` | `#e2e8f0` | Sections, cards, subtle backgrounds |
| Accent | `bg-red-600` | `#dc2626` | CTAs, highlights, active states |
| Text Main | `text-slate-900` | `#0f172a` | Primary text |
| Text Muted | `text-slate-600` | `#475569` | Secondary text |
| Background | `bg-white` | `#ffffff` | Page background |
| Dark Background| `bg-slate-900` | `#0f172a` | Footer, hero overlay |

## Typography
- **Headings**: `font-sans font-bold tracking-tight` (Oswald-like feel via standard fonts if not using custom) -> Will use `font-serif` or `font-mono` if industrial, but `font-sans` with `tracking-tight` is safer. Let's stick to standard Sans.
- **Body**: `font-sans text-base leading-relaxed text-slate-600`.

## Component Styles
- **Buttons**:
    - Primary: `bg-red-600 text-white hover:bg-red-700 shadow-md rounded-sm uppercase tracking-wider font-bold px-6 py-3 transition-all`
    - Outline: `border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-sm uppercase tracking-wider font-bold px-6 py-3 transition-all`
- **Cards**:
    - Style: `bg-white shadow-lg border-b-4 border-blue-900 hover:shadow-xl transition-all p-6 rounded-sm`
    - Industrial touch: Square corners or slightly rounded (`rounded-sm`).
- **Hero**:
    - Full screen or large height.
    - Dark overlay on industrial machinery image.
    - Strong, white bold text.

## Layout Patterns
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Section Spacing**: `py-16` or `py-24`.
- **Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`.
