"use client";

import { ArrowDownRight, ArrowUpRight, Circle, Mail, Linkedin, Github, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  "Machine Learning",
  "Ensemble Methods",
  "Time Series",
  "Data Visualization",
  "Power BI",
  "PySpark",
  "Azure Databricks",
  "Data Analysis",
  "Keras / TensorFlow",
  "Deep Learning",
  "Classification",
  "Forecasting",
];

const projects = [
  {
    index: "01",
    title: "Outlet-SKU Universe & Clustering",
    description:
      "Defined and scoped the Outlet-SKU universe for POG and non-POG retailers, using dimensionality reduction and clustering to focus analysis on high-impact segments.",
    tags: ["PCA", "Clustering", "Retail Analytics"],
  },
  {
    index: "02",
    title: "Predictive Sales Modelling",
    description:
      "Built predictive sales models to estimate baseline volume across outlets and SKUs using POS sales and historical trends, then connected outputs to downstream planning.",
    tags: ["Forecasting", "Machine Learning", "POS Data"],
  },
  {
    index: "03",
    title: "Display Optimization Framework",
    description:
      "Built an end-to-end display planning pipeline to identify high-potential outlets and forecast uplift, with architecture for distribution sell-in recommendations.",
    tags: ["Optimization", "Pipeline", "Recommendations"],
  },
];

