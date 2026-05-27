import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import {
  FaGithubSquare,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';
import logo from "../assets/company/logo-white.png";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-black text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <img
              alt="A Studio"
              src={logo}
              className="h-8 w-auto scale-150 transform"
            />

            <div>
              <h2 className="text-2xl font-bold text-white">
                <span className="text-yellow-400">A+ </span>Studio
              </h2>

              <p className="text-sm text-gray-400">
                Architecture & Design
              </p>
            </div>
          </div>

          <p className="leading-relaxed text-gray-400">
            We design modern, elegant, and functional architectural
            spaces that inspire people and elevate experiences.
          </p>

          {/* SOCIALS */}
          <div className="mt-8 flex gap-4">
            {[
              <FaInstagram className="text-2xl" key="instagram" />,
              <FaTwitter className="text-2xl" key="twitter" />,
              <FaLinkedinIn className="text-2xl" key="linkedin" />,
              <FaFacebookF className="text-2xl" key="facebook" />,
              <FaYoutube className="text-2xl" key="youtube" />
            ].map((icon) => (
              <button
                key={icon.key}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-400/5 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-yellow-400">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">
            {[
              "Home",
              "About",
              "Services",
              "Projects",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition hover:text-yellow-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-yellow-400">
            Services
          </h3>

          <ul className="space-y-4 text-gray-400">
            {[
              "Residential Construction",
              "Commercial Buildings",
              "Renevation Projects",
              "Infrastructure Projects"
            ].map((service) => (
              <li
                key={service}
                className="transition hover:text-yellow-400"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-yellow-400">
            Contact Us
          </h3>

          <div className="space-y-5">
            <div className="flex gap-4">
              <MapPinIcon className="h-6 w-6 text-yellow-400" />

              <div>
                <p className="font-medium text-white">
                  Address
                </p>

                <p className="text-gray-400">
                  Bulacan, Philippines
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <PhoneIcon className="h-6 w-6 text-yellow-400" />

              <div>
                <p className="font-medium text-white">
                  Phone
                </p>

                <p className="text-gray-400">
                  +63 912 345 6789
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <EnvelopeIcon className="h-6 w-6 text-yellow-400" />

              <div>
                <p className="font-medium text-white">
                  Email
                </p>

                <p className="text-gray-400">
                  info@astudio.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="border-t border-yellow-500/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-yellow-400">
              Newsletter
            </p>

            <h2 className="text-3xl font-bold text-white">
              Stay Updated With Our Latest Projects
            </h2>
          </div>

          <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full min-w-0 rounded-xl border border-yellow-500/20 bg-neutral-900 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
            />

            <button className="w-full sm:w-auto rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-yellow-500/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 A+ Studio. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-yellow-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-yellow-400"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}