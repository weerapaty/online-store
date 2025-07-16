'use client'
import { useState } from 'react'

export default function ValentinePage() {
  const [showLove, setShowLove] = useState(false)
  const [fallingHearts, setFallingHearts] = useState<string[]>([])

  const triggerHearts = () => {
    // ลบข้อความ Happy ออกก่อน
    setShowLove(true)

    // เริ่มให้หัวใจร่วง
    const hearts = Array.from({ length: 50 }, () => '💗')
    setFallingHearts(hearts)

    // ล้างหัวใจและข้อความหลัง 4 วิ
    setTimeout(() => {
      setFallingHearts([])
      setShowLove(false)
    }, 4000)
  }

  return (
    <main className="relative h-screen bg-pink-100 flex items-center justify-center text-center overflow-hidden">
      {/* หัวใจร่วง */}
      {fallingHearts.map((heart, i) => (
        <div
          key={i}
          className="absolute text-pink-500 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
            fontSize: `${20 + Math.random() * 30}px`,
            top: '-2rem',
            opacity: 0.9,
          }}
        >
          {heart}
        </div>
      ))}

      {/* ปุ่ม + ข้อความ */}
      <div className="z-10 flex flex-col items-center">
        {!showLove && (
          <h1 className="text-3xl md:text-4xl font-bold text-rose-600 drop-shadow-md mb-4">
            💘 เปิดดดดดดดดดด 💘
          </h1>
        )}

        {showLove && (
          <p className="text-5xl text-pink-600 font-bold mb-6 drop-shadow-lg animate-bounce">
            รักนะ 💖
          </p>
        )}

        <button
          onClick={triggerHearts}
          className="bg-rose-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300"
        >
          กดเพื่อเซอร์ไพรส์
        </button>
      </div>
    </main>
  )
}
