import { cn } from "../../lib/utils"

interface AuroraBackgroundProps {
  className?: string
}

export function AuroraBackground({ className }: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute -left-32 -top-32 h-[36rem] w-[36rem] animate-aurora-1 rounded-full bg-aurora-violet/30 blur-[120px]" />
      <div className="absolute -right-24 top-1/4 h-[30rem] w-[30rem] animate-aurora-2 rounded-full bg-aurora-fuchsia/25 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] animate-aurora-3 rounded-full bg-aurora-cyan/20 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
        }}
      />
    </div>
  )
}
