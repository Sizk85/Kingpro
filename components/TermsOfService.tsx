"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface TermsOfServiceProps {
  onClose: () => void
}

const TermsOfService = ({ onClose }: TermsOfServiceProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-800"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h2 className="text-2xl font-bold">เงื่อนไขการให้บริการ</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="prose prose-invert max-w-none">
              
              <h3 className="text-xl font-bold text-brand mb-4">ข้อกำหนดการใช้บริการทั่วไป</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>ผู้ใช้บริการตกลงที่จะยอมรับเงื่อนไขการให้บริการ โดยการใช้บริการจะถือว่าเป็นการยอมรับเงื่อนไขการให้บริการนี้ โดย KingPro มีสิทธิ์ที่จะแก้ไขหรือเพิ่มเติมเงื่อนไขการให้บริการได้ตลอดเวลาโดยไม่ต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า</p>
                <p>KingPro สงวนสิทธิ์ในการแก้ไขหรือเพิ่มเติมข้อตกลงการให้บริการ ให้ KingPro เป็นผู้แก้ไขหรือเพิ่มเติมแต่เพียงผู้เดียว</p>
                <p>KingPro สงวนสิทธิ์ในการแก้ไข เพิ่มเติมหรือยกเลิกการให้บริการ ไม่ว่าจะเป็นการชั่วคราวหรือตลอดไปได้ตลอดเวลา โดยที่ KingPro ไม่ต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า</p>
                <p>ก่อนหน้าที่ผู้ใช้บริการจะใช้บริการหรือเปิดบัญชีกับทาง KingPro ผู้ใช้บริการจะต้องอ่านและยอมรับเงื่อนไขการให้บริการทั้งหมด</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">ความเป็นส่วนตัว</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>ผู้ใช้บริการยินยอมให้ KingPro เก็บรวบรวม ใช้งาน เปิดเผย และ/หรือดำเนินการกับเนื้อหาข้อมูลส่วนบุคคลและข้อมูลการใช้บริการของผู้ใช้บริการตามที่ได้อธิบายไว้ในนโยบายความเป็นส่วนตัว</p>
                <p>KingPro จะไม่เปิดเผยข้อมูลส่วนบุคคลต่อผู้ใช้บริการต่อบุคคลภายนอก ไม่ว่าทั้งหมดหรือบางส่วน หรือยินยอมให้บุคคลภายนอกสามารถเข้าถึงข้อมูลส่วนบุคคลของผู้ใช้บริการโดยไม่ได้รับความยินยอมจาก KingPro เป็นลายลักษณ์อักษรก่อน</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">บัญชีและความปลอดภัย</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>ในการใช้บริการผู้ใช้บริการจำเป็นต้องมีการลงทะเบียนบัญชี โดย KingPro มีสิทธิ์ที่จะระงับหรือยกเลิกบัญชีของคุณได้ตลอดเวลา โดยไม่ต้องแจ้งให้ผู้ใช้บริการล่วงหน้า</p>
                <p>ผู้ใช้บริการตกลงที่จะเก็บบัญชีและรหัสผ่านไว้เป็นความลับและใช้งานเฉพาะบนแพลตฟอร์ม และผู้ใช้บริการควรแจ้ง KingPro ทันที เมื่อพบว่ามีการใช้งานบัญชีและรหัสผ่านของคุณโดยไม่ได้รับอนุญาต</p>
                <p>ผู้ใช้บริการจะต้องรับผิดชอบอย่างเต็มที่ต่อกิจกรรมทั้งหมดที่เกิดขึ้นภายใต้บัญชีของผู้ใช้บริการ</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">การสั่งซื้อและการเติมเงิน</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>KingPro สนับสนุนให้ผู้ใช้บริการทำการเติมเงินผ่านช่องทางต่อไปนี้:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>โอนเงินผ่านธนาคาร</li>
                  <li>ทรูมันนี่วอลเล็ท</li>
                  <li>Promptpay (พร้อมเพย์)</li>
                  <li>บัตรเครดิต</li>
                </ul>
                <p>ผู้ใช้บริการสามารถเลือกช่องทางการเติมเงินได้ด้วยตนเองในขั้นตอนการเติมเงิน</p>
                <p>KingPro ขอสงวนสิทธิ์ไม่รับผิดชอบใดๆ ต่อความสูญเสียหรือความเสียหายแก่ผู้ใช้บริการอันเกิดจากความผิดพลาดของผู้ใช้บริการ</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">นโยบายการคืนเงิน</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>ผู้ใช้บริการสามารถทำการขอคืนเงิน (Refund) ได้ โดยจะต้องแจ้งขอคืนเงินภายในระยะเวลา 7 วันนับจากวันที่ได้ทำการชำระเงินให้กับทาง KingPro</p>
                <p>KingPro ขอสงวนสิทธิ์ในการคืนเงินให้กับผู้ใช้บริการ กรณีที่ผู้ใช้บริการได้ทำการแจ้งขอคืนเงินล่าช้ากว่า 7 วันนับจากวันที่ผู้ใช้บริการทำรายการ</p>
                <p>ผู้ใช้บริการรับทราบว่า KingPro ไม่มีนโยบายการคืนเงินคงเหลือภายในบัญชีผู้ใช้บริการไม่ว่าในกรณีใดๆ</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">การติดต่อและการบริการลูกค้า</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p><strong>ช่องทางการติดต่อ KingPro:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>LINE Official Account: @kingpro.th</li>
                  <li>Facebook Page: KingproTopup</li>
                  <li>เวลาทำการ: 24 ชั่วโมง ทุกวัน</li>
                </ul>
                <p>ทีมงาน KingPro พร้อมให้บริการและแก้ไขปัญหาตลอด 24/7 โดยมีเป้าหมายตอบกลับภายใน 5 นาที</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">ข้อจำกัดความรับผิดชอบ</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>KingPro ขอรับรองว่าจะให้บริการอย่างดีที่สุดเพื่อให้ผู้ใช้บริการได้รับการบริการที่พึงพอใจ</p>
                <p>หากการให้บริการใดๆของ KingPro เกิดความผิดพลาด ล่าช้า ไม่ว่าจะเกิดขึ้นจากระบบคอมพิวเตอร์ ระบบอินเตอร์เน็ต อุปกรณ์อิเล็กทรอนิกส์ต่างๆ ผู้ใช้บริการตกลงไม่ยกเหตุขัดข้องดังกล่าวมาเป็นข้อเรียกร้องค่าเสียหายใดๆจากทาง KingPro</p>
                <p>ผู้ใช้บริการรับทราบว่าเงินในบัญชีผู้ใช้งานมีอายุ 6 เดือนนับตั้งแต่วันที่ผู้ใช้บริการทำการเติมเงินครั้งล่าสุด</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">คำรับรองของผู้ใช้บริการ</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>ผู้ใช้บริการรับรองว่าผู้ใช้บริการมีอายุครบตามที่กฎหมายกำหนด หรือได้รับความยินยอมตามกฎหมาย ในการผูกพันตามเงื่อนไขการให้บริการฉบับนี้</p>
                <p>ผู้ใช้บริการรับรองว่าจะไม่ใช้บริการนี้ในการทำธุรกรรมทางการเงินที่มีวัตถุประสงค์อันมิชอบด้วยกฎหมาย</p>
                <p>ผู้ใช้บริการรับรองว่าข้อมูลที่ให้แก่ KingPro ตามเงื่อนไขและข้อกำหนดการใช้บริการฉบับนี้เป็นข้อมูลที่ถูกต้องทุกประการ</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">การยกเลิกการสั่งซื้อสินค้า</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>KingPro ขอสงวนสิทธิ์ในการยกเลิกรายการ แก้ไข เปลี่ยนแปลงข้อมูล หรือเพิกถอนการให้บริการที่ดำเนินการเสร็จสิ้นสมบูรณ์แล้ว</p>
                <p>KingPro ขอสงวนสิทธิ์ในการคืนเงินค่าสินค้าและบริการใดๆที่ดำเนินการเสร็จสิ้นสมบูรณ์แล้ว</p>
                <p>ผู้ใช้บริการรับทราบว่า KingPro ไม่มีนโยบายการคืนเงินคงเหลือภายในบัญชีผู้ใช้บริการไม่ว่าในกรณีใดๆ</p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <p className="text-center text-gray-400 text-sm">
                  <strong>ติดต่อเรา:</strong><br />
                  LINE Official Account: @@kingpro.th<br />
                  Facebook Page: KingproTopup<br />
                  เวลาทำการ: 24 ชั่วโมง ทุกวัน
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default TermsOfService