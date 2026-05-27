
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-[#050505] border-t border-yellow-500/10">

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
            Contact Us
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-none">
            Let’s Build
            <span className="block text-yellow-400">
              Something Great
            </span>
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            Have a project in mind? Let’s discuss your ideas and turn them
            into a fully realized architectural space built with precision
            and excellence.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="mt-28 grid lg:grid-cols-2 gap-20">

          {/* LEFT - CONTACT INFO */}
          <div className="space-y-12">

            <div>
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
                Email
              </p>
              <h3 className="mt-4 text-2xl font-bold">
                info@aplusstudio.com
              </h3>
            </div>

            <div>
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
                Phone
              </p>
              <h3 className="mt-4 text-2xl font-bold">
                +63 9XX XXX XXXX
              </h3>
            </div>

            <div>
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
                Location
              </p>
              <h3 className="mt-4 text-2xl font-bold">
                Laguna, Philippines
              </h3>
            </div>

            {/* SMALL NOTE */}
            <div className="pt-10 border-t border-yellow-500/10">
              <p className="text-zinc-500 leading-relaxed">
                We respond to all inquiries within 24–48 hours. For urgent
                projects, please contact us directly via phone.
              </p>
            </div>

          </div>

          {/* RIGHT - FORM */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* NAME */}
            <div>
              <label className="text-sm text-yellow-400 tracking-[0.3em] uppercase">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-3 w-full bg-transparent border border-yellow-500/20 rounded-[18px] px-6 py-4 text-white outline-none focus:border-yellow-400 transition-all"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-yellow-400 tracking-[0.3em] uppercase">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-3 w-full bg-transparent border border-yellow-500/20 rounded-[18px] px-6 py-4 text-white outline-none focus:border-yellow-400 transition-all"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-yellow-400 tracking-[0.3em] uppercase">
                Project Details
              </label>
              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="mt-3 w-full bg-transparent border border-yellow-500/20 rounded-[18px] px-6 py-4 text-white outline-none focus:border-yellow-400 transition-all"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 rounded-[18px] bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all"
            >
              Send Inquiry
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}