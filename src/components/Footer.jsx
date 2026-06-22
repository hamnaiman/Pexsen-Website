import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#081B3A] text-white overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />

      <div className="relative">

        {/* Main Footer */}

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-14">

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Brand */}

            <div className="lg:col-span-2">

              <h2 className="text-3xl font-black tracking-wide">
                <span className="text-white">PEX</span>
                <span className="text-green-500">SEN</span>
              </h2>

              <p className="mt-6 text-slate-300 leading-relaxed max-w-md">

                PEXSEN helps businesses transform ideas into
                impactful digital experiences through web
                development, AI solutions, branding, marketing,
                video production and creative design.

              </p>

             <div className="mt-8 flex gap-4">

  <a
    href="#"
    className="group w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0D428E] hover:border-[#0D428E] transition-all duration-300"
  >
    <FaFacebookF
      size={16}
      className="text-slate-300 group-hover:text-white"
    />
  </a>

  <a
    href="#"
    className="group w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0D428E] hover:border-[#0D428E] transition-all duration-300"
  >
    <FaInstagram
      size={16}
      className="text-slate-300 group-hover:text-white"
    />
  </a>

  <a
    href="#"
    className="group w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0D428E] hover:border-[#0D428E] transition-all duration-300"
  >
    <FaLinkedinIn
      size={16}
      className="text-slate-300 group-hover:text-white"
    />
  </a>

  <a
    href="#"
    className="group w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0D428E] hover:border-[#0D428E] transition-all duration-300"
  >
    <FaGithub
      size={16}
      className="text-slate-300 group-hover:text-white"
    />
  </a>

</div>

            </div>

            {/* Company */}

            <div>

              <h3 className="text-lg font-semibold mb-6">
                Company
              </h3>

              <ul className="space-y-4 text-slate-300">

                <li>
                  <a href="/" className="hover:text-white transition-all">
                    Home
                  </a>
                </li>

                <li>
                  <a href="/about" className="hover:text-white transition-all">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="/services" className="hover:text-white transition-all">
                    Services
                  </a>
                </li>

                <li>
                  <a href="/portfolio" className="hover:text-white transition-all">
                    Portfolio
                  </a>
                </li>

                <li>
                  <a href="/contact" className="hover:text-white transition-all">
                    Contact
                  </a>
                </li>

              </ul>

            </div>

            {/* Services */}

            <div>

              <h3 className="text-lg font-semibold mb-6">
                Services
              </h3>

              <ul className="space-y-4 text-slate-300">

                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>AI Solutions</li>
                <li>UI / UX Design</li>
                <li>Video Editing</li>
                <li>Digital Marketing</li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-lg font-semibold mb-6">
                Contact
              </h3>

              <ul className="space-y-4 text-slate-300">

                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-green-500" />
                  hello@pexsen.com
                </li>

                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-green-500" />
                  +92 XXX XXXXXXX
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-green-500" />
                  Pakistan
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} PEXSEN. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-slate-400">

              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white">
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}