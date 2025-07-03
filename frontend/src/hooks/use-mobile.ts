import { useEffect, useState } from "react"

export function useIsMobile(smBreakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < smBreakpoint : false
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < smBreakpoint)
    }

    window.addEventListener("resize", handleResize)

    // Run once on mount
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [smBreakpoint])

  return isMobile
}
