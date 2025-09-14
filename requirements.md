คุณคือ Senior UX/UI + Frontend Engineer
สร้าง Landing Page สำหรับ **Kingpro Topup** ด้วย Next.js (App Router) + TypeScript + TailwindCSS + shadcn/ui + framer-motion

[Goal]
- เน้น Conversion ให้ผู้ใช้กด CTA "เริ่มใช้งาน" แล้วเปิดลิงก์ LINE
- ทำงานเร็ว โหลดไว ใช้ง่ายบนมือถือ

[Brand & Theme]
- โทน: ดาร์ก พรีเมียม เกมมิ่ง
- สีหลัก (primary): ทอง #F5C451
- สีรอง (secondary): เขียว #22C55E
- ตัวอักษร: Noto Sans Thai
- พื้นหลังดาร์ก: #0B1020 หรือ gradient ดาร์ก
- ปุ่ม: rounded-2xl, shadow นุ่ม, hover scale-105
- ใช้ไอคอน lucide-react

[Links]
- CTA ทั้งหมดให้ลิงก์ไป LINE: https://lin.ee/GGT0Lst
- ปุ่มลอย (FAB) มุมขวาล่าง เป็นโลโก้ LINE วงกลม คลิกแล้วเปิดลิงก์เดียวกัน

[Assets/Images]
- เฮดเดอร์ฮีโร่ให้มีภาพเกมมิ่ง/ม็อกอัป และพื้นหลังดาร์กเบลอ
- รูป OG สำหรับ Facebook ใช้ไอดีไฟล์/พาธ: `/images/og-kingpro.jpg` (ใส่ placeholder ถ้าไม่มีไฟล์จริง)
- ถ้าต้องใส่โลโก้ LINE ที่ปุ่มลอย ให้ใช้ SVG มาตรฐานหรือไอคอนข้อความ “LINE”

[Information Architecture]
1) Hero
   - Headline: "เติมเกมไว ปลอดภัย ราคาโปร — กับ Kingpro Topup"
   - Subheadline: "รองรับหลายเกม ทำรายการฉับไว จ่ายสะดวก มีทีมงานดูแล"
   - Bullets 3 ข้อ (ไอคอนเล็ก): "ราคาคุ้มจริง" / "โอนปุ๊บเข้าปั๊บ" / "ซัพพอร์ตตอบไว"
   - ปุ่มหลัก (ทอง): "เริ่มใช้งาน" → ลิงก์ LINE
   - ปุ่มรอง (เขียว เส้นขอบ): "ทักแชทรับโปร" → ลิงก์ LINE
   - แถบโลโก้เกม/แพลตฟอร์มที่รองรับ (placeholder)

2) Game Catalog / Services (การ์ด 6–12 ใบ)
   - ตัวอย่างการ์ด: ROV, Free Fire, PUBG Mobile, Valorant, Genshin, Roblox, Steam Wallet, Google Play, iTunes
   - การ์ดประกอบด้วย: ชื่อเกม, ราคาเริ่มต้น (placeholder), badge “ยอดนิยม/โปรวันนี้”, ปุ่ม "เลือกแพ็ก" (กดแล้วพาไป LINE)
   - จัด grid responsive

3) How It Works
   - 3 ขั้นตอนพร้อมไอคอน:
     1) เลือกเกม/แพ็กที่ต้องการ
     2) ชำระเงินตามช่องทางที่สะดวก
     3) รับไอเท็ม/โค้ดเติมทันที (~1–5 นาที*)
   - มี motion เล็ก ๆ ตอนเลื่อนเข้าจอ

4) Trust / Social Proof
   - สเตตัส: "ลูกค้ากว่า 50,000+ ราย", "รีวิวเฉลี่ย 4.9/5", "ทำรายการ ~1–5 นาที*"
   - การ์ดรีวิว 3–5 ใบ (ข้อความตัวอย่าง)

