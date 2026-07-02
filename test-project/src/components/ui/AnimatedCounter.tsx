import { useEffect, useRef } from "react"
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const raw = useMotionValue(0)
  const spring = useSpring(raw, { stiffness: 60, damping: 20 })
  const display = useTransform(
    spring,
    (v) => `${Math.round(v).toLocaleString("pt-BR")}${suffix}`,
  )

  useEffect(() => {
    if (inView) raw.set(value)
  }, [inView, raw, value])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
