"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface GamePackagesProps {
  gameName: string
  onClose: () => void
}

const GamePackages = ({ gameName, onClose }: GamePackagesProps) => {
  const handleOrderClick = () => {
    console.log(`Order clicked for ${gameName}`)
    window.open("https://lin.ee/GGT0Lst", "_blank")
  }

  const getPackageImage = () => {
    const imageMap: { [key: string]: string } = {
      "Roblox": "/images/package roblox.jpg",
      "PUBG Mobile": "/images/PUBG Mobile package.jpg", 
      "Arena Breakout": "/images/Arena Breakout package.jpg",
      "Delta Force": "/images/Delta Force package 1.jpg",
      "Eggy Party": "/images/Eggy Party package.jpg",
      "ROV": "/images/ROV package.jpg",
      "Call of Duty Mobile": "/images/Call of Duty Mobile package.jpg"
    }
    return imageMap[gameName] || "/images/package roblox.jpg"
  }

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
              <h2 className="text-2xl font-bold">เลือกแพ็กเกจ {gameName}</h2>
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
            <div className="relative w-full">
              <Image
                src={getPackageImage()}
                alt={`${gameName} packages`}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-300 mb-6">
                เลือกแพ็กเกจที่ต้องการ แล้วติดต่อทีมงานเพื่อสั่งซื้อ
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={handleOrderClick}
                  className="text-lg px-8 py-4"
                >
                  สั่งซื้อผ่าน LINE @kingpro.th
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://www.facebook.com/KingproTopup", "_blank")}
                  className="text-lg px-8 py-4"
                >
                  สอบถามผ่าน Facebook
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default GamePackages