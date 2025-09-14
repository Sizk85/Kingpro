"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PrivacyPolicyProps {
  onClose: () => void
}

const PrivacyPolicy = ({ onClose }: PrivacyPolicyProps) => {
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
              <h2 className="text-2xl font-bold">นโยบายความเป็นส่วนตัว</h2>
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
              
              <p className="text-gray-300 text-sm mb-6">
                 นโยบายความเป็นส่วนตัวนี้เป็นข้อตกลงระหว่างคุณไม่ว่าจะเป็นการส่วนตัวหรือในนามหน่วยงาน ซึ่งต่อไปนี้จะเรียกว่า &ldquo;ผู้ใช้บริการ&rdquo; และ KingPro ซึ่งต่อไปนี้จะเรียกว่า &ldquo;บริษัท&rdquo; เพื่อใช้บริการแพลตฟอร์ม KingPro ซึ่งต่อไปนี้จะเรียกว่า &ldquo;บริการ&rdquo; โดยตระหนักถึงความสำคัญและหน้าที่ภายใต้ พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
              </p>

              <h3 className="text-xl font-bold text-brand mb-4">การบังคับใช้</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>นโยบายความเป็นส่วนตัวนี้ครอบคลุมถึงข้อมูลส่วนตัวของผู้ใช้บริการ รวมถึงบุคคลที่ดำเนินการในนามนิติบุคคลซึ่งเป็นเจ้าของข้อมูลส่วนบุคคล</p>
                 <p>&ldquo;ผู้ใช้บริการ&rdquo; หมายถึงบุคคลที่เป็นเป้าหมายในการดำเนินงานขายผลิตภัณฑ์หรือบริการของ KingPro และหมายความรวมถึง ผู้เข้าร่วมแคมเปญหรือกิจกรรมทางการตลาดของ KingPro</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">ข้อมูลส่วนบุคคล</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>ข้อมูลส่วนบุคคลหมายถึงข้อมูลเกี่ยวกับบุคคลซึ่งทำให้สามารถระบุตัวตนบุคคลนั้นได้ไม่ว่าทางตรงหรือทางอ้อม เช่น:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>ชื่อ นามสกุล ที่อยู่ หมายเลขโทรศัพท์</li>
                  <li>เลขประจำตัวประชาชน เลขบัตรประกันสังคม</li>
                  <li>ที่อยู่อีเมล (email-address)</li>
                  <li>IP Address, Cookie ID, Log File</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">KingPro จะจัดเก็บข้อมูลของคุณเมื่อ</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>ผู้ใช้บริการได้เข้าถึงและ/หรือใช้บริการบนแพลตฟอร์มของ KingPro</li>
                  <li>เมื่อผู้ใช้บริการส่งแบบฟอร์ม หรือสมัครใช้บริการใดๆบนแพลต์ฟอร์มของ KingPro</li>
                  <li>เมื่อผู้ใช้บริการทำการเติมเงินด้วยช่องทางการชำระเงินของทาง KingPro</li>
                  <li>เมื่อผู้ใช้บริการทำการซื้อสินค้าและ/หรือบริการ บนแพลตฟอร์มของ KingPro</li>
                  <li>เมื่อผู้ใช้บริการได้อนุญาตให้ KingPro เข้าถึงบัญชีโซเชี่ยลมีเดียของผู้ใช้บริการ</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">KingPro จะเก็บข้อมูลใดไว้บ้าง</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <div>
                  <p className="font-semibold mb-2">ข้อมูลส่วนบุคคลพื้นฐาน:</p>
                  <p>คำนำหน้า ชื่อ นามสกุล เพศ วันเดือนปีเกิด อายุ เลขที่ประจำตัวประชาชน ที่อยู่ปัจจุบัน ที่อยู่ตามทะเบียนบ้าน อีเมล หมายเลขโทรศัพท์</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">ข้อมูลการติดต่อ:</p>
                  <p>บัญชีผู้ใช้งาน ประวัติการใช้งาน</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">ข้อมูลการทำธุรกรรมและการเงิน:</p>
                  <p>ประวัติการสั่งซื้อ ข้อมูลยอดเงินคงเหลือของลูกค้า</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">ข้อมูลทางเทคนิค:</p>
                  <p>IP address, Cookie ID, ประวัติการใช้งานเว็บไซต์ (Activity Log)</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">ข้อมูลอื่น ๆ:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>ชื่อบัญชีโซเชียลมีเดีย (Facebook, LINE)</li>
                    <li>ข้อมูลทางการเงิน เช่น หมายเลขบัญชีธนาคาร</li>
                    <li>ข้อมูลการติดต่อกับ KingPro เช่นข้อมูลภาพหรือเสียง ข้อความแชท</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">วัตถุประสงค์ในการเก็บรวบรวมข้อมูลส่วนบุคคล</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>KingPro จะดำเนินการจัดเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของผู้ใช้บริการ ตามวัตถุประสงค์ดังต่อไปนี้:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>เพื่อใช้ในการดำเนินการยืนยันตัวตนของผู้ใช้บริการ</li>
                  <li>เพื่อใช้ในการติดต่อกับผู้ใช้บริการในกรณีที่เกิดความผิดพลาด</li>
                  <li>เพื่อวัตถุประสงค์ในการรับข่าวสาร หรือข้อมูลเพื่อส่งเสริมทางการตลาด</li>
                  <li>เพื่อการป้องกันอาชญากรรมและการฉ้อโกง รวมถึงการรักษาความปลอดภัยของระบบ</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">วิธีการเก็บรักษาข้อมูลส่วนบุคคล</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>KingPro จะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์ ด้วยรูปแบบดังต่อไปนี้:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>เซิร์ฟเวอร์ที่มีความปลอดภัยสูง</li>
                  <li>ระบบเข้ารหัส SSL</li>
                  <li>การควบคุมการเข้าถึงข้อมูล</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">KingPro เปิดเผยข้อมูลแก่บุคคลภายนอกหรือไม่</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>KingPro จะไม่เปิดเผยข้อมูลส่วนบุคคลต่อผู้ใช้บริการต่อบุคคลภายนอก ไม่ว่าทั้งหมดหรือบางส่วน หรือยินยอมให้บุคคลภายนอกสามารถเข้าถึงข้อมูลส่วนบุคคลของผู้ใช้บริการโดยไม่ได้รับความยินยอมจาก KingPro เป็นลายลักษณ์อักษรก่อน</p>
                <p>KingPro อาจเปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่ผู้อื่นภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">สิทธิของเจ้าของข้อมูลส่วนบุคคล</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล คุณมีสิทธิในการดำเนินการดังต่อไปนี้:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>สิทธิขอถอนความยินยอม:</strong> คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา</li>
                  <li><strong>สิทธิขอเข้าถึงข้อมูล:</strong> คุณมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของคุณที่อยู่ในความรับผิดชอบของ KingPro</li>
                  <li><strong>สิทธิขอถ่ายโอนข้อมูล:</strong> คุณมีสิทธิขอรับข้อมูลส่วนบุคคลของคุณในรูปแบบที่สามารถอ่านได้</li>
                  <li><strong>สิทธิขอคัดค้าน:</strong> คุณมีสิทธิขอคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล</li>
                  <li><strong>สิทธิขอให้ลบหรือทำลายข้อมูล:</strong> คุณมีสิทธิขอลบหรือทำลายข้อมูลส่วนบุคคลของคุณ</li>
                  <li><strong>สิทธิขอให้แก้ไขข้อมูล:</strong> คุณมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลให้ถูกต้อง</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">เทคโนโลยีติดตามตัวบุคคล (Cookies)</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>เพื่อเพิ่มประสบการณ์การใช้งานของคุณให้สมบูรณ์และมีประสิทธิภาพมากขึ้น KingPro ใช้คุกกี้ (Cookies) หรือเทคโนโลยีที่คล้ายคลึงกัน เพื่อพัฒนาการเข้าถึงสินค้าหรือบริการ</p>
                <p>หากคุณไม่ต้องการให้มีคุกกี้ไว้ในคอมพิวเตอร์ของคุณ คุณสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธคุกกี้ก่อนที่จะใช้เว็บไซต์ของ KingPro ได้</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">การรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>KingPro จะรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของคุณไว้ตามหลักการ:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>การรักษาความลับ (confidentiality)</li>
                  <li>ความถูกต้องครบถ้วน (integrity)</li>
                  <li>สภาพพร้อมใช้งาน (availability)</li>
                </ul>
                <p>เพื่อป้องกันการสูญหาย เข้าถึง ใช้ เปลี่ยนแปลง แก้ไข หรือเปิดเผย</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>ในกรณีที่มีเหตุละเมิดข้อมูลส่วนบุคคลของคุณเกิดขึ้น KingPro จะแจ้งให้สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้าภายใน 72 ชั่วโมง</p>
                <p>ในกรณีที่การละเมิดมีความเสี่ยงสูง KingPro จะแจ้งการละเมิดให้คุณทราบพร้อมกับแนวทางการเยียวยา</p>
              </div>

              <h3 className="text-xl font-bold text-brand mb-4">ระยะเวลาจัดเก็บข้อมูลส่วนบุคคล</h3>
              <div className="text-gray-300 text-sm space-y-4 mb-6">
                <p>KingPro จะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จำเป็นในระหว่างที่คุณเป็นลูกค้าหรือมีความสัมพันธ์อยู่กับ KingPro</p>
                <p>KingPro จะลบ ทำลาย หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนของคุณได้ เมื่อหมดความจำเป็นหรือสิ้นสุดระยะเวลาดังกล่าว</p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <p className="text-center text-gray-400 text-sm">
                  <strong>ติดต่อเรา:</strong><br />
                  LINE Official Account: @kingpro.th<br />
                  Facebook Page: KingproTopup<br />
                  เวลาทำการ: 24 ชั่วโมง ทุกวัน<br />
                  <br />
                  หากคุณต้องการใช้สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคล<br />
                  กรุณาติดต่อ KingPro ผ่านช่องทางข้างต้น
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PrivacyPolicy