import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  Code2,
  Bot,
  Cloud,
  Smartphone,
  Layers3,
} from "lucide-react";
import robot from "../assets/robot.png";

export default function HeroSection() {
  const services = [
    {
      icon: <Code2 size={18} />,
      title: "MERN Stack",
      color: "text-blue-600",
    },
    {
      icon: <Bot size={18} />,
      title: "AI Solutions",
      color: "text-green-600",
    },
    {
      icon: <Layers3 size={18} />,
      title: "SaaS Platforms",
      color: "text-yellow-500",
    },
    {
      icon: <Cloud size={18} />,
      title: "Cloud Services",
      color: "text-blue-500",
    },
    {
      icon: <Smartphone size={18} />,
      title: "Mobile Apps",
      color: "text-red-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-100 blur-[140px]" />

      <div className="absolute top-20 right-0 h-[450px] w-[450px] rounded-full bg-green-100 blur-[140px]" />

      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-50 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#0D428E]">
                <Sparkles size={16} />
                WE ARE PEXSEN
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900"
            >
              We Build Digital
              <br />
              Solutions That
              <br />

              <span className="text-[#2563EB]">
                Grow
              </span>

              {" "}Your{" "}

              <span className="text-green-600">
                Business
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-xl text-lg leading-8 text-slate-600"
            >
              PEXSEN is a creative software agency helping startups,
              businesses and enterprises build modern web applications,
              AI-powered solutions, SaaS products, cloud systems and
              digital experiences that drive measurable growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center gap-2 rounded-xl bg-[#0D428E] px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#08336F]"
              >
                Explore Services
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-[#0D428E] hover:text-[#0D428E]"
              >
                <PlayCircle size={18} />
                Get A Quote
              </motion.button>
            </motion.div>

           
{/* Stats */}
{/* <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

  {[
    {
      value: "100+",
      label: "Projects Completed",
      color: "border-blue-500",
    },
    {
      value: "50+",
      label: "Happy Clients",
      color: "border-green-500",
    },
    {
      value: "5+",
      label: "Years Experience",
      color: "border-yellow-500",
    },
    {
      value: "99%",
      label: "Success Rate",
      color: "border-[#0D428E]",
    },
  ].map((item) => (
    <motion.div
      key={item.label}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        bg-white
        rounded-3xl
        px-8
        py-8
        shadow-lg
        border-t-4
        ${item.color}
        hover:shadow-2xl
        transition-all
      `}
    >
      <h3 className="text-4xl font-bold text-slate-900">
        {item.value}
      </h3>

      <p className="mt-2 text-sm font-medium text-slate-500">
        {item.label}
      </p>
    </motion.div>
  ))}
</div> */}
          </div>

{/* RIGHT SIDE */}
<div className="relative flex items-center justify-center h-full">

  {/* Glow */}
  <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-100 blur-[140px]" />

  {/* Robot */}
  <motion.img
    src={robot}
    alt="Robot"
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      relative
      z-20
      w-full
      max-w-[520px]
      lg:max-w-[650px]
      object-contain
      -mt-20
    "
  />

  {/* MERN */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="absolute z-30 left-10 top-32 bg-white rounded-2xl px-6 py-4 shadow-xl"
  >
    <div className="flex items-center gap-2">
      <Code2 size={18} className="text-blue-600" />
      <span className="font-semibold">MERN Stack</span>
    </div>
  </motion.div>

  {/* Mobile */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute z-30 right-8 top-20 bg-white rounded-2xl px-6 py-4 shadow-xl"
  >
    <div className="flex items-center gap-2">
      <Smartphone size={18} className="text-red-500" />
      <span className="font-semibold">Mobile Apps</span>
    </div>
  </motion.div>

  {/* SaaS */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute z-30 right-0 top-64 bg-white rounded-2xl px-6 py-4 shadow-xl"
  >
    <div className="flex items-center gap-2">
      <Layers3 size={18} className="text-yellow-500" />
      <span className="font-semibold">SaaS Platforms</span>
    </div>
  </motion.div>

  {/* Cloud */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3.5, repeat: Infinity }}
    className="absolute z-30 left-0 bottom-44 bg-white rounded-2xl px-6 py-4 shadow-xl"
  >
    <div className="flex items-center gap-2">
      <Cloud size={18} className="text-blue-500" />
      <span className="font-semibold">Cloud Services</span>
    </div>
  </motion.div>

  {/* AI */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 4.5, repeat: Infinity }}
    className="absolute z-30 right-10 bottom-28 bg-white rounded-2xl px-6 py-4 shadow-xl"
  >
    <div className="flex items-center gap-2">
      <Bot size={18} className="text-green-600" />
      <span className="font-semibold">AI Solutions</span>
    </div>
  </motion.div>

</div>
        </div>
      </div>


<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-8 max-w-5xl mx-auto"
>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        value: "100+",
        label: "Projects Completed",
        color: "from-blue-500 to-blue-700",
      },
      {
        value: "50+",
        label: "Happy Clients",
        color: "from-green-500 to-green-700",
      },
      {
        value: "5+",
        label: "Years Experience",
        color: "from-yellow-500 to-orange-500",
      },
      {
        value: "24/7",
        label: "Support Available",
        color: "from-[#0D428E] to-[#2563EB]",
      },
    ].map((item, index) => (
      <motion.div
        key={item.label}
        initial={{
          opacity: 0,
          x: -80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
        }}
        whileHover={{
          y: -10,
          scale: 1.05,
        }}
        className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg border border-slate-100"
      >
        {/* Hover Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
        />

        <div className="relative z-10">
          <h3 className="text-4xl font-bold text-slate-900 group-hover:text-white transition-all duration-300">
            {item.value}
          </h3>

          <p className="mt-2 text-sm font-medium text-slate-500 group-hover:text-white/90 transition-all duration-300">
            {item.label}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

    </section>
  );
}