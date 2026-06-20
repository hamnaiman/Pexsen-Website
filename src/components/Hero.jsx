import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import robot from "../assets/robot.png";

export default function HeroSection() {
  const technologies = [
    "MERN Stack",
    "AI Solutions",
    "Mobile Apps",
    "Cloud Services",
    "SaaS Platforms",
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-28">
      {/* Premium Background Effects */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0F172A]/10 blur-[160px]" />

      <div className="absolute top-20 -right-32 h-[450px] w-[450px] rounded-full bg-[#1E3A8A]/10 blur-[160px]" />

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#2563EB]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#1E3A8A] shadow-sm">
                AI Powered Digital Agency
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                mt-6
                max-w-4xl
                text-5xl
                font-semibold
                leading-[1.05]
                tracking-tight
                text-slate-900
                md:text-6xl
                lg:text-7xl
              "
            >
              Engineering Next-Generation Digital Experiences
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              PEXSEN delivers custom web applications, AI-powered
              systems, SaaS platforms, mobile applications, and
              scalable digital solutions designed to accelerate
              business growth and digital transformation.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  rounded-xl
                  bg-[#0F172A]
                  px-8
                  py-4
                  font-medium
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:bg-[#1E293B]
                "
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-8
                  py-4
                  font-medium
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#0F172A]
                  hover:text-[#0F172A]
                "
              >
                <PlayCircle size={18} />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Technologies */}
            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                    shadow-sm
                    transition-all
                    hover:border-[#1E3A8A]
                    hover:text-[#1E3A8A]
                  "
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-5
                  shadow-lg
                "
              >
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  100+
                </h3>
                <p className="text-sm text-slate-500">
                  Projects
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-5
                  shadow-lg
                "
              >
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  50+
                </h3>
                <p className="text-sm text-slate-500">
                  Clients
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-5
                  shadow-lg
                "
              >
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  99%
                </h3>
                <p className="text-sm text-slate-500">
                  Success Rate
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">
            {/* Dark Blue Glow */}
            <div className="absolute inset-0 rounded-full bg-[#1E3A8A]/20 blur-3xl" />

            {/* Robot */}
            <motion.img
              src={robot}
              alt="AI Robot"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-sm lg:max-w-lg"
            />

            {/* MERN */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="
                absolute
                -left-8
                top-16
                rounded-2xl
                border
                border-slate-100
                bg-white/95
                px-5
                py-3
                shadow-xl
                backdrop-blur-lg
              "
            >
              <p className="font-semibold text-[#0F172A]">
                MERN Stack
              </p>
            </motion.div>

            {/* AI */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="
                absolute
                -right-8
                top-28
                rounded-2xl
                border
                border-slate-100
                bg-white/95
                px-5
                py-3
                shadow-xl
                backdrop-blur-lg
              "
            >
              <p className="font-semibold text-[#1E3A8A]">
                AI Solutions
              </p>
            </motion.div>

            {/* Cloud */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="
                absolute
                bottom-16
                left-8
                rounded-2xl
                border
                border-slate-100
                bg-white/95
                px-5
                py-3
                shadow-xl
                backdrop-blur-lg
              "
            >
              <p className="font-semibold text-[#2563EB]">
                Cloud Services
              </p>
            </motion.div>

            {/* SaaS */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="
                absolute
                bottom-24
                right-0
                rounded-2xl
                border
                border-slate-100
                bg-white/95
                px-5
                py-3
                shadow-xl
                backdrop-blur-lg
              "
            >
              <p className="font-semibold text-[#0F172A]">
                SaaS Platforms
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}