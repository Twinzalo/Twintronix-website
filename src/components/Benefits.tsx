import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    title: "Lower Energy Bills",
    desc: "Efficiently running systems consume less power, directly reducing your monthly utility costs and overheads.",
  },
  {
    title: "Extended Equipment Life",
    desc: "Regular maintenance prevents premature wear and tear, adding years to the lifespan of your expensive assets.",
  },
  {
    title: "Fewer Breakdowns",
    desc: "Minimize unexpected and costly downtime with preventative care that catches critical issues early.",
  },
  {
    title: "Optimal Cooling",
    desc: "Ensure your commercial perishable goods stay perfectly chilled and your spaces remain comfortable year-round.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_banner_1793104493379.jpg"
          alt="HVAC background"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
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
              Client Advantages
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            The Benefits of Professional{" "}
            <span className="text-cyan-400">Maintenance</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Protect your investments and optimize your environment. Routine servicing and professional installation from Twintronix ensures maximum efficiency and longevity for all your heating and cooling systems.
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
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 border-4 border-slate-800"
          >
            <img
              src="/images/benefit-1.jpg"
              alt="Twintronix Benefits"
              className="w-full h-auto object-cover max-h-[600px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
