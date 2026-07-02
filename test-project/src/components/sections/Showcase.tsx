import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { SectionTag } from "../ui/SectionTag"

interface Project {
  title: string
  category: string
  year: string
  visual: string
}

const PROJECTS: Project[] = [
  {
    title: "Nébula Bank",
    category: "Fintech · Web imersiva",
    year: "2026",
    visual:
      "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.8), transparent 55%), radial-gradient(circle at 75% 70%, rgba(34,211,238,0.6), transparent 50%), linear-gradient(160deg, #0c0714, #1a0b2e)",
  },
  {
    title: "Kaleido Records",
    category: "Música · Identidade viva",
    year: "2025",
    visual:
      "radial-gradient(circle at 70% 25%, rgba(217,70,239,0.8), transparent 50%), radial-gradient(circle at 20% 80%, rgba(251,191,36,0.5), transparent 55%), linear-gradient(200deg, #14060f, #2b0a1e)",
  },
  {
    title: "Ártico Motors",
    category: "Automotivo · 3D configurator",
    year: "2025",
    visual:
      "radial-gradient(circle at 50% 10%, rgba(34,211,238,0.7), transparent 55%), radial-gradient(circle at 85% 85%, rgba(139,92,246,0.6), transparent 50%), linear-gradient(180deg, #04101a, #071e2b)",
  },
]

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const visualY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])
  const reversed = index % 2 === 1

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "group grid items-center gap-8 md:grid-cols-2 md:gap-16",
        reversed && "md:[&>*:first-child]:order-2",
      )}
    >
      <a
        href="#contato"
        className="relative block aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"
        aria-label={`Ver projeto ${project.title}`}
      >
        <motion.div
          aria-hidden
          style={{ y: visualY, background: project.visual }}
          className="absolute -inset-y-[10%] inset-x-0 scale-105 transition-transform duration-700 group-hover:scale-110"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" aria-hidden />
        </span>
      </a>

      <div>
        <span className="font-display text-sm uppercase tracking-[0.3em] text-aurora-fuchsia">
          {String(index + 1).padStart(2, "0")} · {project.year}
        </span>
        <h3 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-3 text-white/60">{project.category}</p>
        <a
          href="#contato"
          className="group/link mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-white"
        >
          Ver estudo de caso
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            aria-hidden
          />
        </a>
      </div>
    </motion.article>
  )
}

export function Showcase() {
  return (
    <section id="projetos" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="mb-20 flex flex-col items-start gap-6">
        <SectionTag label="Projetos selecionados" />
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-4xl font-bold tracking-tight md:text-6xl"
        >
          Trabalhos que viraram referência
        </motion.h2>
      </div>

      <div className="flex flex-col gap-28">
        {PROJECTS.map((project, i) => (
          <ProjectPanel key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
