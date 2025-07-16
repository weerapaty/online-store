// page.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function SurprisePage() {
  const [isScared, setIsScared] = useState(false)
  const [ghosts, setGhosts] = useState<string[]>([])

  const triggerScare = () => {
    setIsScared(true)
    const ghostArray = Array.from({ length: 30 }, () => '👻')
    setGhosts(ghostArray)

    // reset after 5 seconds
    setTimeout(() => {
      setGhosts([])
    }, 5000)
  }

  return (
    <main
      className={`relative h-screen flex items-center justify-center text-center overflow-hidden transition-all duration-1000 ${
        isScared ? 'bg-black text-white' : 'bg-pink-100 text-rose-600'
      }`}
    >
      {/* 👻 ผีร่วง */}
      {ghosts.map((ghost, i) => (
        <div
          key={i}
          className="absolute text-3xl animate-spooky-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 1.5}s`,
            fontSize: `${24 + Math.random() * 24}px`,
            top: '-2rem',
          }}
        >
          {ghost}
        </div>
      ))}

      <div className="z-10 flex flex-col items-center space-y-6">
        {!isScared ? (
          <h1 className="text-4xl font-bold drop-shadow">💘 เปิดดดดดดดดด 💘</h1>
        ) : (
          <>
            <Image
  src="/ghost.png"
  alt="Ghost"
  width={400}
  height={400}
  className="animate-shake"
/>
            <p className="text-3xl font-bold animate-shake">ตกใจหมดเลย!! 👻</p>
          </>
        )}

        <button
          onClick={triggerScare}
          className="bg-rose-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300"
        >
          กดเพื่อเซอร์ไพรส์
        </button>
      </div>
    </main>
  )
}