---
name: ui-component-library
description: A library of B2B-optimized Tailwind CSS component templates based on proven production patterns.
---

# UI Component Library Skill

這是一個專為 B2B/工業/企業應用設計的 UI 元件庫。它提供了經過驗證的 Tailwind CSS 結構模板，確保生成的頁面具有一致的工程品質和結構邏輯。

這個 Skill 旨在與 `ui-ux-pro-max` (負責設計策略) 搭配使用：
1. `ui-ux-pro-max` 決定風格 (Style)、配色 (Color)、字體 (Typography)。
2. `ui-component-library` 提供實現這些設計的程式碼骨架 (Skeleton)。

## 📦 Available Components

請使用 `view_file` 讀取具體的元件模板檔案以獲取程式碼結構：

- **Heroes** (`components/heroes.md`): 包含 Standard (左文右圖), Carousel (輪播), Video (影片背景)。
- **Features** (`components/features.md`): 包含 Grid Cards, Split Layout, Checklist。
- **Products** (`components/products.md`): B2B 產品目錄, 產品卡片 (含SKU/規格)。
- **Stats** (`components/stats.md`): 數據展示, 信任指標。
- **News** (`components/news.md`): 新聞列表, 案例展示。
- **Download** (`components/download.md`): 技術文件下載列表。

## 🚀 Usage Workflow

當你需要實作特定區塊時：

1. **Identify the Pattern**: 確認該區塊的功能 (例如：展示核心產品)。
2. **Select the Variant**: 從對應的組件檔中選擇適合的變體 (例如：`products.md` 中的 `Showcase Variant`)。
3. **Apply Design System**: 將 `ui-ux-pro-max` 提供的設計 Token (顏色、字體) 填入模板中。

### Example Prompts

- "Implement a hero section using the `Standard Variant` from the component library, styled with the `Navy & Cyan` palette."
- "Create a product catalog using the `Grid Variant` with a sidebar filter."
