import { ShieldCheck, Tags, Wrench, Clock } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Wrench,
    title: "Expert Technicians",
    desc: "Our team consists of certified professionals ready to handle any refrigeration challenge.",
  },
  {
    icon: Tags,
    title: "Affordable Pricing",
    desc: "We offer transparent and competitive pricing without compromising on quality.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    desc: "100% satisfaction guarantee on all our installations and repair services.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "We are available around the clock for emergency breakdowns and services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-blue-600"></div>
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <div className="w-12 h-[2px] bg-blue-600"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
            Why Partner With <span className="text-blue-600">Twintronix</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We are dedicated to providing the highest quality refrigeration and
            air conditioning services across South Africa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 mb-6 font-black">
                <reason.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
