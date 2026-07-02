import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const [hoveringInteractive, setHoveringInteractive] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const dotX = useSpring(x, { stiffness: 900, damping: 50 })
  const dotY = useSpring(y, { stiffness: 900, damping: 50 })
  const glowX = useSpring(x, { stiffness: 120, damping: 20 })
  const glowY = useSpring(y, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)")
    setEnabled(finePointer.matches)
    if (!finePointer.matches) return

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHoveringInteractive(Boolean(target.closest("a, button")))
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2.5 w-2.5 rounded-full bg-white mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hoveringInteractive ? 3.2 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, var(--color-aurora-fuchsia) 0%, var(--color-aurora-violet) 40%, transparent 70%)",
        }}
      />
    </>
  )
}
