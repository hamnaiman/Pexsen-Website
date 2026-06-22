import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="relative pt-36 pb-24 overflow-hidden bg-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,66,142,0.08),transparent_35%)]" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D428E]/5 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm font-medium text-slate-600">
              Contact PEXSEN
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              Let's Build
              <span className="block text-[#0D428E]">
                Something Great
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-500">
              Have a project, startup idea or business challenge?
              Let's discuss how PEXSEN can help you grow faster.
            </p>

          </div>

        </div>

      </section>

      {/* Contact Info */}

      <section className="-mt-10 relative z-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: <Mail size={24} />,
                title: "Email",
                value: "hello@pexsen.com",
              },
              {
                icon: <Phone size={24} />,
                title: "Phone",
                value: "+92 XXX XXXXXXX",
              },
              {
                icon: <MapPin size={24} />,
                title: "Location",
                value: "Pakistan",
              },
              {
                icon: <Clock size={24} />,
                title: "Response Time",
                value: "Within 24 Hours",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0D428E] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-bold text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-500">
                  {item.value}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Form Section */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-5xl font-bold text-slate-900">
                Start Your Next Project
              </h2>

              <p className="mt-6 text-lg text-slate-500">
                Whether you need a website, mobile app,
                AI automation, branding or digital marketing,
                our team is ready to help.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Web Development",
                  "Mobile Applications",
                  "AI Solutions",
                  "UI / UX Design",
                  "Video Production",
                  "Digital Marketing",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500" />

                    <span className="text-slate-700">
                      {service}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>

            {/* Form */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm"
            >

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0D428E]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0D428E]"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="mt-5 w-full h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0D428E]"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="mt-5 w-full p-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0D428E]"
              />

              <button className="mt-6 w-full h-14 rounded-2xl bg-[#0D428E] text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">

                Send Message

                <Send size={18} />

              </button>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-[40px] bg-[#081B3A] p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Ready To Work With PEXSEN?
            </h2>

            <p className="mt-4 text-slate-300">
              Let's transform your ideas into impactful digital experiences.
            </p>

            <button className="mt-8 px-8 py-4 rounded-2xl bg-white text-[#081B3A] font-semibold inline-flex items-center gap-2">

              Book A Consultation

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}