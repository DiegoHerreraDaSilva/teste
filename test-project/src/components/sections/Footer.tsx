import { ArrowUpRight } from "lucide-react"

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <span className="font-display text-sm tracking-[0.3em] text-white/50">
          PRISMA<span className="text-aurora-fuchsia">◆</span> © 2026
        </span>
        <div className="flex items-center gap-6">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 font-display text-sm uppercase tracking-widest text-white/50 transition-colors hover:text-white"
            >
              {social.label}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden text-center"
      >
        <span className="block translate-y-[35%] font-display text-[clamp(5rem,20vw,16rem)] font-bold leading-none tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]">
          PRISMA
        </span>
      </div>
    </footer>
  )
}
