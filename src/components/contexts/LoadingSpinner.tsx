// components/LoadingSpinner.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import NProgress from 'nprogress' // Optional: for better loading bars
import 'nprogress/nprogress.css'

export default function LoadingSpinner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
      NProgress.start()
    }
    
    const handleStop = () => {
      setLoading(false)
      NProgress.done()
    }

    handleStart() // Start loading when route changes
    
    // Simulate loading time or use actual route change detection
    const timer = setTimeout(handleStop, 300)
    
    return () => {
      clearTimeout(timer)
      handleStop()
    }
  }, [pathname, searchParams])

  if (!loading) return null

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-400 to-zinc-800  z-50">
      <div className="h-full bg-white opacity-30 animate-pulse w-1/2"></div>
    </div>
  )
}