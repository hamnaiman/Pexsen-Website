
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#081B3A] text-white overflow-hidden">

      {/* Background Effects */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0D428E]/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-[120px]" />

      <div className="relative">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid lg:grid-cols-5 gap-10">

            {/* Brand */}

            <div className="lg:col-span-2">

              <h2 className="text-2xl font-black tracking-wide">
                <span className="text-white">PEX</span>
                <span className="text-green-500">SEN</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 max-w-md">
                We help businesses grow through modern web development,
                AI solutions, branding, digital marketing, video production
                and scalable digital experiences.
              </p>

              {/* Service Tags */}

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300">
                  Web Development
                </span>

                <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300">
                  AI Solutions
                </span>

                <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300">
                  Digital Marketing
                </span>

              </div>

              {/* Social */}

              <div className="mt-6 flex gap-3">

                <a
                  href="#"
                  className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0D428E] transition-all duration-300"
                >
                  <FaFacebookF className="text-slate-300 group-hover:text-white" />
                </a>

                <a
                  href="#"
                  className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0D428E] transition-all duration-300"
                >
                  <FaInstagram className="text-slate-300 group-hover:text-white" />
                </a>

                <a
                  href="#"
                  className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0D428E] transition-all duration-300"
                >
                  <FaLinkedinIn className="text-slate-300 group-hover:text-white" />
                </a>

                <a
                  href="#"
                  className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0D428E] transition-all duration-300"
                >
                  <FaGithub className="text-slate-300 group-hover:text-white" />
                </a>

              </div>

            </div>

            {/* Company */}

            <div>

              <h3 className="font-semibold text-white mb-4">
                Company
              </h3>

              <ul className="space-y-3 text-sm text-slate-400">

                <li>
                  <Link to="/" className="hover:text-white transition-all">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-white transition-all">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/services" className="hover:text-white transition-all">
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/portfolio" className="hover:text-white transition-all">
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:text-white transition-all">
                    Contact
                  </Link>
                </li>

              </ul>

            </div>

            {/* Services */}

            <div>

              <h3 className="font-semibold text-white mb-4">
                Services
              </h3>

              <ul className="space-y-3 text-sm text-slate-400">

                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>UI / UX Design</li>
                <li>AI Solutions</li>
                <li>Video Editing</li>
                <li>Digital Marketing</li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="font-semibold text-white mb-4">
                Contact
              </h3>

              <ul className="space-y-4 text-sm text-slate-400">

                <li className="flex gap-3">
                  <Mail size={16} className="text-green-500 mt-0.5" />
                  hello@pexsen.com
                </li>

                <li className="flex gap-3">
                  <Phone size={16} className="text-green-500 mt-0.5" />
                  +92 XXX XXXXXXX
                </li>

                <li className="flex gap-3">
                  <MapPin size={16} className="text-green-500 mt-0.5" />
                  Pakistan
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} PEXSEN. All Rights Reserved.
            </p>

            <div className="flex gap-5 text-xs text-slate-500">

              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link to="/terms-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

