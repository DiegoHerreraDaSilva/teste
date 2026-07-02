import type { ReactNode } from "react"
import { cn } from "../../lib/utils"

interface MarqueeProps {
  children: ReactNode
  className?: string
  reverse?: boolean
}

export function Marquee({ children, className, reverse = false }: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden", className)}>
      <div
        className="flex w-max shrink-0 animate-marquee items-center"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
