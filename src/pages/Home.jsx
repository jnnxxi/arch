import { motion, AnimatePresence } from "framer-motion";
import Building from "../components/Building";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rodriguez from "../assets/projects/rodriguez-residences.png";
import ramos from "../assets/projects/ramos-residences.jpg";
import birthing from "../assets/projects/birthing-center.png";

export default function HomePage() {

  // =========================
  // PROJECT DATA
  // =========================
  const projects = [
    {
      title: "RODRIGUEZ RESIDENCE",
      type: "RESIDENTIAL",
      desc: "Two-Storey Residential 4 Bed rooms, show kitchen and dirty kitchen, Lanai, with front & rear balcony and garage",
      location: "Malolos, Bulacan",
      img: rodriguez
    },
    {
      title: "RAMOS RESIDENCE",
      type: "INTERIOR FIT-OUTS",
      desc: "Two-Storey Residential, 3 Bedrooms, show kitchen, dirty kitchen and garange",
      location: "Guiguinto, Bulacan",
      img: ramos
    },
    {
      title: "BIRTHING CENTER",
      type: "INTERIOR FIT-OUTS",
      desc: "",
      location: "San Miguel and Plaridel, Bulacan",
      img: birthing
    },
  ];

  // =========================
  // STATE
  // =========================
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % projects.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  // =========================
  // AUTO SLIDE (5 seconds)
  // =========================
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const project = projects[index];
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen bg-black">

        {/* gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-yellow-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15),transparent_60%)]" />
        {/* background icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-70 z-0">
          <Building />
        </div>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="max-w-4xl px-6 flex flex-col items-center">

            <motion.p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
              Architecture • Design • Build
            </motion.p>

            <motion.h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Precision in Design,
              <span className="text-yellow-400"> Excellence in Build.</span>
            </motion.h1>

            <motion.p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300">
              We create timeless architectural spaces that blend innovation, elegance, and functionality.
            </motion.p>

            <motion.div className="mt-10 flex gap-4">
              <button 
              onClick={() => navigate(`/projects`)}
              className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black hover:bg-yellow-300 transition">
                View Projects
              </button>

              <button 
              onClick={() => navigate(`/contact`)}
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white hover:border-yellow-400 hover:text-yellow-400 transition">
                Contact Us
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-neutral-950 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
              About Us
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight">
              Innovative Designs Built Around People
            </h2>

            <p className="text-lg leading-relaxed text-gray-400">
              We design architectural spaces that balance aesthetics,
              sustainability, and human experience.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
            className="rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-black py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-20 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              Services
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              What We Offer
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                title: "Residential Construction",
                desc: "We craft functional and timeless architectural homes built for comfort and longevity."
              },
              {
                title: "Commercial Buildings",
                desc: "Modern commercial spaces designed for efficiency, branding, and structural excellence."
              },
              {
                title: "Renovation Projects",
                desc: "Transforming old structures into modern, functional, and aesthetically refined spaces."
              },
              {
                title: "Infrastructure Development",
                desc: "Large-scale engineering solutions built with precision, safety, and sustainability."
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-white/10 bg-neutral-900 p-8 hover:border-yellow-400/50 hover:bg-neutral-800 transition"
              >
                <div className="mb-6 h-1 w-14 bg-yellow-400" />

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS (CAROUSEL) */}
      <section className="bg-neutral-950 py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              Projects
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* IMAGE */}
            <AnimatePresence mode="wait">
              <motion.img
                key={project.img}
                src={project.img}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6 }}
                className="h-105 w-full rounded-3xl object-cover border border-white/10"
              />
            </AnimatePresence>

            {/* CONTENT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                  {project.type}
                </p>

                <h3 className="mt-4 text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  {project.desc}
                </p>

                <p className="mt-6 text-sm text-gray-500">
                  📍 {project.location}
                </p>

                <div className="mt-10 flex gap-4">
                  <button
                    onClick={prev}
                    className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-yellow-400 hover:text-yellow-400 transition"
                  >
                    Prev
                  </button>

                  <button
                    onClick={next}
                    className="rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition"
                  >
                    Next
                  </button>

                  <button
                    onClick={() => navigate(`/projects`)}
                    className="rounded-xl border border-yellow-400 px-6 py-3 text-sm font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                  >
                    See More Projects
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* DOTS */}
          <div className="mt-12 flex justify-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition ${i === index ? "w-6 bg-yellow-400" : "w-2 bg-white/20"
                  }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-28">
        <div className="mx-auto max-w-5xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-yellow-500/20 bg-linear-to-br from-yellow-400 to-yellow-500 p-14 text-center text-black"
          >
            <h2 className="text-5xl font-bold">
              Let’s Build Something Great
            </h2>

            <p className="mt-6 text-black/70">
              Start your architectural journey with us today.
            </p>

            <button className="mt-10 rounded-xl bg-black px-8 py-4 font-semibold text-white hover:bg-neutral-900 transition">
              Get in Touch
            </button>
          </motion.div>

        </div>
      </section>

    </div>
  );
}