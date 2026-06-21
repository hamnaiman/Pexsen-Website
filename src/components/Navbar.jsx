import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/pexsenLogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="PEXSEN"
                  className="h-16 lg:h-[72px] object-contain"
                />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={item.path}
                    className="group relative font-medium text-gray-700 hover:text-[#0D428E] transition-all duration-300"
                  >
                    {item.name}

                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0D428E] rounded-full transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}

              {/* Premium Button */}
              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="flex items-center gap-2 rounded-xl bg-[#0D428E] px-5 py-2.5 font-semibold text-white shadow-md hover:bg-[#08336F] transition-all duration-300"
              >
                Get Started
                <ArrowRight size={18} />
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-800"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
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
              className="fixed inset-0 bg-black/40 z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-[320px] bg-white z-50 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center justify-between mb-10">
                <img
                  src={logo}
                  alt="PEXSEN"
                  className="h-14 object-contain"
                />

                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-800"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-[#0D428E] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <button className="mt-10 w-full rounded-xl bg-[#0D428E] py-3 font-semibold text-white hover:bg-[#08336F] transition">
                Get Started
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}