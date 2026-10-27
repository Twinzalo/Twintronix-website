import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  Snowflake,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full relative z-[100]">
      {/* Top Bar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 bg-slate-900 border-b border-white/10 text-gray-300 text-sm">
        <div className="flex space-x-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-cyan-400" /> Unit 2 Gorland Court,
            Germiston
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-cyan-400" /> Mon - Sat: 8.00 am -
            6.00 pm
          </div>
        </div>
        <div className="flex space-x-6 items-center">
          <div className="flex items-center gap-2 mr-4">
            <Mail size={16} className="text-cyan-400" />{" "}
            twintronixrefrigeration@gmail.com
          </div>
          <a
            href="#"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <Facebook size={16} />
          </a>
          <a
            href="#"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <Twitter size={16} />
          </a>
          <a
            href="#"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <Instagram size={16} />
          </a>
          <a
            href="#"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="h-[90px] absolute w-full top-[36px] lg:top-[40px] z-[100]">
        {" "}
        {/* Spacer removed, Nav is absolute */}
        <nav
          className={`px-8 py-4 w-full transition-all duration-300 z-[100] ${isScrolled ? "fixed top-0 left-0 bg-white shadow-md animate-in slide-in-from-top-10" : "absolute top-0 left-0 bg-transparent"}`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/logo.svg" 
                  alt="Twintronix Refrigeration" 
                  className="w-48 sm:w-56 md:w-64 h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className={`hidden lg:flex items-center space-x-8 font-semibold ${isScrolled ? "text-slate-700" : "text-white"}`}>
              <Link
                to="/"
                className={`transition-colors duration-300 ${isActive("/") ? "text-blue-500" : "hover:text-cyan-400"}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors duration-300 ${isActive("/about") ? "text-blue-500" : "hover:text-cyan-400"}`}
              >
                About Us
              </Link>

              <Link
                to="/services"
                className={`transition-colors duration-300 ${isActive("/services") ? "text-blue-500" : "hover:text-cyan-400"}`}
              >
                Services
              </Link>

              <Link
                to="/faq"
                className={`transition-colors duration-300 ${isActive("/faq") ? "text-blue-500" : "hover:text-cyan-400"}`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={`transition-colors duration-300 ${isActive("/contact") ? "text-blue-500" : "hover:text-cyan-400"}`}
              >
                Contact
              </Link>
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 md:gap-6">
              <a 
                href="tel:+27645395831" 
                className="hidden md:flex items-center gap-4 border-l border-white/20 pl-6 group"
              >
                <div className="bg-cyan-500/20 p-3 rounded-full text-cyan-400 transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${isScrolled ? "text-gray-500" : "text-gray-300"}`}>
                    Have any questions?
                  </p>
                  <p className={`text-lg font-black ${isScrolled ? "text-slate-900" : "text-white"}`}>
                    +27 64 539 5831
                  </p>
                </div>
              </a>

              <Link
                to="/contact"
                className="hidden lg:block bg-blue-600 text-white px-7 py-3 rounded font-bold hover:bg-slate-900 transition-colors duration-300 shadow-lg shadow-blue-600/20"
              >
                Get A Quote
              </Link>

              {/* Mobile Click-to-Call Icon */}
              <a 
                href="tel:+27645395831" 
                className={`flex md:hidden items-center justify-center p-2.5 rounded-full ${isScrolled ? "bg-blue-100/50 text-blue-600" : "bg-white/10 text-cyan-400"}`}
                aria-label="Call us"
              >
                <Phone size={22} />
              </a>

              <button
                className={`lg:hidden ${isScrolled ? "text-slate-900" : "text-white"}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t flex flex-col py-4 px-8 space-y-4"
            >
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`font-semibold ${isActive("/") ? "text-blue-600" : "text-slate-700"}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`font-semibold ${isActive("/about") ? "text-blue-600" : "text-slate-700"}`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className={`font-semibold ${isActive("/services") ? "text-blue-600" : "text-slate-700"}`}
              >
                Services
              </Link>
              <Link
                to="/faq"
                onClick={() => setIsOpen(false)}
                className={`font-semibold ${isActive("/faq") ? "text-blue-600" : "text-slate-700"}`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`font-semibold ${isActive("/contact") ? "text-blue-600" : "text-slate-700"}`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white text-center px-6 py-3 rounded font-bold hover:bg-slate-900 transition-colors"
              >
                Get A Quote
              </Link>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
}
