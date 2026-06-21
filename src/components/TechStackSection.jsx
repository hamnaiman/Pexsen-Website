import { motion } from "framer-motion";
import {
Bot,
Brain,
Code2,
Database,
Cloud,
ShoppingCart,
CreditCard,
Smartphone,
Palette,
Globe,
Server,
Workflow,
Layers3,
PenTool,
Rocket,
Cpu,
} from "lucide-react";

export default function TechStackSection() {
const row1 = [
{ icon: <Bot size={18} />, name: "AI Development" },
{ icon: <Brain size={18} />, name: "Machine Learning" },
{ icon: <Cpu size={18} />, name: "Deep Learning" },
{ icon: <Code2 size={18} />, name: "MERN Stack" },
{ icon: <Database size={18} />, name: "MongoDB" },
{ icon: <Cloud size={18} />, name: "Cloud Services" },
{ icon: <ShoppingCart size={18} />, name: "E-Commerce" },
{ icon: <CreditCard size={18} />, name: "Payment Integration" },
{ icon: <Smartphone size={18} />, name: "Mobile Apps" },
{ icon: <Rocket size={18} />, name: "Startup Solutions" },
];

const row2 = [
{ icon: <PenTool size={18} />, name: "UI/UX Design" },
{ icon: <Palette size={18} />, name: "Graphic Designing" },
{ icon: <Globe size={18} />, name: "SEO Optimization" },
{ icon: <Server size={18} />, name: "API Development" },
{ icon: <Workflow size={18} />, name: "Automation" },
{ icon: <Layers3 size={18} />, name: "SaaS Platforms" },
{ icon: <Cloud size={18} />, name: "Cloudinary" },
{ icon: <Code2 size={18} />, name: "Full Stack Development" },
{ icon: <Bot size={18} />, name: "AI Chatbots" },
{ icon: <Database size={18} />, name: "Database Design" },
];

return ( <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50">

```
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px]" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-sm font-medium text-[#0D428E]">
        Our Expertise
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
        Technologies We Work With
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
        We build powerful AI solutions, modern web applications,
        SaaS platforms, cloud systems and digital products using
        cutting-edge technologies.
      </p>
    </div>

    {/* Top Row */}
    <div className="overflow-hidden mb-8">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-5 w-max"
      >
        {[...row1, ...row1].map((item, index) => (
          <div
            key={index}
            className="
              flex items-center gap-3
              bg-white
              px-6 py-4
              rounded-2xl
              border border-slate-200
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <span className="text-[#0D428E]">
              {item.icon}
            </span>

            <span className="font-semibold text-slate-700 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Bottom Row */}
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-5 w-max"
      >
        {[...row2, ...row2].map((item, index) => (
          <div
            key={index}
            className="
              flex items-center gap-3
              bg-white
              px-6 py-4
              rounded-2xl
              border border-slate-200
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <span className="text-green-600">
              {item.icon}
            </span>

            <span className="font-semibold text-slate-700 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>

  </div>
</section>


);
}
