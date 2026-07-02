import { useRef, type ReactNode, type MouseEvent } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "../../lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  })
  const glareX = useTransform(px, [0, 1], ["0%", "100%"])
  const glareY = useTransform(py, [0, 1], ["0%", "100%"])
  const glare = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(320px circle at ${gx} ${gy}, rgba(255,255,255,0.08), transparent 60%)`,
  )

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("relative [perspective:1000px]", className)}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glare }}
      />
    </motion.div>
  )
}
