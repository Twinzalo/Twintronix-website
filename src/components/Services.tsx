// Services.tsx
import {
  ArrowRight,
  CheckCircle2,
  Wind,
  Wrench,
  Snowflake,
  Refrigerator,
  Zap,
  Fan,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "motion/react";

const servicesList = [
  {
    icon: Wind,
    image: "/src/assets/images/ac_installation_1793104493756.jpg",
    title: "AC Installation",
    desc: "Professional installation of modern, energy-efficient air conditioning systems tailored for your space.",
    fullDesc:
      "We provide comprehensive AC installation services for both residential and commercial properties. Our team evaluates your space to recommend the most energy-efficient systems that will keep your property comfortable year-round. We handle everything from ductwork to the final thermostat programming.",
    benefits: [
      "Energy-efficient units",
      "Expert ductwork setup",
      "Full thermostat programming",
      "Certified & Experienced Staff",
    ],
  },
  {
    icon: Wrench,
    image: "/src/assets/images/ac_repair_1793104493945.jpg",
    title: "AC Repairs & Maintenance",
    desc: "Rapid diagnostics and thorough repair to get your cooling systems running perfectly again.",
    fullDesc:
      "Our rapid response team is equipped to diagnose and repair any air conditioning issues quickly. We also offer routine maintenance packages to extend the lifespan of your unit, ensure peak operational efficiency, and prevent costly breakdowns during extreme weather.",
    benefits: [
      "24/7 emergency repairs",
      "Preventive maintenance plans",
      "Extended equipment lifespan",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    icon: Snowflake,
    image: "/src/assets/images/coldroom_storage_1793104493014.jpg",
    title: "Freezer Rooms & Coldrooms",
    desc: "Commercial refrigeration setups, maintenance, and emergency fixes for cold storage.",
    fullDesc:
      "Specializing in the installation and maintenance of heavy-duty commercial Freezer Rooms and Coldrooms. We provide complete solutions for the food and medical sectors, ensuring uncompromising temperature control, reliability, and health compliance.",
    benefits: [
      "Heavy-duty commercial installs",
      "Temperature control compliance",
      "Emergency cold storage repair",
      "High Quality Durable Materials",
    ],
  },
  {
    icon: Refrigerator,
    image: "/src/assets/images/commercial_fridge_1793104494657.jpg",
    title: "Commercial Refrigeration",
    desc: "Ice Machines, Under Bars, Bottle Coolers, Island Freezers & Upright Cabinets.",
    fullDesc:
      "We service and install a wide array of commercial refrigeration units including Ice Machines, Under Bar fridges, Bottle Coolers, Island Freezers and Upright Cabinets. We understand that downtime costs money, so we prioritize fast, durable repairs.",
    benefits: [
      "Fast, durable repairs",
      "Ice machine specialists",
      "Minimize business downtime",
      "Affordable & Transparent Pricing",
    ],
  },
  {
    icon: Zap,
    image: "/src/assets/images/hero_banner_1793104493379.jpg",
    title: "Electrical Works",
    desc: "Integrated electrical solutions for HVAC systems to ensure safe and continuous operation.",
    fullDesc:
      "Our certified electrical contractors ensure your HVAC and refrigeration setups have robust, compliant, and safe power supplies. We handle specialized electrical upgrades and fault finding specifically tailored to heavy cooling equipment.",
    benefits: [
      "Certified electrical contractors",
      "HVAC power upgrades",
      "Code-compliant installations",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    icon: Fan,
    image: "/src/assets/images/ac_installation_1793104493756.jpg",
    title: "Ventilation Solutions",
    desc: "Expert ventilation solutions to improve indoor air quality and maintain consistent airflow.",
    fullDesc:
      "We design and install expert ventilation solutions to improve indoor air quality, remove contaminants, and maintain consistent airflow throughout your commercial or residential property.",
    benefits: [
      "Indoor air quality improvement",
      "Contaminant removal systems",
      "Residential & commercial",
      "Certified & Experienced Staff",
    ],
  },
];

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialViewMode =
    searchParams.get("view") === "details" ? "details" : "grid";

  const [viewMode, setViewMode] = useState<"grid" | "details">(initialViewMode);
  const [selectedServiceIdx, setSelectedServiceIdx] = useState(0);

  // Sync state if url changes
  useEffect(() => {
    const view = searchParams.get("view");
    if (view === "details" || view === "grid") {
      setViewMode(view);
    }
  }, [searchParams]);

  const handleModeChange = (mode: "grid" | "details") => {
    setViewMode(mode);
    setSearchParams({ view: mode });
  };

  const handleReadMore = (idx: number) => {
    setSelectedServiceIdx(idx);
    handleModeChange("details");
    const element = document.getElementById("services");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const selectedService = servicesList[selectedServiceIdx];

  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-20 relative min-h-screen">
      {/* Decorative background image behind "Our Services" heading */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <img
          src="/src/assets/images/coldroom_storage_1793104493014.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50" />
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-2">
        {/* Heading Section with background image behind text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 relative"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-cyan-500"></div>
            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <div className="w-12 h-[2px] bg-cyan-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Premium <span className="text-blue-600">Cooling & Heating</span>{" "}
            Solutions
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto font-medium">
            For total comfort and peace of mind – professional cooling and
            heating solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid or Details */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {servicesList.map((srv, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_40px_rgb(59,130,246,0.12)] transition-all duration-300 group flex flex-col relative"
                >
                  <div className="relative mb-14">
                    {/* Image Container with matching specific rounded borders */}
                     <div className="h-64 w-full rounded-tl-[40px] rounded-tr-[40px] rounded-br-[60px] rounded-bl-[60px] overflow-hidden relative">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-300"></div>
                     </div>
                     
                     {/* Circle icon with white border */}
                     <div className="absolute -bottom-8 left-8 z-20">
                       <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center border-[6px] border-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-cyan-500 text-white">
                         <srv.icon size={36} className="text-white" />
                       </div>
                     </div>
                  </div>

                  <div className="px-8 pb-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-[#0a1128] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {srv.title}
                    </h3>
                    <p className="text-slate-500 mb-8 leading-relaxed flex-1 font-medium">
                      {srv.desc}
                    </p>

                    <button
                      onClick={() => handleReadMore(i)}
                      className="text-blue-600 font-bold hover:text-blue-800 transition-colors inline-flex items-center gap-2 self-start group/btn"
                    >
                      Read More{" "}
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-12"
            >
              {/* Sidebar Menu */}
              <div className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 h-fit">
                <button 
                  onClick={() => handleModeChange("grid")}
                  className="mb-6 text-gray-500 hover:text-blue-600 font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  <ArrowRight size={18} className="rotate-180" /> Back to all services
                </button>
                <h3 className="text-2xl font-black text-slate-900 mb-6 px-4">
                  All Services
                </h3>
                <div className="space-y-2">
                  {servicesList.map((srv, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedServiceIdx(i)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl font-bold transition-all duration-300 ${selectedServiceIdx === i ? "bg-blue-600 text-white shadow-md" : "bg-[#f8faff] text-slate-700 hover:bg-blue-50"}`}
                    >
                      <span className="flex items-center gap-3">
                        <srv.icon
                          size={20}
                          className={`transition-all duration-300 ${
                            selectedServiceIdx === i
                              ? "text-white"
                              : "text-blue-600"
                          }`}
                        />
                        {srv.title}
                      </span>
                      <ArrowRight
                        size={18}
                        className={`transition-transform duration-300 ${selectedServiceIdx === i ? "translate-x-1" : ""}`}
                      />
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-slate-900 rounded-xl text-center text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/30 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-xl mb-2">Need Help?</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Contact us for any heating or cooling emergency.
                    </p>
                    <p className="text-2xl font-black text-cyan-400">
                      +27 64 539 5831
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Details Main Content */}
              <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 to-transparent flex items-end p-8">
                    <div className="flex items-center gap-6 text-white">
                      <div className="relative flex items-center justify-center">
                         <div className="absolute w-[88px] h-[88px] bg-white/20 rounded-full"></div>
                         <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg relative z-10 text-white">
                           <selectedService.icon size={32} className="text-white" />
                         </div>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black">
                        {selectedService.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-[#0a1128] mb-4">
                    Service Overview
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                    {selectedService.fullDesc}
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Service Benefits
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedService.benefits.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100"
                      >
                        <CheckCircle2
                          className="text-cyan-500 shrink-0"
                          size={24}
                        />
                        <span className="font-bold text-slate-800">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-10 border-t border-gray-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-900 transition-colors duration-300 shadow-lg shadow-blue-600/20"
                    >
                      Get A Quote <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA for additional trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 px-6 py-2 text-gray-700">
              <CheckCircle2 size={20} className="text-cyan-500" />
              <span className="font-medium">Certified Experts</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-2 text-gray-700">
              <CheckCircle2 size={20} className="text-cyan-500" />
              <span className="font-medium">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-2 text-gray-700">
              <CheckCircle2 size={20} className="text-cyan-500" />
              <span className="font-medium">Best Price Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
