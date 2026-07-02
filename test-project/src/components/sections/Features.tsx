import { motion } from "framer-motion"
import { Orbit, Palette, Rocket, Zap, type LucideIcon } from "lucide-react"
import { SectionTag } from "../ui/SectionTag"
import { TiltCard } from "../ui/TiltCard"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Motion cirúrgico",
    description:
      "Cada animação tem propósito: guiar o olhar, dar feedback e criar memória. Nada se move por acaso.",
    gradient: "from-aurora-violet/40 to-transparent",
  },
  {
    icon: Palette,
    title: "Direção de arte autoral",
    description:
      "Nada de template. Cada projeto nasce de uma linguagem visual própria, impossível de confundir.",
    gradient: "from-aurora-fuchsia/40 to-transparent",
  },
  {
    icon: Orbit,
    title: "Imersão 3D & WebGL",
    description:
      "Cenas tridimensionais, shaders e partículas que transformam a tela em um espaço navegável.",
    gradient: "from-aurora-cyan/40 to-transparent",
  },
  {
    icon: Rocket,
    title: "Performance obsessiva",
    description:
      "Beleza que carrega em milissegundos. Core Web Vitals verdes mesmo com tudo se movendo.",
    gradient: "from-aurora-amber/40 to-transparent",
  },
]

export function Features() {
  return (
    <section id="manifesto" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 flex flex-col items-start gap-6">
        <SectionTag label="Manifesto" />
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl"
        >
          O comum é invisível.{" "}
          <span className="bg-gradient-to-r from-aurora-violet via-aurora-fuchsia to-aurora-cyan bg-clip-text text-transparent">
            Nós fazemos o inesquecível.
          </span>
        </motion.h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
          >
            <TiltCard className="group h-full rounded-3xl bg-gradient-to-b from-white/15 to-white/5 p-px">
              <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-ink p-8">
                <div
                  aria-hidden
                  className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-b ${feature.gradient} blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60`}
                />
                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <feature.icon
                      className="h-5 w-5 text-aurora-fuchsia"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {feature.description}
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
