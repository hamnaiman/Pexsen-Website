import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import pexsenLogo from "../assets/pexsenLogo.png";
import { motion } from "framer-motion";
import {
ArrowRight,
Play,
Bot,
Brain,
Code2,
Layers3,
ShoppingCart,
Cloud,
Smartphone,
PenTool,
Rocket,
Users,
ShieldCheck,
Search,
ClipboardList,
CheckCircle2,
BarChart3,
Megaphone,
User,
 MoreHorizontal,
Palette,
Video,
} from "lucide-react";

export default function ServicesPage() {
const services = [
{
icon: <Bot size={32} />,
title: "AI Development",
desc: "Custom AI agents, chatbots and intelligent automation solutions.",
color: "from-blue-500 to-indigo-600",
},
{
icon: <Code2 size={32} />,
title: "MERN Stack",
desc: "React, Node.js, Express and MongoDB applications.",
color: "from-cyan-500 to-blue-600",
},
{
icon: <Brain size={32} />,
title: "Machine Learning",
desc: "Predictive models, deep learning and analytics.",
color: "from-violet-500 to-purple-600",
},
{
icon: <Layers3 size={32} />,
title: "SaaS Platforms",
desc: "Subscription based scalable SaaS products.",
color: "from-orange-500 to-amber-600",
},
{
icon: <ShoppingCart size={32} />,
title: "E-Commerce",
desc: "Online stores, payments and inventory systems.",
color: "from-green-500 to-emerald-600",
},
{
icon: <Cloud size={32} />,
title: "Cloud Services",
desc: "Cloudinary, AWS and deployment solutions.",
color: "from-sky-500 to-cyan-600",
},
{
icon: <Smartphone size={32} />,
title: "Mobile Apps",
desc: "Android & iOS applications.",
color: "from-pink-500 to-rose-600",
},
{
icon: <PenTool size={32} />,
title: "UI/UX Design",
desc: "Modern and conversion focused designs.",
color: "from-fuchsia-500 to-purple-600",
},
];

return (
<> <Navbar />

{/* HERO */}

{/* HERO */}

<section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 pt-40 pb-32">

{/* Background Glow */}

  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px]" />

  <div className="absolute right-0 top-20 w-[450px] h-[450px] bg-green-100 rounded-full blur-[140px]" />

{/* Watermark */}

  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

<motion.h1
  animate={{
    x: ["0%", "-5%", "0%"],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    text-[120px]
    md:text-[220px]
    lg:text-[320px]
    font-black
    tracking-[20px]
    text-[#0D428E]
    opacity-[0.04]
    blur-[3px]
    whitespace-nowrap
  "
>
  PEXSEN
</motion.h1>


  </div>

  <div className="relative max-w-7xl mx-auto px-6">


<div className="grid lg:grid-cols-2 gap-20 items-center">

  {/* LEFT CONTENT */}
  <div>

    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        inline-flex
        rounded-full
        bg-blue-50
        border
        border-blue-100
        px-5
        py-2
        text-sm
        font-medium
        text-[#0D428E]
      "
    >
      Professional Services
    </motion.span>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900"
    >
      Digital Solutions
      <br />

      That Drive Real

      <span className="block text-[#0D428E]">
        Growth
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-8 max-w-xl text-lg leading-8 text-slate-600"
    >
      We help startups and enterprises build AI-powered
      applications, SaaS platforms, cloud solutions,
      mobile apps and scalable digital products.
    </motion.p>

    <div className="mt-10 flex gap-4 flex-wrap">

      <button className="px-8 py-4 rounded-xl bg-[#0D428E] text-white font-semibold shadow-xl hover:bg-[#08336F] transition-all">
        Let's Work Together
      </button>

      <button className="px-8 py-4 rounded-xl border border-slate-300 font-semibold hover:border-[#0D428E] hover:text-[#0D428E] transition-all">
        View Portfolio
      </button>

    </div>

  </div>
{/* RIGHT SIDE */}
<div className="relative hidden lg:block h-[420px]">

  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#2563EB]/10 blur-[120px]" />

  {/* Connection Lines */}
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 700 420"
  >
    <path
      d="M350 210 C320 180 280 130 210 95"
      fill="none"
      stroke="#0D428E"
      strokeWidth="2"
      strokeDasharray="8 8"
      opacity="0.35"
    />

    <path
      d="M350 210 C430 180 500 130 550 100"
      fill="none"
      stroke="#16A34A"
      strokeWidth="2"
      strokeDasharray="8 8"
      opacity="0.35"
    />

    <path
      d="M350 210 C270 220 220 230 170 250"
      fill="none"
      stroke="#16A34A"
      strokeWidth="2"
      strokeDasharray="8 8"
      opacity="0.35"
    />

    <path
      d="M350 210 C300 280 260 320 240 360"
      fill="none"
      stroke="#0D428E"
      strokeWidth="2"
      strokeDasharray="8 8"
      opacity="0.35"
    />

    <path
      d="M350 210 C430 280 500 320 540 360"
      fill="none"
      stroke="#F97316"
      strokeWidth="2"
      strokeDasharray="8 8"
      opacity="0.35"
    />
  </svg>

  {/* Center PEXSEN Hub */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    <motion.div
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="relative"
    >
      <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150" />

      <div className="relative w-40 h-40 rounded-full bg-white border border-slate-200 shadow-2xl flex flex-col items-center justify-center">
        <h2 className="text-4xl font-black leading-none">
          <span className="text-[#0D428E]">PEX</span>
          <span className="text-green-600">SEN</span>
        </h2>

        <div className="mt-2 w-14 h-[2px] bg-gradient-to-r from-[#0D428E] to-green-600 rounded-full" />

        <p className="mt-2 text-[10px] tracking-[3px] uppercase text-slate-500">
          DIGITAL AGENCY
        </p>
      </div>
    </motion.div>
  </div>

  {/* Strategy */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="absolute top-8 left-16 w-52 rounded-3xl bg-white/95 border border-blue-100 shadow-xl p-5 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex gap-3">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
        <BarChart3 size={20} className="text-[#0D428E]" />
      </div>

      <div>
        <h4 className="font-bold text-slate-900">Strategy</h4>
        <p className="text-sm text-slate-500">Business Growth</p>
      </div>
    </div>
  </motion.div>

  {/* AI Solutions */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute top-8 right-10 w-52 rounded-3xl bg-white/95 border border-green-100 shadow-xl p-5 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex gap-3">
      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
        <Bot size={20} className="text-green-600" />
      </div>

      <div>
        <h4 className="font-bold">AI Solutions</h4>
        <p className="text-sm text-slate-500">Agents & Automation</p>
      </div>
    </div>
  </motion.div>

  {/* Design */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 4.2, repeat: Infinity }}
    className="absolute left-2 top-[190px] w-52 rounded-3xl bg-white/95 border border-green-100 shadow-xl p-5 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex gap-3">
      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
        <PenTool size={18} className="text-green-600" />
      </div>

      <div>
        <h4 className="font-bold">Design</h4>
        <p className="text-sm text-slate-500">UI / UX Systems</p>
      </div>
    </div>
  </motion.div>

  {/* Development */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4.5, repeat: Infinity }}
    className="absolute bottom-2 left-24 w-56 rounded-3xl bg-white/95 border border-blue-100 shadow-xl p-5 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex gap-3">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
        <Code2 size={18} className="text-[#0D428E]" />
      </div>

      <div>
        <h4 className="font-bold">Development</h4>
        <p className="text-sm text-slate-500">MERN & Full Stack</p>
      </div>
    </div>
  </motion.div>

  {/* Marketing */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 4.3, repeat: Infinity }}
    className="absolute bottom-2 right-8 w-52 rounded-3xl bg-white/95 border border-orange-100 shadow-xl p-5 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex gap-3">
      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
        <Megaphone size={18} className="text-orange-500" />
      </div>

      <div>
        <h4 className="font-bold">Marketing</h4>
        <p className="text-sm text-slate-500">Digital Reach</p>
      </div>
    </div>
  </motion.div>

</div>
</div>

  </div>

</section>


 {/* STATS */}

<section className="relative pb-28 -mt-10">

  <div className="max-w-7xl mx-auto px-6">

```
<div className="grid md:grid-cols-4 gap-6">

  {[
    {
      value: "150+",
      label: "Projects Delivered",
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "80+",
      label: "Happy Clients",
      color: "from-green-500 to-emerald-500",
    },
    {
      value: "99%",
      label: "Success Rate",
      color: "from-violet-500 to-purple-500",
    },
    {
      value: "24/7",
      label: "Premium Support",
      color: "from-orange-500 to-amber-500",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/80
        backdrop-blur-xl
        p-8
        shadow-lg
      "
    >

      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
      />

      <div className="relative z-10">

        <h3 className="text-5xl font-bold text-[#0D428E] group-hover:text-white transition-all">
          {item.value}
        </h3>

        <p className="mt-3 text-slate-500 group-hover:text-white/90 transition-all">
          {item.label}
        </p>

      </div>

    </motion.div>
  ))}

</div>
```

  </div>

</section>


  {/* SERVICES GRID */}
 
<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#0D428E] text-sm font-semibold">
        Our Expertise
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        What We Offer
      </h2>

      <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
        Digital services designed to help businesses scale faster.
      </p>
    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">

      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className="group relative bg-white rounded-[28px] border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300"
        >

          {/* Top Accent */}
          <div
            className={`absolute top-0 left-0 h-1 w-full rounded-t-[28px] bg-gradient-to-r ${service.color}`}
          />

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0D428E] group-hover:scale-110 transition-all duration-300">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="mt-6 text-xl font-bold text-slate-900">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-slate-600 leading-relaxed">
            {service.desc}
          </p>

          {/* Bottom */}
          <div className="mt-8 flex items-center justify-between">

            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0D428E]" />
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="w-2 h-2 rounded-full bg-orange-400" />
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0D428E] transition-all duration-300">
              <ArrowRight
                size={18}
                className="text-slate-600 group-hover:text-white"
              />
            </div>

          </div>

        </motion.div>
      ))}

    </div>
  </div>
