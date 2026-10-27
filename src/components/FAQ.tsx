import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What types of refrigeration systems do you service?",
    answer:
      "We specialize in a wide variety of systems including Freezer Rooms & Coldrooms, Ice Machines, Under Bars, Bottle Coolers, Island Freezers, and Upright Cabinets.",
  },
  {
    question: "Do you offer emergency repair services?",
    answer:
      "Yes, we provide 24/7 emergency repair services for all commercial refrigeration and HVAC systems to ensure your business operations remain uninterrupted.",
  },
  {
    question: "Where are you located and what areas do you serve?",
    answer:
      "We are located at Unit 2 Gorland Court, 64 Rietfontein Road, Primrose, Germiston, 1401. We serve Germiston and the surrounding metropolitan areas.",
  },
  {
    question: "Do you provide preventative maintenance plans?",
    answer:
      "Absolutely. We offer comprehensive maintenance plans designed to keep your refrigeration and air conditioning units running efficiently, which helps prevent costly breakdowns.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-cyan-500"></div>
            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">
              Common Questions
            </span>
            <div className="w-12 h-[2px] bg-cyan-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border rounded-lg overflow-hidden transition-colors duration-300 ${openIndex === idx ? "border-blue-600 shadow-md" : "border-gray-200"}`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${openIndex === idx ? "bg-blue-50" : "bg-white hover:bg-gray-50"}`}
              >
                <span
                  className={`font-bold text-lg ${openIndex === idx ? "text-blue-600" : "text-slate-900"}`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors duration-300 ${openIndex === idx ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"}`}
                >
                  {openIndex === idx ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t border-blue-100 bg-blue-50/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
