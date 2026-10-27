import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "James Anderson",
    role: "Homeowner",
    text: "The team at Twintronix was absolutely fantastic. Our coldroom needed urgent repairs, and they had it fixed within hours.",
    rating: 5,
    img: "/images/testimonial-1.jpg",
  },
  {
    name: "Sarah Jenkins",
    role: "Restaurant Manager",
    text: "Reliable commercial refrigeration service is critical for our business. Twintronix provides fast, effective maintenance that has saved us countless times.",
    rating: 5,
    img: "/images/testimonial-2.jpg",
  },
  {
    name: "Michael Peterson",
    role: "Property Developer",
    text: "I've used them for multiple HVAC installations across different properties. Their pricing is transparent and the work quality is unmatched in the city.",
    rating: 5,
    img: "/images/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-cyan-500"></div>
            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">
              Testimonials
            </span>
            <div className="w-12 h-[2px] bg-cyan-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            What Our <span className="text-blue-600">Clients</span> Say
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-20 pointer-events-none px-4 md:-mx-12">
            <button
              onClick={prevTestimonial}
              className="pointer-events-auto bg-white p-3 rounded-full shadow-lg text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 -ml-4 md:ml-0"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="pointer-events-auto bg-white p-3 rounded-full shadow-lg text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 -mr-4 md:mr-0"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl relative border border-gray-100 min-h-[300px] flex items-center justify-center">
            <div className="text-cyan-100 absolute top-8 left-8 opacity-50">
              <Quote size={80} className="fill-current" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full text-center"
              >
                <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                  {[...Array(testimonials[currentIndex].rating)].map(
                    (_, idx) => (
                      <Star key={idx} size={20} className="fill-current" />
                    ),
                  )}
                </div>

                <p className="text-xl md:text-2xl text-gray-700 italic mb-8 font-medium leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex flex-col items-center gap-3">
                  <img
                    src={testimonials[currentIndex].img}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-cyan-100"
                  />
                  <div>
                    <h4 className="font-black text-lg text-slate-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-cyan-600 font-bold">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