5) Promo/Bundle
   - แบนเนอร์โปร: "เติมครั้งแรก ลดเพิ่ม 5%" + ปุ่ม "รับโปรตอนนี้" → LINE

6) FAQ (Accordion ของ shadcn/ui)
   - ถาม-ตอบยอดฮิต 6–8 ข้อ (เวลา, วิธีจ่าย, รับประกัน, ผิดเกมทำไง, ติดต่อแอดมิน, ความปลอดภัย)

7) Final CTA
   - สรุปสั้น ๆ + ปุ่มใหญ่ "เริ่มใช้งาน" (ทอง) → LINE
   - ปุ่มรอง "ทักแชทรับโปร" (เขียว) → LINE

[Copywriting (Thai)]
- Hero H1: "เติมเกมไว ปลอดภัย ราคาโปร — กับ Kingpro Topup"
- Sub: "รองรับ ROV, Free Fire, PUBG M, Valorant, Genshin, Roblox และอีกเพียบ ทำรายการฉับไว จ่ายสะดวก"
- การ์ดเกม: "เริ่มต้น ฿xx" (placeholder) + ปุ่ม "เลือกแพ็ก"
- Micro-copy ความน่าเชื่อถือ: "ลูกค้าจริงรีวิวแน่น", "การันตีความปลอดภัย", "ทำรายการ ~1–5 นาที*"
- Final CTA: "เริ่มเติมเกมตอนนี้" / "ทักแชทรับโปร"

[SEO/Meta]
- title: "Kingpro Topup | เติมเกมไว ปลอดภัย ราคาโปร"
- description: "บริการเติมเกม/โค้ดดิจิทัล รวดเร็ว ปลอดภัย ราคาเป็นกันเอง รองรับหลายเกม ยืนยันไว มีทีมงานดูแล"
- open graph / twitter:
  - og:title = "Kingpro Topup | เติมเกมไว ปลอดภัย ราคาโปร"
  - og:description = ตาม description
  - og:image = https://YOUR_DOMAIN/images/og-kingpro.jpg
  - og:type = website
  - twitter:card = summary_large_image

[Accessibility]
- คอนทราสต์สูง ปุ่มใหญ่ ใช้งานนิ้วโป้งง่าย
- ใส่ aria-label ที่ปุ่มลอย LINE และปุ่ม CTA

[Implementation]
- สร้างไฟล์: `app/page.tsx` (หน้า), `components/LandingPage.tsx` (คอมโพเนนต์), `components/LineFab.tsx` (ปุ่มลอย)
- ใช้ shadcn/ui: Button, Card, Badge, Accordion
- Tailwind config: เพิ่มสี `brand` (ทอง) และ `accent` (เขียว) หรือใช้โค้ดคงที่ตามรหัสสี
- ใส่โค้ดปุ่มลอยมุมขวาล่างติดทุกหน้าจอ (fixed bottom-4 right-4 z-50, มี tooltip "แชทกับเราใน LINE")
- ใส่ Analytics event (เช่น data-attr) เมื่อกด CTA (console.log หรือ placeholder ฟังก์ชัน)
- โค้ดต้อง build ได้จริง (`yarn build`) ไม่มี any ที่ไม่จำเป็น
- ใส่ข้อมูลตัวอย่าง (การ์ดเกม/ราคา) ภายในไฟล์ให้หน้า render ได้ทันที
- ปุ่มในเมนู "เริ่มใช้งาน" (ขวาบน) ให้ลิงก์ไป LINE เช่นกัน

[Nice-to-have]
- เงา glow เบา ๆ ที่โลโก้/ปุ่มทอง
- เบลอพื้นหลัง hero ด้วย backdrop-filter
- รองรับภาพ retina (srcSet) สำหรับ hero/โทรศัพท์ mockup

ส่งออกโค้ดที่พร้อมรัน/ดีพลอยได้ทันที