const experience = [
  {
    period: "AUG 2024 — PRESENT",
    role: "Senior Data Scientist",
    company: "Sigmoid Analytics",
    details: [
      "Outlet-SKU universe definition and high-impact segmentation for POG and non-POG retailers.",
      "PCA across 30+ features, capturing 80%+ of data variance for efficient clustering.",
      "Predictive sales modelling and integration into display planning, compliance tracking and sell-in simulations.",
      "Display planning and pre-display forecast architecture for field broker recommendations.",
    ],
  },
  {
    period: "OCT 2020 — AUG 2024",
    role: "Data Science Consultant",
    company: "",
    details: [
      "Worked with clients to understand data science requirements and build tailored solutions.",
      "Built predictive models to automate demand forecasting processes.",
      "Improved existing model accuracy by 15%–20% through feature engineering and selection.",
      "Owned projects end-to-end across acquisition, cleaning, modelling, deployment and reporting.",
      "Created Power BI views of machine-learning model performance metrics.",
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Portfolio() {
  return (
    <main className="grain min-h-screen bg-[#070707] text-[#f5f5f2]">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/45 px-5 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
          <a href="#top" className="font-display text-sm font-semibold uppercase tracking-[0.2em]">AY<span className="text-[#d6ff00]">.</span></a>
          <div className="hidden gap-8 text-xs uppercase tracking-[0.18em] text-white/55 md:flex">
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.16em] transition hover:border-white/40 hover:bg-white/5">Let’s talk</a>
        </div>
      </nav>

      <section id="top" className="grid-bg relative flex min-h-screen items-end overflow-hidden px-5 pb-20 pt-32 md:px-10 md:pb-24">
        <div className="hero-glow right-[-12rem] top-[10rem]" />
        <div className="mx-auto w-full max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={reveal} className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/45">
            <Circle size={8} fill="currentColor" className="text-[#d6ff00]" /> Available for interesting problems
          </motion.div>
          <div className="max-w-5xl">
            <motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.08 }} className="font-display text-[15vw] leading-[0.8] tracking-[-0.075em] md:text-[9.6rem]">
              ADITYA<br />KUMAR<br /><span className="text-white/25">YADAV</span>
            </motion.h1>
          </div>
          <div className="mt-12 grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1fr_auto] md:items-end">
            <motion.p initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.18 }} className="max-w-2xl text-lg leading-relaxed text-white/60 md:text-2xl">
              Senior Data Scientist building practical systems across <span className="text-white">machine learning, analytics, forecasting and data engineering.</span>
            </motion.p>
            <motion.a initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.24 }} href="#work" className="group flex items-center gap-4 text-sm uppercase tracking-[0.18em]">
              Explore work
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition group-hover:border-[#d6ff00] group-hover:text-[#d6ff00]"><ArrowDownRight size={18} /></span>
            </motion.a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[220px_1fr]">
          <div className="text-xs uppercase tracking-[0.2em] text-white/35">01 / About</div>
          <div>
            <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-display max-w-5xl text-4xl leading-[1.05] tracking-[-0.04em] md:text-7xl">
              I turn messy data into <span className="text-white/35">clear decisions</span> — combining analytical thinking with production-minded engineering.
            </motion.p>
            <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-12 max-w-3xl text-base leading-8 text-white/50 md:text-lg">
              My current work spans retail analytics, predictive sales, outlet-SKU segmentation, display optimization and downstream decision systems. I enjoy taking ambiguous business problems and turning them into measurable, usable solutions.
            </motion.p>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
            <div><div className="text-xs uppercase tracking-[0.2em] text-white/35">02 / Selected work</div><h2 className="font-display mt-3 text-4xl tracking-[-0.04em] md:text-6xl">Things I’ve built</h2></div>
            <div className="hidden text-xs uppercase tracking-[0.18em] text-white/30 md:block">2020—Now</div>
          </div>
          <div className="space-y-4">
            {projects.map((project) => (
              <motion.article key={project.index} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 transition duration-500 hover:border-white/20 hover:bg-white/[0.045] md:p-10">
                <div className="grid gap-8 md:grid-cols-[80px_1fr_auto] md:items-start">
                  <div className="font-display text-sm text-white/25">{project.index}</div>
                  <div>
                    <h3 className="font-display text-3xl tracking-[-0.03em] md:text-5xl">{project.title}</h3>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 md:text-lg">{project.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45">{tag}</span>)}
                    </div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center self-end rounded-full border border-white/10 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#d6ff00] group-hover:text-[#d6ff00]"><MoveUpRight size={18} /></div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-[0.2em] text-white/35">03 / Capabilities</div>
          <div className="mt-10 grid gap-2 md:grid-cols-3">
            {skills.map((skill, i) => <motion.div key={skill} whileHover={{ x: 6 }} className="border-b border-white/10 py-5 text-lg text-white/70 md:text-xl"><span className="mr-4 text-xs text-[#d6ff00]">{String(i + 1).padStart(2, "0")}</span>{skill}</motion.div>)}
          </div>
        </div>
      </section>

      <section id="experience" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[220px_1fr]">
          <div className="text-xs uppercase tracking-[0.2em] text-white/35">04 / Experience</div>
          <div className="space-y-16">
            {experience.map((item) => <motion.div key={item.period} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 25 }} viewport={{ once: true }} className="grid gap-6 border-b border-white/10 pb-16 md:grid-cols-[220px_1fr]">
              <div className="text-xs uppercase tracking-[0.16em] text-white/35">{item.period}</div>
              <div><h3 className="font-display text-3xl tracking-[-0.03em] md:text-4xl">{item.role}</h3>{item.company && <div className="mt-1 text-sm text-[#d6ff00]">{item.company}</div>}<div className="mt-7 space-y-3">{item.details.map((d) => <p key={d} className="max-w-3xl leading-7 text-white/50">{d}</p>)}</div></div>
            </motion.div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#d6ff00] px-5 py-16 text-black md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div><div className="text-xs uppercase tracking-[0.18em] opacity-55">Experience</div><div className="mt-2 font-display text-5xl tracking-[-0.05em]">5+ years</div></div>
          <div><div className="text-xs uppercase tracking-[0.18em] opacity-55">Model impact</div><div className="mt-2 font-display text-5xl tracking-[-0.05em]">15–20%</div><div className="mt-1 text-sm opacity-65">accuracy improvement in prior models</div></div>
          <div><div className="text-xs uppercase tracking-[0.18em] opacity-55">Variance captured</div><div className="mt-2 font-display text-5xl tracking-[-0.05em]">80%+</div><div className="mt-1 text-sm opacity-65">with PCA across 30+ features</div></div>
        </div>
      </section>

      <section id="contact" className="px-5 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-[0.2em] text-white/35">05 / Contact</div>
          <h2 className="font-display mt-8 max-w-5xl text-[16vw] leading-[0.84] tracking-[-0.08em] md:text-[9rem]">LET’S BUILD<br /><span className="text-white/30">SOMETHING</span><br />USEFUL<span className="text-[#d6ff00]">.</span></h2>
          <div className="mt-14 flex flex-wrap gap-3">
            <a href="mailto:adityaky1999@gmail.com" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:-translate-y-1"><Mail size={17} /> Email me</a>
            <a href="https://www.linkedin.com/in/aditya-yadav-b18451166" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold transition hover:-translate-y-1 hover:border-white/30"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a>
            <a href="https://github.com/adityaky1999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold transition hover:-translate-y-1 hover:border-white/30"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.16em] text-white/30 md:flex-row"><span>Aditya Kumar Yadav</span><span>Senior Data Scientist</span><span>© 2026</span></div>
        </div>
      </section>
    </main>
  );
}
