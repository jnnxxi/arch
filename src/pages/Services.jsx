import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Services() {
  return (
    <div className="bg-[#050505] text-white overflow-hidden relative">

      {/* GLOBAL BACKGLOW (cleaner + softer) */}
      <div className="fixed inset-0 -z-10 opacity-80">
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-yellow-500/5 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-112.5 h-112.5 bg-yellow-500/5 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">

        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.2 }}
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-4xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="uppercase tracking-[0.4em] text-yellow-400 text-sm"
          >
            Our Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-5xl md:text-7xl font-black leading-tight"
          >
            Complete Design &{" "}
            <span className="block text-yellow-400">Build Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-zinc-300 text-lg"
          >
            We provide end-to-end architectural and construction services,
            transforming ideas into functional, high-quality built environments.
          </motion.p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto space-y-28">

          {[
            {
              title: "General Contracting & Construction Management",
              desc: "End-to-end oversight ensuring precision, timing, and budget control.",
              bullets: [
                "Project planning & scheduling",
                "Cost & resource management",
                "Full site supervision"
              ],
              img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
            },
            {
              title: "Design-Build Services",
              desc: "Unified design and construction workflow for efficiency and quality.",
              bullets: [
                "Integrated workflow",
                "Faster delivery",
                "Cost efficiency"
              ],
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
            },
            {
              title: "Commercial & Industrial Development",
              desc: "Scalable, safe, and durable infrastructure solutions.",
              bullets: [
                "Safety compliance",
                "Engineering precision",
                "Long-term durability"
              ],
              img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            },
            {
              title: "Renovation & Improvements",
              desc: "Modern upgrades with minimal disruption.",
              bullets: [
                "Fast turnaround",
                "Code compliance",
                "Transparent execution"
              ],
              img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <h2 className="text-3xl font-bold text-yellow-400">
                  {item.title}
                </h2>

                <p className="mt-5 text-zinc-400 leading-loose">
                  {item.desc}
                </p>

                <ul className="mt-5 space-y-2 text-zinc-300">
                  {item.bullets.map((b, idx) => (
                    <li key={idx}>• {b}</li>
                  ))}
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative h-96 rounded-3xl overflow-hidden border border-yellow-500/10 group"
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 px-6 border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm">
              Why Choose Us
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-black">
              Built On Trust,
              <span className="block text-yellow-400">
                Designed With Precision
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 grid lg:grid-cols-3 gap-10"
          >
            {[
              "See It Before You Build It",
              "Quality You Can Trust",
              "Fair & Transparent Pricing"
            ].map((title, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-yellow-500/10 bg-white/5"
              >
                <span className="text-5xl font-black text-yellow-400/20">
                  0{i + 1}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-yellow-400">
                  {title}
                </h3>

                <p className="mt-4 text-zinc-400">
                  Premium execution focused on quality, transparency, and value.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS (FIXED BALANCE + RIGHT VISUAL ANCHOR) */}
      <section className="py-28 px-6 border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black">
              How We Bring Ideas To Life
            </h2>

            <div className="mt-10 space-y-6">
              {[
                "Planning & Design",
                "Site Preparation",
                "Construction & Supervision",
                "Final Inspection & Delivery"
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5 border-l border-yellow-400/30 pl-5 py-2"
                >
                  <span className="text-yellow-400 font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-bold">{step}</h3>
                    <p className="text-zinc-400 text-sm">
                      Structured execution ensuring precision and quality.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE ANCHOR (now visually stronger) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-125 rounded-4xl overflow-hidden border border-yellow-500/10"
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-yellow-500/5 opacity-0 hover:opacity-100 transition" />

            <div className="absolute bottom-6 left-6 text-sm tracking-widest uppercase text-zinc-200">
              Execution • Precision • Delivery
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}