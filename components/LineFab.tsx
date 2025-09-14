"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const LineFab = () => {
  const handleLineClick = () => {
    // Analytics tracking
    console.log("LINE FAB clicked")
    window.open("https://lin.ee/GGT0Lst", "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={handleLineClick}
        className="h-16 w-16 rounded-full bg-[#00B900] hover:bg-[#00A000] shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 glow-effect"
        size="icon"
        aria-label="แชทกับเราใน LINE"
        data-attr="line-fab-click"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        แชทกับเราใน LINE
      </div>
    </div>
  )
}

export default LineFab