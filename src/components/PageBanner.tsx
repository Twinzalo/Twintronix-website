import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; path: string }[];
  image?: string;
}

export default function PageBanner({ title, breadcrumbs, image = "/src/assets/images/coldroom_storage_1793104493014.jpg" }: PageBannerProps) {
  return (
    <div className="bg-slate-900 text-white min-h-[400px] flex items-center pt-32 pb-20 relative overflow-hidden z-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="w-full lg:w-[65%] h-full relative">
          <img
            src={image}
            alt="Banner background"
            className="w-full h-full object-cover object-[75%_15%]"
            referrerPolicy="no-referrer"
          />
          {/* Blend image into the dark left background on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 from-0% via-slate-900/40 via-30% to-transparent hidden lg:block"></div>
          {/* Full dark overlay on mobile for text readability */}
          <div className="absolute inset-0 bg-slate-900/80 lg:hidden"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl lg:col-start-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-sm md:text-base font-bold bg-white/10 w-fit px-6 py-3 rounded-full backdrop-blur-md">
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {idx > 0 && (
                  <ChevronRight size={16} className="text-cyan-400" />
                )}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-cyan-400">{crumb.label}</span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-cyan-600/10 rounded-tl-full blur-3xl z-0"></div>
    </div>
  );
}
