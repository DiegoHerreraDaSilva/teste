import { Marquee } from "../ui/Marquee"

const WORDS = [
  "Branding",
  "Motion Design",
  "Web Imersiva",
  "3D & WebGL",
  "Design Systems",
  "Interfaces Vivas",
]

export function MarqueeStrip() {
  return (
    <div className="relative z-10 -rotate-2 border-y border-white/10 bg-gradient-to-r from-aurora-violet/15 via-aurora-fuchsia/15 to-aurora-cyan/15 py-5 backdrop-blur-sm">
      <Marquee>
        {WORDS.map((word) => (
          <span
            key={word}
            className="mx-8 flex items-center gap-8 font-display text-2xl font-semibold uppercase tracking-widest text-white/80"
          >
            {word}
            <span aria-hidden className="text-aurora-fuchsia">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
