import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    title: "Expert Technicians",
    desc: "Our team consists of certified professionals ready to handle any refrigeration challenge.",
  },
  {
    title: "Affordable Pricing",
    desc: "We offer transparent and competitive pricing without compromising on quality.",
  },
  {
    title: "Quality Guarantee",
    desc: "100% satisfaction guarantee on all our installations and repair services.",
  },
  {
    title: "24/7 Support",
    desc: "We are available around the clock for emergency breakdowns and services.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/benefit-1.jpg"
          alt="HVAC background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-cyan-400"></div>
            <span className="text-cyan-400 font-bold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            The Benefits of Choosing{" "}
            <span className="text-cyan-400">Twintronix</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We are dedicated to providing the highest quality refrigeration and
            air conditioning services. Our commitment to excellence ensures that
            your systems operate at peak efficiency.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-cyan-400 shrink-0">
                  <CheckCircle size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 border-4 border-slate-800">
            <img
              src="/images/ac-repair.jpg"
              alt="Technicians at work"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
