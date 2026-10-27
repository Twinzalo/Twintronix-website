import { Settings, Wrench, Fan, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Fan,
    title: "Air Conditioning",
    desc: "Expert AC repair, maintenance, and fresh installations for your home or business.",
    color: "bg-blue-600",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    desc: "Rapid diagnostics and maintenance to all refrigeration and air conditioning units.",
    color: "bg-cyan-600",
  },
  {
    icon: Settings,
    title: "Freezer & Coldrooms",
    desc: "Commercial refrigeration setups, under bars, bottle coolers, and upright cabinets.",
    color: "bg-slate-800",
  },
];

export default function Features() {
  return (
    <div className="relative z-20 -mt-24 max-w-7xl mx-auto px-8 w-full">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`${feat.color} text-white p-10 rounded-lg shadow-xl relative overflow-hidden group`}
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <feat.icon size={120} />
            </div>
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm relative z-10">
              <feat.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 relative z-10">
              {feat.title}
            </h3>
            <p className="text-white/80 mb-6 relative z-10 font-medium">
              {feat.desc}
            </p>
            <Link
              to="/services"
              className="font-bold flex items-center gap-2 hover:text-white relative z-10 transition-transform duration-300 group-hover:translate-x-2"
            >
              Read More <ArrowRight size={16} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