</section>

  {/* WHY CHOOSE US */}
 
<section className="relative py-28 bg-white overflow-hidden">

  {/* Background Effects */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-100/40 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-[#0D428E] font-semibold text-sm">
        Why Businesses Trust Us
      </span>

      <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-slate-900">
        Why Choose PEXSEN
      </h2>

      <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
        Strategic thinking, modern technology and reliable execution for every project.
      </p>

    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

      {[
        {
          icon: <Rocket size={28} />,
          title: "Fast Delivery",
          desc: "Efficient workflows and agile execution."
        },
        {
          icon: <Users size={28} />,
          title: "Dedicated Team",
          desc: "Experienced specialists focused on results."
        },
        {
          icon: <ShieldCheck size={28} />,
          title: "Quality Assurance",
          desc: "High standards across every phase."
        },
        {
          icon: <CheckCircle2 size={28} />,
          title: "Business Solutions",
          desc: "Technology aligned with business goals."
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          animate={{
            y: [0, -8, 0],
          }}
          className="group relative"
        >

          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <div className="relative h-full bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-500">

            {/* Number */}
            <div className="absolute top-6 right-6 text-5xl font-black text-slate-100">
              0{index + 1}
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center text-[#0D428E] group-hover:scale-110 transition-all duration-300">
              {item.icon}
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-500 leading-relaxed">
              {item.desc}
            </p>

            {/* Progress Line */}
            <div className="mt-8">
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.2,
                  }}
                  className="h-full bg-gradient-to-r from-[#0D428E] to-green-500 rounded-full"
                />
              </div>
            </div>

          </div>

        </motion.div>

      ))}

    </div>

    {/* Bottom Trust Bar */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-16 bg-slate-50 border border-slate-200 rounded-[32px] p-8"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            Delivering Results Through Innovation
          </h3>

          <p className="mt-2 text-slate-500">
            We combine strategy, design and development to build scalable digital products.
          </p>
        </div>

        <div className="flex items-center gap-8">

          <div>
            <div className="text-3xl font-bold text-[#0D428E]">
              100+
            </div>
            <div className="text-sm text-slate-500">
              Projects
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-green-600">
              98%
            </div>
            <div className="text-sm text-slate-500">
              Satisfaction
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-orange-500">
              24/7
            </div>
            <div className="text-sm text-slate-500">
              Support
            </div>
          </div>

        </div>

      </div>
    </motion.div>

  </div>

</section>


  {/* CTA */}

<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[40px] bg-[#0D428E] px-10 py-14 lg:px-20 lg:py-16"
    >

      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="max-w-3xl">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-medium">
            Digital Strategy • Design • Development
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to build your next digital product?
          </h2>

          <p className="mt-4 text-lg text-blue-100 leading-relaxed">
            We help businesses transform ideas into scalable digital experiences through strategy, design, AI and development.
          </p>

        </div>

        <div className="flex flex-col sm:flex-row gap-4">

          <button className="group px-7 py-4 bg-white text-[#0D428E] rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300">
            Start a Project

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>

          <button className="px-7 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">
            Book a Consultation
          </button>

        </div>

      </div>

    </motion.div>

  </div>

</section>

{/* CLIENT LOGOS */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium">
        Digital Expertise
      </span>

      <h2 className="mt-5 text-5xl font-bold text-slate-900">
        Everything Your Brand Needs
      </h2>

      <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
        Design, development, AI and marketing solutions under one roof.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-7">

      {[
        {
          icon: <Code2 size={24} />,
          title: "Web Development",
        },
        {
          icon: <Smartphone size={24} />,
          title: "Mobile Apps",
        },
        {
          icon: <Bot size={24} />,
          title: "AI Solutions",
        },
        {
          icon: <Palette size={24} />,
          title: "UI / UX Design",
        },
        {
          icon: <Video size={24} />,
          title: "Video Editing",
        },
        {
          icon: <Megaphone size={24} />,
          title: "Digital Marketing",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
          }}
          whileHover={{ y: -8 }}
          className="group bg-white border border-slate-200 rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-300"
        >

          {/* Visual Area */}

          <div className="h-44 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100 relative overflow-hidden flex items-center justify-center">

  {/* Web Development */}
  {index === 0 && (
    <div className="w-[85%] h-32 rounded-2xl bg-white border border-slate-200 shadow-sm p-3">

      <div className="flex gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
      </div>

      <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-3/4 mb-3" />

      <div className="grid grid-cols-2 gap-2">
        <div className="h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100" />
        <div className="h-12 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100" />
      </div>

    </div>
  )}

  {/* Mobile Apps */}
  {index === 1 && (
    <div className="w-24 h-40 rounded-[28px] bg-white border-[6px] border-slate-200 shadow-lg overflow-hidden">

      <div className="h-6 bg-gradient-to-r from-blue-500 to-cyan-500" />

      <div className="p-3">
        <div className="h-14 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100" />
        <div className="mt-2 h-3 bg-slate-200 rounded-full" />
        <div className="mt-2 h-3 bg-slate-200 rounded-full w-4/5" />
        <div className="mt-2 h-8 rounded-lg bg-gradient-to-r from-violet-100 to-purple-100" />
      </div>

    </div>
  )}

  {/* AI Solutions */}
  {index === 2 && (
    <div className="relative w-36 h-36">

      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500"
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-green-400" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-400" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-pink-400" />

      <svg className="absolute inset-0 w-full h-full">
        <line x1="50%" y1="50%" x2="50%" y2="5%" stroke="#60A5FA" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="50%" y2="95%" stroke="#34D399" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="5%" y2="50%" stroke="#FB923C" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="95%" y2="50%" stroke="#F472B6" strokeWidth="2" />
      </svg>

    </div>
  )}

  {/* UI UX */}
  {index === 3 && (
    <div className="w-[85%] bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">

      <div className="h-14 rounded-xl bg-gradient-to-r from-pink-100 to-orange-100 mb-3" />

      <div className="grid grid-cols-3 gap-2">
        <div className="h-10 rounded-lg bg-blue-100" />
        <div className="h-10 rounded-lg bg-purple-100" />
        <div className="h-10 rounded-lg bg-green-100" />
      </div>

    </div>
  )}

  {/* Video Editing */}
  {index === 4 && (
    <div className="w-[85%]">

      <div className="h-24 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 flex items-center justify-center">

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
        >
          <Play size={18} className="text-[#0D428E]" />
        </motion.div>

      </div>

      <div className="mt-3 flex gap-1">
        <div className="h-2 flex-1 rounded-full bg-blue-500" />
        <div className="h-2 flex-1 rounded-full bg-violet-500" />
        <div className="h-2 flex-1 rounded-full bg-green-500" />
      </div>

    </div>
  )}

  {/* Marketing */}
  {index === 5 && (
    <div className="flex items-end gap-3 h-24">

      <div className="w-8 h-10 rounded-t-lg bg-blue-300" />
      <div className="w-8 h-16 rounded-t-lg bg-violet-400" />
      <div className="w-8 h-24 rounded-t-lg bg-[#0D428E]" />
      <div className="w-8 h-20 rounded-t-lg bg-green-500" />

    </div>
  )}

</div>

          {/* Content */}

          <div className="p-7">

            <div className="flex items-center justify-between">

              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D428E] flex items-center justify-center">
                {item.icon}
              </div>

              <ArrowRight
                size={18}
                className="text-slate-300 group-hover:text-[#0D428E] transition-all duration-300"
              />

            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-500">
              Professional digital solutions tailored for modern businesses.
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* COUNTERS */}

<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-4 gap-8">

  {[
    ["150+", "Projects Delivered"],
    ["80+", "Happy Clients"],
    ["10+", "Industries Served"],
    ["99%", "Client Satisfaction"],
  ].map((item) => (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg text-center">
      <h3 className="text-5xl font-bold text-[#0D428E]">
        {item[0]}
      </h3>

      <p className="mt-3 text-slate-500">
        {item[1]}
      </p>
    </div>
  ))}

</div>


  </div>
</section>

{/* ROADMAP */}

<section className="relative py-28 bg-white overflow-hidden">

  {/* Background Effects */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-10 w-80 h-80 bg-green-100/20 rounded-full blur-3xl" />

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">

      <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#0D428E] font-semibold text-sm">
        Our Process
      </span>

      <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-slate-900">
        Development Roadmap
      </h2>

      <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
        A structured workflow that transforms ideas into scalable digital products.
      </p>

    </div>

    {/* Timeline */}
    <div className="relative">

      {/* Main Line */}
      <div className="hidden lg:block absolute top-14 left-0 w-full h-[2px] bg-gradient-to-r from-[#0D428E] via-green-500 to-orange-400" />

      <div className="grid lg:grid-cols-5 gap-8">

        {[
          {
            icon: <Search size={28} />,
            title: "Discovery",
            desc: "Understanding goals and requirements.",
          },
          {
            icon: <ClipboardList size={28} />,
            title: "Planning",
            desc: "Creating strategy and roadmap.",
          },
          {
            icon: <PenTool size={28} />,
            title: "Design",
            desc: "Crafting UI/UX experiences.",
          },
          {
            icon: <Code2 size={28} />,
            title: "Development",
            desc: "Building scalable solutions.",
          },
          {
            icon: <Rocket size={28} />,
            title: "Launch",
            desc: "Deploying and optimizing growth.",
          },
        ].map((step, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{ y: -10 }}
            className="relative z-10"
          >

            {/* Step Circle */}
            <div className="relative w-28 h-28 mx-auto">

              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0D428E] to-blue-500 shadow-xl" />

              <div className="absolute inset-[6px] rounded-full bg-white flex items-center justify-center">

                <div className="text-[#0D428E]">
                  {step.icon}
                </div>

              </div>

              {/* Step Number */}
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 text-white text-sm font-bold flex items-center justify-center">
                {index + 1}
              </div>

            </div>

            {/* Card */}
            <div className="mt-8 bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm hover:shadow-xl transition-all duration-300">

              <h3 className="font-bold text-xl text-slate-900 text-center">
                {step.title}
              </h3>

              <p className="mt-3 text-center text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Progress Bar */}
              <div className="mt-6 h-1.5 bg-slate-100 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.2,
                  }}
                  className="h-full bg-gradient-to-r from-[#0D428E] to-green-500"
                />

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

    {/* Bottom Summary Card */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-20 rounded-[32px] border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-8 lg:p-10"
    >

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            Transparent Process. Predictable Results.
          </h3>

          <p className="mt-2 text-slate-500">
            Every project follows a proven roadmap to ensure quality, speed and scalability.
          </p>
        </div>

        <div className="flex items-center gap-10">

          <div>
            <div className="text-3xl font-bold text-[#0D428E]">
              5
            </div>
            <div className="text-sm text-slate-500">
              Stages
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-green-600">
              100%
            </div>
            <div className="text-sm text-slate-500">
              Transparency
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-orange-500">
              Fast
            </div>
            <div className="text-sm text-slate-500">
              Delivery
            </div>
          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>


  {/* <Footer /> */}
</>


);
}
