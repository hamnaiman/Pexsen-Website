import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/pexsenLogo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img
                src={logo}
                alt="PEXSEN"
                className="h-12 object-contain"
              />

              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  whileHover={{ y: -2 }}
                  className="group relative text-slate-300 font-medium transition"
                >
                  {item.name}

                  <span
                    className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-green-500
                    via-blue-500
                    to-red-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                  />
                </motion.a>
              ))}

              {/* CTA Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  px-6
                  py-3
                  font-medium
                  text-white
                  bg-gradient-to-r
                  from-green-500
                  via-blue-500
                  to-red-500
                  shadow-lg
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight size={18} />
                </span>

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white"
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="
                fixed
                right-0
                top-0
                h-screen
                w-80
                bg-slate-950
                border-l
                border-white/10
                z-50
                p-8
              "
            >
              <div className="flex justify-between items-center mb-10">
                <img
                  src={logo}
                  alt="PEXSEN"
                  className="h-10"
                />

                <button
                  onClick={() => setOpen(false)}
                  className="text-white"
                >
                  <X />
                </button>
              </div>

              <div className="space-y-6">
                {navLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    whileHover={{ x: 8 }}
                    className="
                      block
                      text-lg
                      text-slate-300
                      hover:text-white
                    "
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <button
                className="
                  mt-10
                  w-full
                  rounded-xl
                  py-3
                  text-white
                  font-medium
                  bg-gradient-to-r
                  from-green-500
                  via-blue-500
                  to-red-500
                "
              >
                Get Started
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}