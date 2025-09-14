"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import GamePackages from "./GamePackages"
import TermsOfService from "./TermsOfService"
import PrivacyPolicy from "./PrivacyPolicy"
import { 
  CheckCircle, 
  Zap, 
  Shield, 
  MessageCircle, 
  Star, 
  Clock,
  Users,
  Gift,
  Gamepad2,
  CreditCard,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const LandingPage = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  const handleCTAClick = (source: string) => {
    console.log(`CTA clicked from: ${source}`)
    window.open("https://lin.ee/GGT0Lst", "_blank")
  }

  const handleGameSelect = (gameName: string) => {
    console.log(`Game selected: ${gameName}`)
    setSelectedGame(gameName)
  }

  const gameCards = [
    { name: "Roblox", price: "฿35", badge: "ยอดนิยม", image: "/images/Roblox Logo.jpg" },
    { name: "PUBG Mobile", price: "฿35", badge: "โปรวันนี้", image: "/images/pubg mobile logo.jpg" },
    { name: "Arena Breakout", price: "฿35", badge: "", image: "/images/arena-breakout logo.jpg" },
    { name: "Delta Force", price: "฿12", badge: "ใหม่", image: "/images/Delta force logo.png" },
    { name: "Eggy Party", price: "฿7", badge: "โปรวันนี้", image: "/images/Eggy-Party logo.jpg" },
    { name: "ROV", price: "฿12", badge: "ยอดนิยม", image: "/images/rov logo.png" },
    { name: "Call of Duty Mobile", price: "฿35", badge: "", image: "/images/call-of-duty-mobile-logo.jpg" },
  ]

  const reviews = [
    { name: "อาร์ม", rating: 5, comment: "เติมเร็วมาก ได้ของจริง ราคาดีด้วย" },
    { name: "มิ้นต์", rating: 5, comment: "บริการดีมาก ทีมงานตอบเร็ว แนะนำเลย" },
    { name: "โจ", rating: 5, comment: "ใช้บริการมา 6 เดือนแล้ว ไม่เคยผิดหวัง" },
  ]

  const faqData = [
    {
      question: "เติมเกมแล้วจะได้รับเมื่อไหร่?",
      answer: "ปกติจะได้รับภายใน 1-5 นาที หลังจากชำระเงินเรียบร้อยแล้ว ในกรณีที่ระบบล่าช้าอาจใช้เวลานานสุด 30 นาที"
    },
    {
      question: "จ่ายเงินผ่านช่องทางไหนได้บ้าง?",
      answer: "รองรับการจ่ายเงินผ่าน โอนธนาคาร, พร้อมเพย์, ทรูมันนี่ วอลเล็ต และบัตรเครดิต"
    },
    {
      question: "มีการรับประกันไหม?",
      answer: "เรารับประกัน 100% หากไม่ได้รับไอเท็มตามที่สั่ง เราจะคืนเงินเต็มจำนวนหรือทำรายการใหม่ให้"
    },
    {
      question: "เติมผิดเกมหรือผิด ID ทำยังไง?",
      answer: "หากเติมผิดเกมหรือผิด ID กรุณาติดต่อทีมงาน KingPro ทันทีทาง LINE @kingpro.th เราจะช่วยแก้ไขให้ในกรณีที่ยังไม่ได้ทำรายการ"
    },
    {
      question: "ติดต่อทีมงาน KingPro ได้ที่ไหน?",
      answer: "ติดต่อได้ทาง LINE Official Account: @kingpro.th หรือ Facebook Page: KingproTopup หรือคลิกปุ่มแชทในเว็บไซต์ ทีมงาน KingPro พร้อมให้บริการและแก้ไขปัญหา 24 ชั่วโมง"
    },
    {
      question: "ข้อมูลส่วนตัวปลอดภัยไหม?",
      answer: "ข้อมูลของคุณปลอดภัย 100% กับ KingPro เราใช้ระบบเข้ารหัส SSL และไม่เก็บข้อมูลบัตรเครดิตของลูกค้า ทีมงานเรามีประสบการณ์ด้านความปลอดภัยมากกว่า 3 ปี"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1020] via-[#1a1f3a] to-[#0B1020] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 backdrop-blur-hero bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
              <Image
                src="/images/logo_kingpro-removebg-preview.png"
                alt="KingPro Logo"
                width={70}
                height={32}
                className="object-contain"
              />
          </div>
          <Button 
            onClick={() => handleCTAClick("header")}
            className="hidden md:flex"
            data-attr="header-cta-click"
          >
            เริ่มใช้งาน
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-success/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              เติมเกมไว ปลอดภัย ราคาโปร<br />
              <span className="text-brand">กับ KingPro</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              รองรับ Roblox, PUBG Mobile, Arena Breakout, Delta Force, Eggy Party, ROV และอีกเพียบ<br />
              ทำรายการฉับไว จ่ายสะดวก
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-success">
                <CheckCircle className="w-5 h-5" />
                <span>ราคาคุ้มจริง</span>
              </div>
              <div className="flex items-center gap-2 text-success">
                <Zap className="w-5 h-5" />
                <span>โอนปุ๊บเข้าปั๊บ</span>
              </div>
              <div className="flex items-center gap-2 text-success">
                <MessageCircle className="w-5 h-5" />
                <span>ซัพพอร์ตตอบไว</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={() => handleCTAClick("hero-primary")}
                className="text-lg px-8 py-4"
                data-attr="hero-primary-cta-click"
              >
                เริ่มใช้งาน
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => handleCTAClick("hero-secondary")}
                className="text-lg px-8 py-4"
                data-attr="hero-secondary-cta-click"
              >
                ทักแชทรับโปร
              </Button>
            </div>

            {/* Platform Logos */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <span>รองรับ:</span>
              <span>Roblox</span>
              <span>PUBG Mobile</span>
              <span>Arena Breakout</span>
              <span>Delta Force</span>
              <span>Eggy Party</span>
              <span>ROV</span>
              <span>Call of Duty Mobile</span>
              <span>และอีกมากมาย</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Game Catalog */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">เกมและบริการที่รองรับ</h2>
            <p className="text-gray-300 text-lg">เลือกเกมที่คุณชอบ เริ่มเติมได้เลย</p> 
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameCards.map((game, index) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:border-brand/50 transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 relative">
                      <Image
                        src={game.image}
                        alt={`${game.name} logo`}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <CardTitle className="text-xl">{game.name}</CardTitle>
                    <CardDescription>
                      เริ่มต้น <span className="text-brand font-bold">{game.price}</span>
                      {game.badge && (
                        <Badge 
                          variant={game.badge === "ใหม่" ? "new" : game.badge === "ยอดนิยม" ? "default" : "success"} 
                          className="ml-2"
                        >
                          {game.badge}
                        </Badge>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full" 
                      onClick={() => handleGameSelect(game.name)}
                      data-attr={`game-card-click-${game.name}`}
                    >
                      เลือกแพ็ก
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">วิธีการใช้งาน</h2>
            <p className="text-gray-300 text-lg">ง่ายแค่ 3 ขั้นตอน</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Gamepad2 className="w-12 h-12" />, title: "เลือกเกม/แพ็ก", description: "เลือกเกมและแพ็กที่ต้องการ" },
              { icon: <CreditCard className="w-12 h-12" />, title: "ชำระเงิน", description: "ชำระเงินตามช่องทางที่สะดวก" },
              { icon: <Award className="w-12 h-12" />, title: "รับไอเท็ม", description: "รับไอเท็ม/โค้ดเติมทันที (~1–5 นาที*)" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-brand/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 text-brand">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ลูกค้าไว้วางใจเรา</h2>
            <p className="text-lg text-gray-300 mb-8">
              ทีม KingPro ให้บริการมากกว่า 3 ปี พร้อมซัพพอร์ต 24/7
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand mb-2">50,000+</div>
                <div className="text-gray-300">ลูกค้าทั้งหมด</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand mb-2">4.9/5</div>
                <div className="text-gray-300">รีวิวเฉลี่ย</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand mb-2">1-5</div>
                <div className="text-gray-300">นาที ทำรายการ*</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-2xl">
              <Image
                src="/images/review.jpg"
                alt="รีวิวจากลูกค้าจริง"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-brand/20 to-success/20 border-brand/50">
              <CardContent className="p-8 text-center">
                <Gift className="w-16 h-16 text-brand mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  รับโปรพิเศษสุดคุ้ม
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  รับได้ทันที วันนี้เท่านั้น!
                </p>
                <Button 
                  size="lg" 
                  onClick={() => handleCTAClick("promo")}
                  className="text-lg px-8 py-4"
                  data-attr="promo-cta-click"
                >
                  รับโปรตอนนี้
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">ติดต่อทีมงาน KingPro</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-700 cursor-pointer hover:border-brand/50 transition-all duration-300 hover:scale-105" onClick={() => { console.log("LINE Official card clicked"); window.open("https://lin.ee/GGT0Lst", "_blank"); }}>
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-10 h-10 text-brand mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-3">LINE Official</h3>
                  <p className="text-gray-300 mb-2">@kingpro.th</p>
                  <p className="text-xs text-gray-400">
                    ช่องทางหลักสำหรับสั่งซื้อ<br />
                    ตอบกลับเร็วที่สุด ภายใน 5 นาที
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 cursor-pointer hover:border-blue-500/50 transition-all duration-300 hover:scale-105" onClick={() => { console.log("Facebook Page card clicked"); window.open("https://www.facebook.com/KingproTopup", "_blank"); }}>
                <CardContent className="p-6 text-center">
                  <Users className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-3">Facebook Page</h3>
                  <p className="text-gray-300 mb-2">KingproTopup</p>
                  <p className="text-xs text-gray-400">
                    ติดตามข่าวสารและโปรโมชั่น<br />
                    อัพเดตล่าสุดทุกวัน
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Clock className="w-10 h-10 text-success mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-3">เวลาทำการ</h3>
                  <p className="text-gray-300 mb-2">24 ชั่วโมง ทุกวัน</p>
                  <p className="text-xs text-gray-400">
                    ทีมงาน KingPro พร้อมให้บริการ<br />
                    รวดเร็ว ปลอดภัย เชื่อถือได้
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">คำถามที่พบบ่อย</h2>
            <p className="text-gray-300 text-lg">คำตอบสำหรับคำถามยอดฮิต</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-left hover:text-brand">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              พร้อมเติมเกมแล้วใช่ไหม?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              เริ่มต้นใช้งาน KingPro วันนี้ รับประกันความปลอดภัย 100%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => handleCTAClick("final-primary")}
                className="text-lg px-8 py-4"
                data-attr="final-primary-cta-click"
              >
                เริ่มเติมเกมตอนนี้
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => handleCTAClick("final-secondary")}
                className="text-lg px-8 py-4"
                data-attr="final-secondary-cta-click"
              >
                ทักแชทรับโปร
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/logo_kingpro-removebg-preview.png"
              alt="KingPro Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 mb-4">
            บริการเติมเกมออนไลน์ราคาถูก เติมเร็วทันใจ ปลอดภัย<br />
            ติดต่อเรา: LINE @kingpro.th | Facebook: KingproTopup
          </p>
          <p className="text-gray-500 text-sm mb-2">
            © 2024 KingPro - บริการเติมเกมออนไลน์อันดับ 1 ในไทย
          </p>
          <p className="text-gray-600 text-xs">
            ทีมงานพร้อมให้บริการ 24/7 | รับประกันความปลอดภัย 100%
          </p>
          <div className="mt-4 pt-4 border-t border-gray-700 flex justify-center gap-4">
            <button 
              onClick={() => setShowTerms(true)}
              className="text-gray-500 hover:text-brand text-xs underline transition-colors"
            >
              เงื่อนไขการให้บริการ
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => setShowPrivacy(true)}
              className="text-gray-500 hover:text-brand text-xs underline transition-colors"
            >
              นโยบายความเป็นส่วนตัว
            </button>
          </div>
        </div>
      </footer>

      {/* Game Packages Modal */}
      {selectedGame && (
        <GamePackages 
          gameName={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <TermsOfService 
          onClose={() => setShowTerms(false)}
        />
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <PrivacyPolicy 
          onClose={() => setShowPrivacy(false)}
        />
      )}
    </div>
  )
}

export default LandingPage