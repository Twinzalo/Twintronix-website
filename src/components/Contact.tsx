import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Your specific Formspree endpoint
      const response = await fetch("https://formspree.io/f/xzeeavee", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-[2px] bg-cyan-500"></div>
              <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">
                Contact Us
              </span>
              <div className="w-12 h-[2px] bg-cyan-500"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-5 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 bg-slate-900 text-white p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">Contact Detail</h3>
              <p className="text-gray-400 mb-10 font-medium">
                Reach out to us for any inquiries regarding refrigeration or air
                conditioning services.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Our Location</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">
                      Unit 2 Gorland Court, 64 Rietfontein Rd,
                      <br />
                      Primrose, Germiston, 1401
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Make A Call</h4>
                    <p className="text-gray-400 font-medium">+27 64 539 5831</p>
                    <p className="text-gray-400 font-medium">+27 74 095 2082</p>
                    <p className="text-gray-400 font-medium">+27 78 797 6115</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Send An Email</h4>
                    <a
                      href="mailto:twintronixrefrigeration@gmail.com"
                      className="text-gray-400 font-medium hover:text-cyan-400 transition-colors break-all"
                    >
                      twintronixrefrigeration@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3 p-10 md:p-14 relative">
            <AnimatePresence>
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-0 left-0 w-full bg-green-500 text-white px-8 py-4 flex items-center gap-3 font-medium shadow-md z-20"
                >
                  <CheckCircle2 size={24} />
                  Thank you! Your message has been successfully sent. We'll be in touch soon.
                </motion.div>
              )}
              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-0 left-0 w-full bg-red-500 text-white px-8 py-4 flex items-center gap-3 font-medium shadow-md z-20"
                >
                  Oops! Something went wrong. Please try submitting again.
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-3xl font-black text-slate-900 mb-6 mt-4">
              Send Us A Message
            </h3>
            <p className="text-gray-600 mb-8 font-medium">
              Feel free to drop us a message anytime. We will get back to you as
              soon as possible!
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Formspree Hidden Fields */}
              <input type="hidden" name="_replyto" value="email" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    className="w-full bg-gray-50 border border-gray-200 text-slate-900 placeholder-gray-500 px-5 py-4 rounded-lg outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    className="w-full bg-gray-50 border border-gray-200 text-slate-900 placeholder-gray-500 px-5 py-4 rounded-lg outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full bg-gray-50 border border-gray-200 text-slate-900 placeholder-gray-500 px-5 py-4 rounded-lg outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full bg-gray-50 border border-gray-200 text-slate-900 placeholder-gray-500 px-5 py-4 rounded-lg outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm appearance-none"
                  >
                    <option value="" disabled className="text-gray-500">
                      Select Service
                    </option>
                    <option value="coldroom" className="text-slate-900">
                      Coldroom Setup/Repair
                    </option>
                    <option value="ac" className="text-slate-900">
                      AC Installation/Repair
                    </option>
                    <option value="maintenance" className="text-slate-900">
                      Routine Maintenance
                    </option>
                    <option value="other" className="text-slate-900">
                      Other
                    </option>
                  </select>
                </div>
              </div>
              
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Write Message *"
                  className="w-full bg-gray-50 border border-gray-200 text-slate-900 placeholder-gray-500 px-5 py-4 rounded-lg outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-slate-900 transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-600/20 disabled:opacity-75 disabled:cursor-wait"
              >
                {formStatus === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}