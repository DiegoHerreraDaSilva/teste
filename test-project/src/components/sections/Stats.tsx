import { motion } from "framer-motion"
import { AnimatedCounter } from "../ui/AnimatedCounter"

const STATS = [
  { value: 87, suffix: "+", label: "Projetos entregues" },
  { value: 23, suffix: "", label: "Prêmios internacionais" },
  { value: 140, suffix: "M", label: "Usuários impactados" },
  { value: 98, suffix: "%", label: "Clientes que voltam" },
]

export function Stats() {
  return (
    <section
      id="numeros"
      className="relative border-y border-white/10 bg-gradient-to-b from-ink/60 to-transparent py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 px-6 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              className="bg-gradient-to-b from-white to-white/50 bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent md:text-6xl"
            />
            <span className="text-sm uppercase tracking-widest text-white/50">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
