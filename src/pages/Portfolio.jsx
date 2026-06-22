
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Layers3,
  Briefcase,
  Code2,
  Palette,
  Megaphone,
  Video,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

 const filters = [
  "All",
  "Web Development",
  "Mobile Apps",
  "AI Solutions",
  "UI/UX Design",
  "Brand Identity",
  "Graphic Design",
  "Video Editing",
];

const categories = [
  {
    title: "Development",
    count: "35 Projects",
  },
  {
    title: "Design",
    count: "24 Projects",
  },
  {
    title: "Marketing",
    count: "18 Campaigns",
  },
  {
    title: "Video Editing",
    count: "40 Videos",
  },
];

  const projects = [
    {
      id: 1,
      title: "Spiral Academy",
      category: "Web Development",
      description:
        "Complete homeschool platform with parent portal, enrollment system and admin dashboard.",
      featured: true,
    },
    {
      id: 2,
      title: "AI Automation Platform",
      category: "AI Solutions",
      description:
        "AI-powered workflow automation and intelligent business processes.",
    },
    {
      id: 3,
      title: "Fitness Mobile App",
      category: "Mobile Apps",
      description:
        "Cross-platform mobile application for fitness tracking.",
    },
    {
      id: 4,
      title: "E-Commerce Dashboard",
      category: "UI/UX Design",
      description:
        "Modern dashboard design system with analytics and reporting.",
    },
    {
      id: 5,
      title: "Trademark Journal System",
      category: "Web Development",
      description:
        "Searchable journal platform with OCR and PDF processing.",
    },
    {
      id: 6,
      title: "Customer Support Agent",
      category: "AI Solutions",
      description:
        "AI-powered customer support assistant with automation.",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* Hero */}

       <section className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-b from-[#F8FBFF] via-white to-white">

{/* Background Glow */}

  <div className="absolute -top-56 left-0 w-[700px] h-[700px] bg-blue-100/70 rounded-full blur-[150px]" />

  <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[120px]" />

  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-blue-50 rounded-full blur-[100px]" />

{/* Grid Pattern */}

  <div className="absolute inset-0 opacity-[0.03]">


<div
  className="w-full h-full"
  style={{
    backgroundImage:
      "linear-gradient(#0D428E 1px, transparent 1px), linear-gradient(90deg,#0D428E 1px, transparent 1px)",
    backgroundSize: "80px 80px",
  }}
/>


  </div>

  <div className="relative max-w-7xl mx-auto px-6">


<div className="grid lg:grid-cols-2 gap-14 items-center min-h-[80vh]">

  {/* LEFT */}

  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >

    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-sm font-medium text-[#0D428E]"
    >
      <Briefcase size={15} />
      Portfolio Showcase
    </motion.div>

    <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900">

PEXSEN

  <span className="block text-[#0D428E]">
    Creates Digital
  </span>

  <span className="block text-green-600">
    Impact
  </span>

</h1>


    <p className="mt-6 text-lg text-slate-500 max-w-xl leading-relaxed">

      We design, develop and scale powerful digital products,
      AI solutions, mobile applications and marketing experiences
      that help ambitious brands grow faster.

    </p>

    <div className="mt-10 flex flex-wrap gap-4">

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="px-7 py-4 rounded-2xl bg-[#0D428E] text-white font-semibold inline-flex items-center gap-2 shadow-lg"
      >
        Explore Projects
        <ArrowRight size={18} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="px-7 py-4 rounded-2xl border border-slate-200 bg-white font-semibold"
      >
        View Services
      </motion.button>

    </div>

    <div className="mt-14 grid grid-cols-3 gap-8 max-w-xl">

      <div>
        <h3 className="text-4xl font-bold text-[#0D428E]">
          100+
        </h3>

        <p className="text-slate-500 mt-2">
          Projects Delivered
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-[#0D428E]">
          50+
        </h3>

        <p className="text-slate-500 mt-2">
          Happy Clients
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-[#0D428E]">
          98%
        </h3>

        <p className="text-slate-500 mt-2">
          Client Satisfaction
        </p>
      </div>

    </div>

  </motion.div>

  {/* RIGHT */}

  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="relative hidden lg:block h-[620px]"
  >

    {/* Center Glow */}

    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-blue-100 rounded-full blur-[120px]" />

    {/* Main Browser */}

    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] bg-white rounded-[30px] border border-slate-200 shadow-2xl overflow-hidden">

      <div className="h-12 border-b border-slate-100 flex items-center px-5 gap-2">

        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />

      </div>

      <div className="p-5">

        <div className="relative h-36 rounded-2xl bg-gradient-to-br from-[#0D428E] via-blue-600 to-[#2563EB] overflow-hidden">

          <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/10" />

          <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/10" />

          <div className="absolute inset-0 flex items-center justify-center">

            <h3 className="text-white text-3xl font-bold tracking-wide">
              PEXSEN
            </h3>

          </div>

        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">

          <div className="h-16 rounded-xl bg-slate-100" />
          <div className="h-16 rounded-xl bg-blue-50" />
          <div className="h-16 rounded-xl bg-slate-100" />

        </div>

      </div>

    </div>

    {/* Analytics */}

    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute top-14 left-0 bg-white/90 backdrop-blur-md border border-white rounded-3xl shadow-xl p-5 w-48"
    >

      <div className="flex items-end gap-2 h-16">

        <div className="w-6 h-6 bg-blue-200 rounded-t-lg" />
        <div className="w-6 h-10 bg-blue-300 rounded-t-lg" />
        <div className="w-6 h-14 bg-blue-400 rounded-t-lg" />
        <div className="w-6 h-16 bg-[#0D428E] rounded-t-lg" />

      </div>

      <p className="mt-3 text-sm font-semibold">
        Growth Analytics
      </p>

    </motion.div>

    {/* Mobile App */}

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute right-0 top-24"
    >

      <div className="w-28 h-56 rounded-[28px] border-[7px] border-slate-200 bg-white shadow-xl overflow-hidden">

        <div className="h-8 bg-[#0D428E]" />

        <div className="p-3">

          <div className="h-20 rounded-xl bg-blue-100" />

          <div className="mt-3 h-2 bg-slate-200 rounded-full" />
          <div className="mt-2 h-2 bg-slate-200 rounded-full w-4/5" />

        </div>

      </div>

    </motion.div>

    {/* AI Card */}

    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute bottom-24 left-4 bg-white/90 backdrop-blur-md border border-white rounded-3xl shadow-xl px-5 py-4"
    >

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500" />

        <div>

          <h4 className="font-semibold text-sm">
            AI Solutions
          </h4>

          <p className="text-xs text-slate-500">
            Automation & Agents
          </p>

        </div>

      </div>

    </motion.div>

    {/* Project Card */}

    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="absolute bottom-0 right-8 bg-white/90 backdrop-blur-md border border-white rounded-3xl shadow-xl p-4 w-52"
    >

      <div className="h-20 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />

      <h4 className="mt-3 font-semibold text-sm">
        Featured Project
      </h4>

      <p className="text-xs text-slate-500 mt-1">
        Enterprise Web Platform
      </p>

    </motion.div>

  </motion.div>

</div>

  </div>

</section>


        {/* Filters */}

       <section className="py-20 bg-gradient-to-b from-white to-slate-50/50">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >

      <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-[#0D428E] text-sm font-medium">
        Portfolio Categories
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

        Explore

        <span className="text-[#0D428E]">
          {" "}Our{" "}
        </span>

        <span className="text-green-600">
          Work
        </span>

      </h2>

      <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">

        From web development and AI solutions to branding,
        marketing and creative production — explore how
        PEXSEN transforms ideas into impactful digital experiences.

      </p>

    </motion.div>

    {/* Categories Grid */}

    <div className="grid lg:grid-cols-4 gap-5">

      {categories.map((category) => (

        <motion.button
          key={category.title}
          whileHover={{
            y: -6,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={() => setActiveFilter(category.title)}
          className={`group relative overflow-hidden rounded-[28px] border transition-all duration-300 text-left p-7 ${
            activeFilter === category.title
              ? "bg-[#0D428E] border-[#0D428E] text-white shadow-xl"
              : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg"
          }`}
        >

          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">

            <div
              className={`w-12 h-1 rounded-full ${
                activeFilter === category.title
                  ? "bg-white"
                  : "bg-[#0D428E]"
              }`}
            />

            <h3 className="mt-6 text-2xl font-bold">
              {category.title}
            </h3>

            <p
              className={`mt-2 ${
                activeFilter === category.title
                  ? "text-white/80"
                  : "text-slate-500"
              }`}
            >
              {category.count}
            </p>

          </div>

        </motion.button>

      ))}

    </div>

  </div>

</section>


        {/* Portfolio Grid */}

        <section className="pb-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-3 gap-8">

      {filteredProjects.map((project, index) => (

        <motion.div
          key={project.id}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          whileHover={{
            y: -10,
          }}
          className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300"
        >

          {/* Visual Area */}

          <div className="h-60 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white border-b border-slate-100 flex items-center justify-center">

            {/* Development */}

            {project.category === "Development" && (

              <div className="w-[85%] rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden">

                <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-2">

                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />

                </div>

                <div className="p-4">

                  <div className="h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400" />

                  <div className="grid grid-cols-2 gap-2 mt-3">

                    <div className="h-10 rounded-lg bg-slate-100" />
                    <div className="h-10 rounded-lg bg-slate-100" />

                  </div>

                </div>

              </div>

            )}

            {/* Design */}

            {project.category === "Design" && (

              <div className="w-[85%] bg-white rounded-3xl border border-slate-200 p-4 shadow-lg">

                <div className="h-24 rounded-2xl bg-gradient-to-r from-pink-200 via-orange-100 to-yellow-100" />

                <div className="grid grid-cols-3 gap-2 mt-3">

                  <div className="h-12 rounded-xl bg-pink-100" />
                  <div className="h-12 rounded-xl bg-orange-100" />
                  <div className="h-12 rounded-xl bg-yellow-100" />

                </div>

              </div>

            )}

            {/* AI */}

            {project.category === "AI" && (

              <div className="relative w-40 h-40">

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#0D428E] to-green-500"
                />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full" />

                <svg className="absolute inset-0 w-full h-full">
                  <line x1="50%" y1="50%" x2="50%" y2="5%" stroke="#60A5FA" />
                  <line x1="50%" y1="50%" x2="50%" y2="95%" stroke="#22C55E" />
                  <line x1="50%" y1="50%" x2="5%" y2="50%" stroke="#FB923C" />
                  <line x1="50%" y1="50%" x2="95%" y2="50%" stroke="#A855F7" />
                </svg>

              </div>

            )}

            {/* Marketing */}

            {project.category === "Marketing" && (

              <div className="flex items-end gap-3 h-28">

                <div className="w-10 h-12 rounded-t-xl bg-blue-300" />
                <div className="w-10 h-20 rounded-t-xl bg-blue-400" />
                <div className="w-10 h-28 rounded-t-xl bg-[#0D428E]" />
                <div className="w-10 h-24 rounded-t-xl bg-green-500" />

              </div>

            )}

            {/* Video Editing */}

            {project.category === "Video Editing" && (

              <div className="w-[85%]">

                <div className="h-28 rounded-3xl bg-gradient-to-r from-slate-800 to-slate-700 flex items-center justify-center">

                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">

                    <Play size={22} className="text-[#0D428E]" />

                  </div>

                </div>

                <div className="mt-4 flex gap-1">

                  <div className="flex-1 h-2 rounded-full bg-blue-500" />
                  <div className="flex-1 h-2 rounded-full bg-violet-500" />
                  <div className="flex-1 h-2 rounded-full bg-green-500" />

                </div>

              </div>

            )}

            {/* Branding */}

            {project.category === "Branding" && (

              <div className="w-40 h-40 rounded-full border-8 border-[#0D428E]/10 flex items-center justify-center">

                <div className="text-4xl font-black">
                  <span className="text-[#0D428E]">P</span>
                  <span className="text-green-600">X</span>
                </div>

              </div>

            )}

          </div>

          {/* Content */}

          <div className="p-7">

            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#0D428E] text-sm font-medium">
              {project.category}
            </span>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              {project.title}
            </h3>

            <p className="mt-3 text-slate-500 leading-relaxed">
              {project.description}
            </p>

            <button className="mt-6 inline-flex items-center gap-2 text-[#0D428E] font-semibold group">

              View Project

              <ExternalLink
                size={16}
                className="group-hover:translate-x-1 transition-all"
              />

            </button>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
        {/* CTA */}

       <section className="py-24">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-[#F8FBFF] to-white p-10 lg:p-16"
    >

      {/* Background Glow */}

      <div className="absolute -top-20 right-0 w-72 h-72 bg-blue-100 rounded-full blur-[100px]" />

      <div className="absolute bottom-0 left-0 w-60 h-60 bg-green-100 rounded-full blur-[100px]" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <div>

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#0D428E] text-sm font-medium">
            Let's Work Together
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold leading-tight text-slate-900">

            Ready To Create

            <span className="block text-[#0D428E]">
              Digital Impact?
            </span>

          </h2>

          <p className="mt-5 text-lg text-slate-500 max-w-xl">

            From websites and mobile apps to AI solutions,
            branding, video production and marketing campaigns,
            we help businesses grow with confidence.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="group px-8 py-4 rounded-2xl bg-[#0D428E] text-white font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">

              Start Your Project

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-all duration-300"
              />

            </button>

            <button className="px-8 py-4 rounded-2xl border border-slate-200 bg-white font-semibold hover:border-[#0D428E] transition-all">
              Schedule Consultation
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-5">

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

            <h3 className="text-4xl font-bold text-[#0D428E]">
              100+
            </h3>

            <p className="mt-2 text-slate-500">
              Projects Delivered
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

            <h3 className="text-4xl font-bold text-green-600">
              50+
            </h3>

            <p className="mt-2 text-slate-500">
              Happy Clients
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

            <h3 className="text-4xl font-bold text-[#0D428E]">
              98%
            </h3>

            <p className="mt-2 text-slate-500">
              Client Satisfaction
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

            <h3 className="text-4xl font-bold text-green-600">
              24/7
            </h3>

            <p className="mt-2 text-slate-500">
              Dedicated Support
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>

      </main>

      <Footer/>
    </>
  );
}