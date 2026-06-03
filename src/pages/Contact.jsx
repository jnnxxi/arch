import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | A+ Studio Design and Build</title>
      </Helmet>
      <div className="bg-[#050505] text-white overflow-hidden">

        {/* GLOBAL BACKGLOW */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-0 w-150 h-150 bg-yellow-500/5 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-125 h-125 bg-yellow-500/5 blur-[140px]" />
        </div>

        {/* HERO (SMALLER + WITH BACKGROUND IMAGE) */}
        <section className="relative h-[42vh] md:h-[45vh] flex items-center justify-center text-center overflow-hidden border-b border-yellow-500/10">

          {/* BACKGROUND IMAGE */}
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/80" />

          {/* GOLD TINT */}
          <div className="absolute inset-0 bg-yellow-500/5" />

          <div className="relative z-10 max-w-3xl px-6">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.4em] text-yellow-400 text-sm"
            >
              Contact Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-4xl md:text-6xl font-black leading-tight"
            >
              Let’s Build
              <span className="block text-yellow-400">
                Something Great
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-zinc-300 text-base md:text-lg"
            >
              Have a project in mind? Let’s discuss your ideas and turn them
              into a fully realized architectural space.
            </motion.p>

          </div>
        </section>

        {/* CONTENT */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

            {/* LEFT */}
            <div className="space-y-10">

              {[
                { label: "Email", value: "alim.designandconstruction@gmail.com" },
                { label: "Phone", value: "+63 927 5764 140" },
                { label: "Location", value: "Bulacan, Philippines" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-xl md:text-2xl font-bold">
                    {item.value}
                  </h3>
                </motion.div>
              ))}

              <div className="pt-8 border-t border-yellow-500/10">
                <p className="text-zinc-500 leading-relaxed">
                  We respond within 24–48 hours. For urgent concerns, please call directly.
                </p>
              </div>

            </div>

            {/* FORM */}
            <motion.form
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-7"
            >

              {[
                { label: "Full Name", type: "text", placeholder: "Enter your name" },
                { label: "Email", type: "email", placeholder: "Enter your email" }
              ].map((field, i) => (
                <div key={i}>
                  <label className="text-sm text-yellow-400 tracking-[0.3em] uppercase">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-3 w-full bg-transparent border border-yellow-500/20 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                  />
                </div>
              ))}

              <div>
                <label className="text-sm text-yellow-400 tracking-[0.3em] uppercase">
                  Project Details
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="mt-3 w-full bg-transparent border border-yellow-500/20 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
              >
                Send Inquiry
              </button>

            </motion.form>

          </div>
        </section>

      </div>
    </>
  );
}