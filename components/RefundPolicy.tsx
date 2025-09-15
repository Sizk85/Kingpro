"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface RefundPolicyProps {
  onClose: () => void
}

const RefundPolicy = ({ onClose }: RefundPolicyProps) => {
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
              <h2 className="text-2xl font-bold">นโยบายการคืนเงิน</h2>
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
              
              <div className="mb-6">
                <p className="text-gray-300 text-sm mb-4">
                  คิงส์โปร - บริการเติมเกมออนไลน์ราคาถูก เติมเร็วทันใจ ปลอดภัย 100% ("KingPro") ขอแจ้งนโยบายการคืนสินค้าและคืนเงิน 
                  เพื่อเป็นข้อตกลงและสร้างความเข้าใจเกี่ยวกับการใช้บริการเว็บไซต์ ดังนี้
                </p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">นโยบายการคืนสินค้าและคืนเงิน</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
                  <p className="text-amber-400 text-sm font-semibold mb-2">ข้อกำหนดสำคัญ:</p>
                  <p className="text-gray-300 text-sm">
                    สินค้าที่ KingPro จัดจำหน่ายบนเว็บไซต์เป็น<strong>สินค้าดิจิตอล</strong> (เงินในเกม, ไอเทม, สกิน) 
                    ที่<strong>ไม่สามารถคืนสินค้าและไม่สามารถคืนเงินได้</strong> ยกเว้นกรณีพิเศษที่ระบุไว้ในนโยบายนี้
                  </p>
                </div>
                
                <p>KingPro จะทำการคืนเงินค่าสินค้าให้กับลูกค้า <strong>เฉพาะในกรณีที่ KingPro ไม่สามารถจัดส่งสินค้าให้ลูกค้าได้เท่านั้น</strong> 
                (โดยจะทำการคืนเงินให้ในส่วนที่ KingPro ไม่ได้จัดส่งสินค้าให้ลูกค้า)</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">กรณีที่ KingPro จะทำการคืนเงิน</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 text-sm font-semibold mb-2">กรณีที่สามารถขอคืนเงินได้:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>สินค้าหมด (เช่น สินค้าหมด Stock, สินค้ายกเลิกการผลิต)</li>
                    <li>เกิดเหตุสุดวิสัย (System Error) ที่ทำให้ไม่สามารถส่งมอบสินค้าได้</li>
                    <li>ระบบเกิดข้อผิดพลาดทำให้ไม่สามารถส่งมอบสินค้าได้</li>
                    <li>มีการหักเงินซ้ำจากระบบ (Double Charge)</li>
                    <li>KingPro ไม่สามารถดำเนินการจัดส่งสินค้าได้ด้วยเหตุผลทางเทคนิค</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">กรณีที่ไม่สามารถยกเลิก เปลี่ยนแปลง แก้ไข หรือคืนเงินได้</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 text-sm font-semibold mb-2">ไม่สามารถดำเนินการได้ในกรณีต่างๆ ดังนี้:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li><strong>ความผิดพลาดในการสั่งซื้อ:</strong> สั่งผิดรุ่น, ผิดประเภท, ผิดเซิร์ฟเวอร์, ผิดไอดี</li>
                    <li><strong>การเปลี่ยนแปลงราคา:</strong> กรณีที่เกิดขึ้นจากการเปลี่ยนแปลงของราคาสินค้าที่อาจเกิดขึ้นได้ในอนาคต</li>
                    <li><strong>Gift Voucher และส่วนลด:</strong> ทุกกรณี รวมถึงการต้องการใส่ส่วนลดเพิ่มเติม, ลืมใส่ส่วนลด, Coupon</li>
                    <li><strong>การเปลี่ยนใจ:</strong> กรณีที่เกิดขึ้นจากการเปลี่ยนใจ (Change of mind) ของผู้สั่งซื้อสินค้าทุกกรณี</li>
                    <li><strong>สินค้าถูกใช้งานแล้ว:</strong> เงินในเกมหรือไอเทมที่ได้รับเข้าบัญชีเกมแล้ว</li>
                    <li><strong>ข้อมูลผิดพลาด:</strong> ผู้ใช้บริการกรอกข้อมูลไอดีเกม, ชื่อผู้เล่น, เซิร์ฟเวอร์ ผิดพลาด</li>
                    <li><strong>การแจ้งล่าช้า:</strong> แจ้งขอคืนเงินเกินกำหนดเวลาที่กำหนด</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">ระยะเวลาการคืนเงิน (ตามช่องทางการชำระเงิน)</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <p className="text-blue-400 text-sm font-semibold mb-2">ช่องทางการชำระเงินที่รองรับ:</p>
                  <p className="text-gray-300 text-sm">
                    KingPro รองรับการชำระเงินผ่าน <strong>2 ช่องทางหลัก</strong> เท่านั้น 
                    เพื่อให้บริการที่รวดเร็วและมีประสิทธิภาพสูงสุด
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-700 rounded-lg p-4">
                    <h4 className="text-brand font-semibold mb-2">🏦 โอนธนาคาร</h4>
                    <p className="text-sm">
                      การคืนเงินผ่านการโอนธนาคาร ใช้เวลา <strong>1-3 วันทำการ</strong> 
                      หลังจากที่ KingPro ได้ดำเนินการอนุมัติการคืนเงินแล้ว
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      * รองรับธนาคารชั้นนำทุกแห่งในประเทศไทย
                    </p>
                  </div>

                  <div className="border border-gray-700 rounded-lg p-4">
                    <h4 className="text-brand font-semibold mb-2">💰 TrueMoney Wallet</h4>
                    <p className="text-sm">
                      จะทำการคืนเงินกลับไปยัง TrueMoney Wallet ที่ลูกค้าใช้ในการชำระเงิน 
                      โดยใช้ระยะเวลาประมาณ <strong>7-14 วันทำการ</strong>
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      * การคืนเงินจะส่งกลับไปยังหมายเลขที่ใช้ชำระเงิน
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">ขั้นตอนการขอคืนเงิน</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <ol className="list-decimal list-inside ml-4 space-y-3 text-gray-300">
                    <li><strong>ติดต่อทีมงาน KingPro</strong> ผ่านช่องทางการติดต่อที่กำหนด</li>
                    <li><strong>แจ้งรายละเอียดการทำรายการ</strong> (เลขที่คำสั่งซื้อ, วันที่และเวลาทำรายการ, จำนวนเงิน)</li>
                    <li><strong>ระบุเหตุผลในการขอคืนเงิน</strong> พร้อมอธิบายรายละเอียดที่เกิดขึ้น</li>
                    <li><strong>แนบหลักฐานการทำรายการ</strong> (สลิป, Screenshot, เลขที่อ้างอิง)</li>
                    <li><strong>รอการตรวจสอบจากทีมงาน</strong> (1-3 วันทำการ)</li>
                    <li><strong>รับแจ้งผลการพิจารณา</strong> และรับการคืนเงินผ่านช่องทางเดิมที่ชำระเงิน</li>
                  </ol>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">ข้อสงวนสิทธิ์</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
                  <p>• KingPro ขอสงวนสิทธิ์ในการคืนเงินเกินระยะเวลาที่กำหนด หากเกิดเหตุสุดวิสัย</p>
                  <p>• KingPro ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขใดๆ โดยไม่จำเป็นต้องแจ้งให้ทราบล่วงหน้า</p>
                  <p>• การพิจารณาคืนเงินจะขึ้นอยู่กับดุลยพินิจของ KingPro และจะเป็นที่สิ้นสุด</p>
                  <p>• KingPro ไม่มีนโยบายการคืนเงินคงเหลือภายในบัญชีผู้ใช้บริการไม่ว่าในกรณีใดๆ</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">การติดต่อเรื่องการคืนเงิน</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 text-sm font-semibold mb-2">ช่องทางการติดต่อ:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li><strong>LINE Official Account:</strong> @kingpro.th</li>
                    <li><strong>Facebook Page:</strong> KingproTopup</li>
                    <li><strong>Email:</strong> KingPro.online168@gmail.com</li>
                    <li><strong>เวลาทำการ:</strong> 24 ชั่วโมง ทุกวัน</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-300">
                    ทีมงาน KingPro พร้อมให้บริการและช่วยเหลือเรื่องการคืนเงินตลอด 24/7 
                    โดยมีเป้าหมายตอบกลับภายใน 5 นาที
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-6">
                <p className="text-red-400 text-sm">
                  <strong>⚠️ คำเตือนสำคัญ:</strong><br />
                  • การคืนเงินจะดำเนินการเฉพาะกรณีที่เข้าเงื่อนไขที่กำหนดเท่านั้น<br />
                  • กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนทำรายการทุกครั้ง<br />
                  • สินค้าดิจิตอลไม่สามารถคืนได้หลังจากส่งมอบเรียบร้อยแล้ว<br />
                  • การตัดสินใจของ KingPro ถือเป็นที่สิ้นสุด
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <p className="text-center text-gray-400 text-sm">
                  <strong>ติดต่อเรา:</strong><br />
                  LINE Official Account: @kingpro.th<br />
                  Facebook Page: KingproTopup<br />
                  Email: KingPro.online168@gmail.com<br />
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

export default RefundPolicy