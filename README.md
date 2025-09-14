# Kingpro Topup Landing Page

Landing page สำหรับบริการเติมเกม Kingpro Topup ที่สร้างด้วย Next.js 14, TypeScript, TailwindCSS, shadcn/ui และ framer-motion

## Features

- 🎮 **Gaming-focused Design** - โทนสีดาร์ก พรีเมียม เกมมิ่ง
- 📱 **Mobile Responsive** - ใช้งานง่ายบนทุกอุปกรณ์
- ⚡ **Fast Performance** - โหลดเร็ว ทำงานราบรื่น
- 🎨 **Modern UI** - ใช้ shadcn/ui components
- 🌟 **Smooth Animations** - framer-motion animations
- 🔗 **LINE Integration** - ปุ่ม CTA ทั้งหมดเชื่อมต่อกับ LINE Official

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── LandingPage.tsx
│   └── LineFab.tsx
├── lib/
│   └── utils.ts
└── public/
    └── images/       # Static images
```

## Customization

### Colors
- **Primary (Gold):** #F5C451
- **Secondary (Green):** #22C55E
- **Background:** #0B1020
- **Font:** Noto Sans Thai

### LINE Integration
Update LINE URL in:
- `components/LandingPage.tsx`
- `components/LineFab.tsx`

Current LINE URL: `https://lin.ee/GGT0Lst`

## SEO & Meta Tags

- Optimized for Thai search engines
- Open Graph tags for social sharing
- Twitter Card support
- Mobile-friendly viewport settings

## License

Private project for Kingpro Topup