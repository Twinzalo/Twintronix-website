import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; path: string }[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <div className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/coldroom.jpg"
          alt="Banner background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-bold bg-white/10 w-fit mx-auto px-6 py-3 rounded-full backdrop-blur-md">
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
    </div>
  );
}
