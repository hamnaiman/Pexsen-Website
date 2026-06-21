import Navbar from "../components/Navbar";
import {
  ArrowRight,
  Code2,
  Rocket,
  Brain,
  Globe,
  CheckCircle,
    Palette,
  Layers3,
  Handshake,
} from "lucide-react";

import { motion } from "framer-motion";


export default function AboutPage() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "8+", label: "Countries Served" },
    { value: "5+", label: "Years Experience" },
  ];

  const values = [
    {
      title: "Innovation",
      desc: "Building future-ready software products.",
      icon: <Brain size={28} />,
      bg: "bg-blue-50",
    },
    {
      title: "Transparency",
      desc: "Clear communication throughout every project.",
      icon: <Globe size={28} />,
      bg: "bg-green-50",
    },
    {
      title: "Excellence",
      desc: "Quality is at the center of everything we build.",
      icon: <Rocket size={28} />,
      bg: "bg-red-50",
    },
    {
      title: "Ownership",
      desc: "Treating every project like our own business.",
      icon: <Code2 size={28} />,
      bg: "bg-yellow-50",
    },
  ];

  return (
 <>
    <Navbar />
    <div className="bg-white overflow-hidden pt-24">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-200/40 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-green-200/30 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="px-8">
              <span className="inline-flex px-4 py-2 rounded-full border border-gray-200 text-sm font-medium">
                About Pexsen
              </span>

             <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-gray-900 ">
  Building
  <br />
  <span className="text-gray-900">Digital</span>
  <br />
  <span className="text-green-600">Products</span>
  <br />
   <span className="text-gray-900">That</span> 
    <span className="text-blue-600"> Matter</span>

</h1>

              <p className="mt-8 text-xl text-gray-600 max-w-xl leading-relaxed">
                We help startups and businesses transform ideas into scalable
                software products through strategy, design, development and AI.
              </p>

              <div className="flex gap-4 mt-10">
                <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-2 hover:scale-105 transition">
                  Start Project
                  <ArrowRight size={18} />
                </button>

                <button className="border border-gray-300 px-8 py-4 rounded-2xl hover:bg-gray-50 transition">
                  View Work
                </button>
              </div>
            </div>

            {/* Right Visual */}
          
<motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative h-[550px] flex items-center justify-center"
>
  {/* Glow Effects */}
  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.15, 0.3, 0.15],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px]"
  />

  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.25, 0.1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/20 rounded-full blur-[120px]"
  />

  {/* Main Dashboard */}
  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    className="relative w-full max-w-lg rounded-[40px] border border-gray-100 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">
          Pexsen Studio
        </p>

        <h3 className="text-2xl font-bold text-gray-900">
          Product Dashboard
        </h3>
      </div>

      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-4 mt-8">

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl bg-blue-50 p-6"
      >
        <h4 className="text-4xl font-bold text-blue-600">
          50+
        </h4>

        <p className="text-gray-600 mt-2">
          Projects
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl bg-green-50 p-6"
      >
        <h4 className="text-4xl font-bold text-green-600">
          98%
        </h4>

        <p className="text-gray-600 mt-2">
          Satisfaction
        </p>
      </motion.div>

    </div>

    {/* Progress Section */}
    <div className="mt-8 rounded-3xl bg-gray-50 p-6">
      <div className="flex justify-between">
        <span className="font-medium">
          Product Growth
        </span>

        <span className="text-blue-600 font-semibold">
          80%
        </span>
      </div>

      <div className="mt-4 h-3 rounded-full bg-gray-200 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          transition={{
            duration: 1.5,
            delay: 0.3,
          }}
          className="h-full rounded-full bg-blue-600"
        />

      </div>
    </div>

    {/* Activity */}
    <div className="mt-8 space-y-4">

      <div className="flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-blue-500" />

        <span className="text-gray-600">
          AI Solutions Delivered
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="text-gray-600">
          Startup Products Launched
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />

        <span className="text-gray-600">
          Custom Software Development
        </span>
      </div>

    </div>

  </motion.div>

  {/* Floating Card Top Right */}
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 2, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-10 right-0 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl"
  >
    <p className="text-sm text-gray-500">
      Client Growth
    </p>

    <h3 className="text-3xl font-bold text-green-600">
      +240%
    </h3>
  </motion.div>

  {/* Floating Card Bottom Left */}
  <motion.div
    animate={{
      y: [0, 15, 0],
      rotate: [0, -2, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-10 right-0 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl"
  >
    <p className="text-sm text-gray-500">
      Avg Delivery
    </p>

    <h3 className="text-3xl font-bold text-blue-600">
      4–8 Weeks
    </h3>
  </motion.div>

</motion.div>

          </div>
        </div>
      </section>

      {/* BENTO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 bg-blue-50 rounded-[32px] p-10">
              <h2 className="text-6xl font-bold">50+</h2>
              <p className="mt-3 text-gray-600">Projects Delivered</p>
            </div>

            <div className="md:col-span-8 bg-gray-50 rounded-[32px] p-10">
              <h2 className="text-3xl font-bold">
                Turning Ideas Into Exceptional Products
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                From startup MVPs to enterprise platforms, we build software
                that drives real business growth.
              </p>
            </div>

            <div className="md:col-span-8 bg-green-50 rounded-[32px] p-10">
              <h2 className="text-3xl font-bold">
                Trusted By Businesses Worldwide
              </h2>
            </div>

            <div className="md:col-span-4 bg-yellow-50 rounded-[32px] p-10">
              <h2 className="text-6xl font-bold">98%</h2>
              <p className="mt-3 text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[180px] md:text-[250px] font-black text-gray-100">
            PEXSEN
          </h1>
        </div>

        <div className="relative max-w-7xl  px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="uppercase tracking-[6px] text-blue-600 font-semibold ">
                Our Story
              </p>

              <h2 className="text-5xl md:text-6xl font-bold ">
                From Ideas
                <br />
                To Impact
              </h2>
            </div>

           
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-gray-100 p-10 hover:shadow-xl transition"
              >
                <h2 className="text-6xl font-bold">{item.value}</h2>
                <p className="mt-4 text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, i) => (
              <div
                key={i}
                className={`${value.bg} rounded-[32px] p-8 hover:-translate-y-2 transition`}
              >
                {value.icon}
                <h3 className="text-2xl font-bold mt-6">{value.title}</h3>
                <p className="text-gray-600 mt-4">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
  <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-20">
      <span className="text-blue-600 font-semibold uppercase tracking-[4px]">
        Our Process
      </span>

      <h2 className="mt-4 text-5xl md:text-6xl font-bold text-gray-900">
        How We Work
      </h2>

      <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
        A proven process that helps us deliver exceptional software
        products on time and with confidence.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
      {[
        {
          number: "01",
          title: "Discover",
          color: "text-blue-600",
          desc: "Understanding your goals, audience and business needs."
        },
        {
          number: "02",
          title: "Design",
          color: "text-green-600",
          desc: "Creating beautiful user experiences and interfaces."
        },
        {
          number: "03",
          title: "Develop",
          color: "text-red-500",
          desc: "Building scalable and high-performance solutions."
        },
        {
          number: "04",
          title: "Launch",
          color: "text-yellow-500",
          desc: "Deploying smoothly and ensuring everything works."
        },
        {
          number: "05",
          title: "Scale",
          color: "text-purple-600",
          desc: "Optimizing and growing your product continuously."
        }
      ].map((step) => (
        <div
          key={step.number}
          className="group bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div
            className={`text-5xl font-bold ${step.color} opacity-20 group-hover:opacity-100 transition`}
          >
            {step.number}
          </div>

          <h3 className="mt-6 text-2xl font-bold text-gray-900">
            {step.title}
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WHY PEXSEN */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-24">
      <span className="text-blue-600 font-semibold tracking-[0.2em] uppercase">
        Why Pexsen
      </span>

      <h2 className="mt-6 text-6xl font-bold tracking-tight text-gray-900">
        Built Different.
      </h2>

      <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
        We combine strategy, design and engineering to build
        products that move businesses forward.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      {[
        {
          no: "01",
          title: "Strategy First",
          desc: "We deeply understand your business before building solutions.",
          color: "blue"
        },
        {
          no: "02",
          title: "Design Obsessed",
          desc: "Every interaction is crafted to feel intuitive and premium.",
          color: "green"
        },
        {
          no: "03",
          title: "Built To Scale",
          desc: "Architecture designed for growth, speed and reliability.",
          color: "red"
        },
        {
          no: "04",
          title: "Long-Term Partner",
          desc: "We help you long after launch with support and growth.",
          color: "yellow"
        }
      ].map((item) => (

        <div
          key={item.no}
          className="group relative overflow-hidden rounded-[40px]
          border border-gray-100 bg-white p-10
          hover:-translate-y-3 transition-all duration-500
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
        >

          {/* BIG NUMBER */}
          <div
            className={`
              absolute -top-6 right-6 text-[120px]
              font-black opacity-[0.04]
              ${
                item.color === "blue"
                  ? "text-blue-600"
                  : item.color === "green"
                  ? "text-green-600"
                  : item.color === "red"
                  ? "text-red-600"
                  : "text-yellow-500"
              }
            `}
          >
            {item.no}
          </div>

          {/* TOP LINE */}
          <div
            className={`
              h-1 w-20 rounded-full
              ${
                item.color === "blue"
                  ? "bg-blue-500"
                  : item.color === "green"
                  ? "bg-green-500"
                  : item.color === "red"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              }
            `}
          />

          <h3 className="mt-10 text-4xl font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-5 text-lg leading-relaxed text-gray-600 max-w-md">
            {item.desc}
          </p>

          <div className="mt-10 flex items-center gap-3 text-gray-900 font-semibold">
            Learn More
            <span className="group-hover:translate-x-2 transition">
              →
            </span>
          </div>

          {/* GLOW */}
          <div
            className={`
              absolute -bottom-20 -right-20
              h-60 w-60 rounded-full blur-3xl opacity-0
              group-hover:opacity-20 transition duration-700
              ${
                item.color === "blue"
                  ? "bg-blue-500"
                  : item.color === "green"
                  ? "bg-green-500"
                  : item.color === "red"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              }
            `}
          />
        </div>

      ))}
    </div>
  </div>
</section>

      {/* CTA */}
<section className="py-10 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative rounded-[48px] border border-gray-100 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden">

      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[100px]" />

      <div className="grid lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div className="p-12 md:p-16 lg:p-20">

          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600">
            Ready To Start?
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-gray-900">
            Have An Idea?
            <br />
            Let's Make It
            <span className="text-blue-600"> Real.</span>
          </h2>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-gray-600">
            We help startups and businesses transform ideas into
            beautiful, scalable and high-performing digital products.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="rounded-2xl bg-gray-900 px-8 py-4 text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Start Your Project
            </button>

            <button className="rounded-2xl border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-50">
              Schedule A Call
            </button>

          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              Free Consultation
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Fast Delivery
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              Long-Term Support
            </div>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex items-center justify-center p-12 lg:p-20">

          <div className="relative w-full max-w-md">

            {/* Main Card */}
            <div className="rounded-[32px] border border-gray-100 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

              <div className="text-sm font-medium text-gray-500">
                Average Project Timeline
              </div>

              <div className="mt-4 text-5xl font-bold text-gray-900">
                4–8 Weeks
              </div>

              <div className="mt-8 h-2 rounded-full bg-gray-100">
                <div className="h-2 w-3/4 rounded-full bg-blue-600" />
              </div>

            </div>

            {/* Floating Card 1 */}
            <div className="absolute -top-8 -right-6 rounded-[24px] border border-gray-100 bg-white p-6 shadow-xl">

              <div className="text-sm text-gray-500">
                Client Satisfaction
              </div>

              <div className="mt-2 text-3xl font-bold text-green-600">
                98%
              </div>

            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-8 -left-6 rounded-[24px] border border-gray-100 bg-white p-6 shadow-xl">

              <div className="text-sm text-gray-500">
                Projects Delivered
              </div>

              <div className="mt-2 text-3xl font-bold text-blue-600">
                50+
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
    </div>
</>
  );
}

