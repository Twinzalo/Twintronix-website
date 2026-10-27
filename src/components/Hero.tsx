import { motion } from "motion/react";
import { ArrowRight, Settings, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative bg-slate-900 min-h-[600px] flex items-center pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden z-0"
    >
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="HVAC background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-cyan-400"></div>
            <span className="text-cyan-400 font-bold uppercase tracking-wider text-sm">
              Welcome to Twintronix
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Expert{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Cooling & Heating
            </span>{" "}
            Services
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
            Specializing in Freezer Rooms & Coldrooms, Repairs & Maintenance to
            all Refrigeration & Air Conditioning, Ice Machines, Under Bars,
            Bottle Coolers, Island Freezers & Upright Cabinets.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded font-bold hover:bg-slate-800 transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-600/20"
            >
              Our Services <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded font-bold hover:bg-cyan-500 hover:border-cyan-500 hover:text-slate-900 transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-cyan-600/10 rounded-tl-full blur-3xl z-0"></div>
    </div>
  );
}
