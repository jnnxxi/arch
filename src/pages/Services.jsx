import { motion } from "framer-motion";
export default function Services() {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-[#050505]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-150 h-150 bg-yellow-500/5 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-yellow-500/5 blur-[140px]" />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm">
            Our Services
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-none">
            Complete Design &
            <span className="block text-yellow-400">
              Build Solutions
            </span>
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            We provide end-to-end architectural and construction services,
            transforming ideas into functional, high-quality built environments.
          </p>
        </motion.div>

        {/* SERVICE 1 */}
        <div className="mt-28 space-y-24">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <h2 className="text-3xl font-bold text-yellow-400">
                General Contracting & Construction Management
              </h2>

              <p className="mt-6 text-zinc-400 leading-loose">
                We provide end-to-end oversight for residential and commercial
                projects, ensuring your vision is executed on time, within budget,
                and with precision.
              </p>

              <ul className="mt-6 space-y-3 text-zinc-300">
                <li>• Detailed project planning & scheduling</li>
                <li>• Resource allocation & cost control</li>
                <li>• Full site supervision</li>
              </ul>
            </div>

            <div className="relative h-80 rounded-4xl overflow-hidden border border-yellow-500/10 group">

              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
                alt="Service Image"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
              />

              {/* gold overlay */}
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition" />

            </div>
          </motion.div>

          {/* SERVICE 2 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div className="lg:order-2">
              <h2 className="text-3xl font-bold text-yellow-400">
                Design-Build Services
              </h2>

              <p className="mt-6 text-zinc-400 leading-loose">
                We unify architectural design and construction into a single
                streamlined process for better efficiency and quality control.
              </p>

              <ul className="mt-6 space-y-3 text-zinc-300">
                <li>• Integrated design & construction workflow</li>
                <li>• Faster project delivery</li>
                <li>• Cost-efficient execution</li>
              </ul>
            </div>

            <div className="relative h-80 rounded-4xl overflow-hidden border border-yellow-500/10 group">

              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
                alt="Service Image"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
              />

              {/* gold overlay */}
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition" />

            </div>
          </motion.div>

          {/* SERVICE 3 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <h2 className="text-3xl font-bold text-yellow-400">
                Commercial & Industrial Development
              </h2>

              <p className="mt-6 text-zinc-400 leading-loose">
                We build functional, safe, and scalable environments for offices,
                commercial spaces, and industrial facilities.
              </p>

              <ul className="mt-6 space-y-3 text-zinc-300">
                <li>• Strict safety compliance</li>
                <li>• Structural engineering precision</li>
                <li>• Long-term durability focus</li>
              </ul>
            </div>

            <div className="relative h-80 rounded-4xl overflow-hidden border border-yellow-500/10 group">

              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
                alt="Service Image"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
              />

              {/* gold overlay */}
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition" />

            </div>
          </motion.div>

          {/* SERVICE 4 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div className="lg:order-2">
              <h2 className="text-3xl font-bold text-yellow-400">
                Renovation & Improvements
              </h2>

              <p className="mt-6 text-zinc-400 leading-loose">
                We transform existing structures into modern, functional,
                and visually refined spaces with minimal disruption.
              </p>

              <ul className="mt-6 space-y-3 text-zinc-300">
                <li>• Fast project turnaround</li>
                <li>• Code-compliant upgrades</li>
                <li>• Transparent execution</li>
              </ul>
            </div>

            <div className="relative h-80 rounded-4xl overflow-hidden border border-yellow-500/10 group">

              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
                alt="Service Image"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
              />

              {/* gold overlay */}
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition" />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}