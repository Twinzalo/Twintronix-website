import {
  Snowflake,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
            <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/logo.svg" 
                alt="Twintronix Refrigeration" 
                className="w-56 sm:w-64 md:w-[280px] h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>
          <p className="text-gray-400 leading-relaxed mb-6 font-medium">
            Specializing in Freezer Rooms, Coldrooms, Repairs & Maintenance to
            all Refrigeration and Air Conditioning systems.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 text-white transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 text-white transition-all duration-300"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 text-white transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 text-white transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-4 h-4 bg-cyan-500 rounded-sm"></div>
            Quick Links
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="/about"
                className="font-medium text-gray-400 hover:text-cyan-400 hover:translate-x-2 flex items-center gap-2 transition-all duration-300"
              >
                <ArrowRight size={14} className="text-blue-600" /> About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="font-medium text-gray-400 hover:text-cyan-400 hover:translate-x-2 flex items-center gap-2 transition-all duration-300"
              >
                <ArrowRight size={14} className="text-blue-600" /> Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-medium text-gray-400 hover:text-cyan-400 hover:translate-x-2 flex items-center gap-2 transition-all duration-300"
              >
                <ArrowRight size={14} className="text-blue-600" /> Get A Quote
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="font-medium text-gray-400 hover:text-cyan-400 hover:translate-x-2 flex items-center gap-2 transition-all duration-300"
              >
                <ArrowRight size={14} className="text-blue-600" /> Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-medium text-gray-400 hover:text-cyan-400 hover:translate-x-2 flex items-center gap-2 transition-all duration-300"
              >
                <ArrowRight size={14} className="text-blue-600" /> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-4 h-4 bg-cyan-500 rounded-sm"></div>
            Services
          </h3>
          <ul className="space-y-4">
            {[
              "AC Installation",
              "Freezer Rooms",
              "Coldroom Repairs",
              "Ice Machines",
              "Bottle Coolers",
            ].map((service, i) => (
              <li key={i}>
                <Link
                  to="/services"
                  className="font-medium text-gray-400 hover:text-cyan-400 hover:translate-x-2 flex items-center gap-2 transition-all duration-300"
                >
                  <ArrowRight size={14} className="text-blue-600" /> {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-4 h-4 bg-cyan-500 rounded-sm"></div>
            Contact Info
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4 group">
              <div className="text-cyan-400 mt-1 transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Our Location</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  Unit 2 Gorland Court, 64 Rietfontein Road, Primrose,
                  Germiston, 1401
                </p>
              </div>
            </li>
            <li className="flex gap-4 group">
              <div className="text-cyan-400 mt-1 transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Phone Numbers</h4>
                <p className="text-gray-400 text-sm font-medium">
                  +27 64 539 5831
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  +27 74 095 2082
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  +27 78 797 6115
                </p>
              </div>
            </li>
            <li className="flex gap-4 group">
              <div className="text-cyan-400 mt-1 transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email Address</h4>
                <a
                  href="mailto:twintronixrefrigeration@gmail.com"
                  className="text-gray-400 text-sm font-medium hover:text-cyan-400 transition-colors break-all"
                >
                  twintronixrefrigeration@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-gray-500">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} Twintronix Refrigeration. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
