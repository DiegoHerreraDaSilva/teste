import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { AuroraBackground } from "../ui/AuroraBackground"
import { MagneticButton } from "../ui/MagneticButton"

export function CTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden px-6 py-40 text-center"
    >
      <AuroraBackground className="opacity-70" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          Vamos criar algo que{" "}
          <span className="bg-gradient-to-r from-aurora-violet via-aurora-fuchsia to-aurora-amber bg-clip-text text-transparent">
            ninguém consegue ignorar
          </span>
          ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="max-w-xl text-white/60 md:text-lg"
        >
          Conte a sua ideia em uma frase. A gente devolve um plano em 48 horas —
          sem enrolação, sem call de uma hora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <MagneticButton
            href="mailto:oi@prisma.studio"
            strength={0.5}
            className="bg-white text-void shadow-[0_0_60px_-12px_rgba(255,255,255,0.6)] hover:shadow-[0_0_80px_-12px_var(--color-aurora-fuchsia)]"
          >
            oi@prisma.studio
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
