import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import { AuroraBackground } from "../ui/AuroraBackground"
import { MagneticButton } from "../ui/MagneticButton"

const TITLE_LINES = [
  { text: "EXPERIÊNCIAS", outline: false },
  { text: "DIGITAIS", outline: true },
  { text: "IMPOSSÍVEIS", outline: false },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <AuroraBackground />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-display text-xs font-medium uppercase tracking-[0.3em] text-white/70 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora-cyan" />
          </span>
          Estúdio digital · desde 2019
        </motion.span>

        <h1 className="font-display text-[clamp(2.8rem,10vw,8rem)] font-bold leading-[0.95] tracking-tight">
          {TITLE_LINES.map((line, i) => (
            <span key={line.text} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.35 + i * 0.12,
                }}
                className={
                  line.outline
                    ? "block text-transparent [-webkit-text-stroke:2px_var(--color-aurora-fuchsia)]"
                    : "block bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent"
                }
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
          className="mt-8 max-w-xl text-balance text-base text-white/60 md:text-lg"
        >
          Design, motion e código no limite do possível. Criamos interfaces que
          as pessoas não esquecem — e que os concorrentes não conseguem copiar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 1.05 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton
            href="#contato"
            className="bg-gradient-to-r from-aurora-violet to-aurora-fuchsia text-white shadow-[0_0_40px_-8px_var(--color-aurora-fuchsia)]"
          >
            Iniciar projeto
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton
            href="#projetos"
            className="border border-white/15 text-white/80 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
          >
            Ver projetos
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="#manifesto"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 z-10"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/60"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
