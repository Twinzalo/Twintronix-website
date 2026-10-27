import { CheckCircle2, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-lg overflow-hidden border-8 border-white shadow-xl z-10">
            <img
              src="/images/about-1.jpg"
              alt="Technician working on AC"
              className="w-full object-cover h-[500px]"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 border-8 border-white rounded-lg overflow-hidden shadow-xl z-20 hidden md:block">
            <img
              src="/images/about-2.jpg"
              alt="Refrigeration details"
              className="w-full object-cover h-[300px]"
            />
          </div>
          {/* Experience Badge */}
          <div className="absolute top-10 -left-10 bg-blue-600 text-white p-6 rounded-lg shadow-lg z-20 hidden md:block group cursor-default">
            <div className="text-5xl font-black mb-1 group-hover:scale-110 transition-transform duration-300">
              25<span className="text-2xl text-cyan-400">+</span>
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider">
              Years of
              <br />
              Experience
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:pl-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-cyan-500"></div>
            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">
              About Twintronix
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            We Are The Leading <span className="text-blue-600">HVAC</span> &
            Refrigeration Experts
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Founded on the principles of quality workmanship and exceptional
            customer service, Twintronix Refrigeration has grown to become the
            most trusted name in heating, ventilation, air conditioning, and
            commercial cooling systems. We specialize in Freezer Rooms &
            Coldrooms, and Repairs & Maintenance to all Refrigeration units.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Certified Technicians",
              "Fair & Transparent Pricing",
              "24/7 Emergency Services",
              "100% Satisfaction Guarantee",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-cyan-500 shrink-0" size={24} />
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 border-t border-gray-200">
            <Link
              to="/services"
              className="px-8 py-4 bg-blue-600 text-white rounded font-bold hover:bg-slate-900 transition-colors duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-blue-600/20"
            >
              Discover More
            </Link>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                <PhoneCall size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Any Urgent Query?
                </p>
                <p className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  +27 64 539 5831
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
