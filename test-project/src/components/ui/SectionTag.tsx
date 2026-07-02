import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface SectionTagProps {
  label: string
}

export function SectionTag({ label }: SectionTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-display text-xs font-medium uppercase tracking-[0.25em] text-white/70 backdrop-blur-sm"
    >
      <Sparkles className="h-3.5 w-3.5 text-aurora-fuchsia" aria-hidden />
      {label}
    </motion.span>
  )
}
