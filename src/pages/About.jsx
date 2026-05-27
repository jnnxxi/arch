import { motion } from "framer-motion";
import {
  Crown,
  Target,
  Eye,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const team = [
  {
    name: "Arch. Juan Dela Cruz",
    role: "Chief Architect",
    image:
      "https://i.pinimg.com/originals/7a/d4/40/7ad4401ef00bc509b1645c03cf43d7ff.jpg",
  },
];

const values = [
  {
    title: "Excellence",
    text: "We obsess over details and deliver work that feels premium in every interaction.",
    icon: Crown,
  },
  {
    title: "Innovation",
    text: "We combine creativity and technology to create unforgettable digital experiences.",
    icon: Sparkles,
  },
  {
    title: "People First",
    text: "Behind every successful product are relationships built on trust and collaboration.",
    icon: Users,
  },
];

export default function About() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* GOLD GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-yellow-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-yellow-300/10 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm">
            About Us
          </p>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.1]">
            Building Modern
            <span className="block text-yellow-400 mt-2">
              Architectural Experiences
            </span>
          </h1>

          <p className="mt-10 text-zinc-400 text-lg leading-relaxed max-w-3xl">
            A+ Studio Design and Construction transforms ideas into timeless structures
            through precision, creativity, and modern construction expertise.
          </p>

        </div>
      </section>

      {/* ABOUT */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm">
              About Our Company
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              A+ Studio Design
              <span className="block text-yellow-400">
                and Construction
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 leading-loose text-lg">
              A+ Studio Design and Construction is a full-service
              design and build firm committed to transforming
              architectural visions into structural realities.
            </p>

            <p className="mt-5 text-zinc-400 leading-loose text-lg">
              We specialize in a comprehensive design journey —
              from initial 2D technical drafting and immersive
              3D visualization to full-scale physical construction.
            </p>

            <p className="mt-5 text-zinc-400 leading-loose text-lg">
              By integrating structural integrity with modern
              aesthetics, we ensure that every project is not
              only visually stunning but also technically sound
              and fully compliant with local building standards.
            </p>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                number: "120+",
                label: "Projects Completed",
              },
              {
                number: "8+",
                label: "Years Experience",
              },
              {
                number: "50+",
                label: "Satisfied Clients",
              },
              {
                number: "15",
                label: "Professional Partners",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden border border-yellow-500/20 bg-white/5 backdrop-blur-xl rounded-3xl p-8 group"
              >
                {/* GOLD GLOW */}
                <div className="absolute inset-0 bg-linear-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <h3 className="relative z-10 text-5xl font-black text-yellow-400">
                  {item.number}
                </h3>

                <p className="relative z-10 mt-4 text-zinc-400 text-lg">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* MISSION SECTION */}
      <section className="py-40 px-6 relative overflow-hidden border-t border-yellow-500/10">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-125 h-125 bg-yellow-500/5 blur-[140px]" />

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
              Our Mission
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-none">
              Building With
              <span className="block text-yellow-400">
                Purpose & Precision
              </span>
            </h2>
          </motion.div>

          {/* CONTENT */}
          <div className="mt-24 grid lg:grid-cols-3 gap-10">

            {[
              {
                number: "01",
                title: "Cost-Effective Solutions",
                text: "We deliver smart engineering strategies and efficient resource management to maximize value while respecting our clients’ investments.",
              },
              {
                number: "02",
                title: "Client Satisfaction",
                text: "Through transparency, collaboration, and attention to detail, we ensure every project reflects the client’s vision with excellence.",
              },
              {
                number: "03",
                title: "High Safety Standards",
                text: "Safety is the foundation of trust. We uphold strict standards that protect workers, clients, and the integrity of every project site.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative border-t border-yellow-500/20 pt-10"
              >
                <span className="text-6xl font-black text-yellow-400/20 group-hover:text-yellow-400/40 transition-all">
                  {item.number}
                </span>

                <h3 className="mt-6 text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-zinc-400 leading-loose text-lg">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="py-40 px-6 relative overflow-hidden border-t border-yellow-500/10">

        {/* BACKGROUND GLOW */}
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-yellow-500/5 blur-[140px]" />

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl ml-auto text-right"
          >
            <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm">
              Our Vision
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-none">
              Designing The
              <span className="block text-yellow-400">
                Future Of Spaces
              </span>
            </h2>
          </motion.div>

          {/* CONTENT */}
          <div className="mt-24 grid lg:grid-cols-2 gap-16">

            {/* ITEM 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative border border-yellow-500/10 rounded-4xl p-12 bg-white/2 hover:border-yellow-400/30 transition-all"
            >
              <span className="text-7xl font-black text-yellow-400/10">
                01
              </span>

              <h3 className="mt-6 text-4xl font-bold leading-tight">
                Build With Excellence
              </h3>

              <p className="mt-8 text-zinc-400 leading-loose text-lg">
                To become a leading design and build firm recognized for
                excellence in craftsmanship, technical precision, and the
                seamless integration of art and architecture in every Filipino
                home and business.
              </p>
            </motion.div>

            {/* ITEM 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative border border-yellow-500/10 rounded-4xl p-12 bg-white/2 hover:border-yellow-400/30 transition-all"
            >
              <span className="text-7xl font-black text-yellow-400/10">
                02
              </span>

              <h3 className="mt-6 text-4xl font-bold leading-tight">
                Trust & Reliability
              </h3>

              <p className="mt-8 text-zinc-400 leading-loose text-lg">
                To be the foundation of every client’s peace of mind by
                consistently delivering excellence through integrity,
                transparent collaboration, and unwavering reliability in every
                structure we build.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-40 px-6 border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm">
              Our Services
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-black">
              What We Build
            </h2>

            <p className="mt-6 text-zinc-400 max-w-2xl leading-relaxed">
              We deliver complete design-to-build solutions focused on precision,
              durability, and modern architectural excellence.
            </p>
          </motion.div>

          <div className="mt-20 grid lg:grid-cols-4 gap-8">

            {[
              "Residential Construction",
              "Commercial Buildings",
              "Renovation Projects",
              "Infrastructure Development",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="relative border border-yellow-500/10 rounded-[28px] p-8 bg-white/2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-yellow-500/5 opacity-0 hover:opacity-100 transition-all" />

                <h3 className="text-xl font-bold text-yellow-400 relative z-10">
                  {item}
                </h3>

                <p className="mt-4 text-zinc-400 text-sm relative z-10">
                  Premium design and build execution tailored for your needs.
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-40 px-6 relative overflow-hidden border-t border-yellow-500/10">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-125 h-125 bg-yellow-500/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-yellow-500/5 blur-[120px]" />

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
              Why Choose Us
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-none">
              Built On Trust,
              <span className="block text-yellow-400">
                Designed With Precision
              </span>
            </h2>
          </motion.div>

          {/* CONTENT */}
          <div className="mt-24 grid lg:grid-cols-3 gap-10">

            {/* ITEM 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative border border-yellow-500/10 rounded-4xl p-10 bg-white/2"
            >
              <span className="text-6xl font-black text-yellow-400/10">
                01
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                See It Before You Build It
              </h3>

              <p className="mt-6 text-zinc-400 leading-loose text-lg">
                With high-quality 3D visualization, you can experience your
                space before construction begins. We turn your ideas into
                realistic designs that match your vision perfectly.
              </p>
            </motion.div>

            {/* ITEM 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative border border-yellow-500/10 rounded-4xl p-10 bg-white/2"
            >
              <span className="text-6xl font-black text-yellow-400/10">
                02
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                Quality You Can Trust
              </h3>

              <p className="mt-6 text-zinc-400 leading-loose text-lg">
                We use premium materials and expert craftsmanship to ensure
                every project is structurally strong, visually refined, and
                built to the highest standards.
              </p>
            </motion.div>

            {/* ITEM 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative border border-yellow-500/10 rounded-4xl p-10 bg-white/2"
            >
              <span className="text-6xl font-black text-yellow-400/10">
                03
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                Competitive & Fair Pricing
              </h3>

              <p className="mt-6 text-zinc-400 leading-loose text-lg">
                We deliver high-end architectural results at fair and transparent
                pricing, ensuring maximum value for your investment without hidden
                costs.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-40 px-6 relative overflow-hidden border-t border-yellow-500/10">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-yellow-500/5 blur-[160px]" />

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm">
              Our Process
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-none">
              How We
              <span className="block text-yellow-400">
                Bring Ideas To Life
              </span>
            </h2>
          </motion.div>

          {/* STEPS */}
          <div className="mt-24 space-y-16">

            {/* STEP 1 */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div>
                <span className="text-yellow-400 text-sm tracking-[0.3em]">
                  STEP 01
                </span>

                <h3 className="mt-4 text-4xl font-bold">
                  Planning & Design
                </h3>

                <p className="mt-6 text-zinc-400 leading-loose text-lg">
                  We begin by collaborating closely with you to understand your
                  vision. Through detailed planning and high-fidelity 3D
                  visualization, we help you see your future space before
                  construction begins.
                </p>
              </div>

              <div className="h-62.5 rounded-4xl border border-yellow-500/10 bg-white/2" />
            </motion.div>

            {/* STEP 2 */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="md:order-2">
                <span className="text-yellow-400 text-sm tracking-[0.3em]">
                  STEP 02
                </span>

                <h3 className="mt-4 text-4xl font-bold">
                  Site Preparation
                </h3>

                <p className="mt-6 text-zinc-400 leading-loose text-lg">
                  We carefully prepare the site by organizing materials,
                  evaluating conditions, and ensuring a safe, efficient
                  foundation for the entire construction process.
                </p>
              </div>

              <div className="h-62.5 rounded-4xl border border-yellow-500/10 bg-white/2 md:order-1" />
            </motion.div>

            {/* STEP 3 */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div>
                <span className="text-yellow-400 text-sm tracking-[0.3em]">
                  STEP 03
                </span>

                <h3 className="mt-4 text-4xl font-bold">
                  Construction & Supervision
                </h3>

                <p className="mt-6 text-zinc-400 leading-loose text-lg">
                  Our team brings the design to life with precise execution
                  and continuous supervision, ensuring quality, safety, and
                  craftsmanship at every stage of construction.
                </p>
              </div>

              <div className="h-62.5 rounded-4xl border border-yellow-500/10 bg-white/2" />
            </motion.div>

            {/* STEP 4 */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="md:order-2">
                <span className="text-yellow-400 text-sm tracking-[0.3em]">
                  STEP 04
                </span>

                <h3 className="mt-4 text-4xl font-bold">
                  Final Inspection & Delivery
                </h3>

                <p className="mt-6 text-zinc-400 leading-loose text-lg">
                  We perform a detailed quality inspection to ensure every
                  detail meets our standards before delivering the finished
                  space, ready for you to move in with confidence.
                </p>
              </div>

              <div className="h-62.5 rounded-4xl border border-yellow-500/10 bg-white/2 md:order-1" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm">
            The Master Builder
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            The Vision Behind Every Structure
          </h2>

          <div className="mt-20 flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[36px] max-w-md w-full"
              >
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent z-10" />

                <img
                  src={`${member.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={member.name}
                  className="w-full h-150 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 z-20 p-8 text-left">
                  <h3 className="text-4xl font-bold">{member.name}</h3>

                  <p className="mt-2 text-yellow-400 text-lg">
                    {member.role}
                  </p>
                </div>

                <div className="absolute inset-0 border border-yellow-400/0 group-hover:border-yellow-400/40 rounded-[36px] transition-all duration-500 z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="max-w-5xl mx-auto border border-yellow-500/20 rounded-[40px] p-16 bg-linear-to-br from-yellow-500/10 via-transparent to-transparent text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12),transparent_60%)]" />

          <h2 className="text-5xl md:text-6xl font-black relative z-10">
            Let’s Create Something Exceptional
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
            We partner with ambitious brands and visionary founders to build
            experiences that leave a lasting impression.
          </p>

          <button className="mt-12 px-10 py-5 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300 transition-all relative z-10">
            Start A Project
          </button>
        </motion.div>
      </section>
    </div>
  );
}