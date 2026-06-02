import { motion } from "framer-motion";
import rodriguez from "../assets/projects/rodriguez-residences.png";
import ramos from "../assets/projects/ramos-residences.jpg";
import condo from "../assets/projects/3-bed-condo.png";
import birthing from "../assets/projects/birthing-center.png";
import spa from "../assets/projects/nail-and-foot-spa-clinic.png";
import coffee from "../assets/projects/coffee-shop.png";
import chikten from "../assets/projects/chikten.png";

export default function Projects() {
  return (
    <div className="bg-[#050505] text-white overflow-hidden">

      {/* GLOBAL BACKGLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-150 h-150 bg-yellow-500/5 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-yellow-500/5 blur-[140px]" />
      </div>

      {/* ✅ SMALLER / IMPROVED HERO BANNER */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden border-b border-yellow-500/10">

        {/* BACKGROUND IMAGE */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/80" />

        {/* GOLD TINT */}
        <div className="absolute inset-0 bg-yellow-500/5" />

        <div className="relative z-10 max-w-4xl px-6">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.4em] text-yellow-400 text-sm"
          >
            Our Projects
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-4xl md:text-6xl font-black leading-tight"
          >
            Designed To Be
            <span className="block text-yellow-400">
              Built With Purpose
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-300 text-base md:text-lg"
          >
            A curated selection of architectural works that showcase precision,
            design excellence, and functionality.
          </motion.p>

        </div>
      </section>

      {/* PROJECT LIST (UNCHANGED BELOW THIS) */}
      <section className="pt-24 pb-40 px-6 relative overflow-hidden">

        <div className="max-w-7xl mx-auto">

          <div className="mt-20 space-y-32">

            {/* KEEP YOUR EXISTING MAP EXACTLY HERE */}

          {[
            {
              name: "Rodriguez Residences",
              location: "Malolos, Bulacan",
              type: "Residential",
              desc: "Two-Storey Residential - 4 Bed rooms, show kitchen and dirty kitchen, Lanai, with front & rear balcony and garage",
              image: rodriguez,
            },
            {
              name: "Ramos Residence",
              location: "Guiguinto, Bulacan",
              type: " Interior Fit-outs",
              desc: "Two-Storey Residential - 3 Bedrooms, show kitchen, dirty kitchen and garage Located in Guiguinto, Bulacan",
              image: ramos,
            },
            {
              name: "3 BED CONDO DESIGN",
              location: "Philippines",
              type: "Interior Fit-outs",
              desc: "A modern and functional interior design for a 3-bedroom condominium unit, maximizing space and enhancing aesthetics.",
              image: condo,
            },
            {
              name: "BIRTHING CENTER",
              location: "San Miguel and Plaridel, Bulacan",
              type: "Commercial Fit-outs",
              desc: "A state-of-the-art birthing center designed to provide a safe and comfortable environment for expectant mothers, featuring modern facilities and a soothing ambiance.",
              image: birthing,
            },
            {
              name: "NAIL AND FOOT SPA CLINIC",
              location: "Davao, Philippines",
              type: "Commercial Fit-outs",
              desc: "A modern spa clinic offering nail and foot care services in a relaxing environment.",
              image: spa,
            },
            {
              name: "COFFEE SHOP",
              location: "Metro Manila, Philippines",
              type: "Commercial Fit-outs",
              desc: "A modern coffee shop designed to provide a cozy and inviting atmosphere for customers to enjoy their favorite beverages and snacks.",
              image: coffee,
            },
            {
              name: "CHIKTEN WINGS",
              location: "Metro Manila, Philippines",
              type: "Commercial",
              desc: "A modern and vibrant fast-food restaurant specializing in chicken wings, designed to create a lively and welcoming atmosphere for customers.",
              image: chikten,
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-500 ${i % 2 !== 0 ? "md:[&>div:first-child]:order-2" : ""
                }`}
            >

              {/* IMAGE */}
              <div className="relative group overflow-hidden rounded-[28px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-105 object-cover transition-all duration-700 group-hover:scale-[1.05]"
                />

                {/* soft cinematic overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                {/* gold accent hover */}
                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-all" />
              </div>

              {/* TEXT */}
              <div>

                {/* TYPE */}
                <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm">
                  {project.type}
                </p>

                {/* TITLE */}
                <h2 className="mt-6 text-4xl md:text-5xl font-black leading-[1.1]">
                  {project.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
                  {project.desc}
                </p>

                {/* DIVIDER */}
                <div className="mt-10 w-24 h-0.5 bg-yellow-400/40" />

                {/* LOCATION */}
                <div className="mt-6 flex items-center gap-3 text-zinc-500">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-yellow-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"
                    />

                    <circle cx="12" cy="11" r="2.5" />
                  </svg>

                  <span>{project.location}</span>
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
    </div>
  );
}