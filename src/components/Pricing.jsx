import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const prices = [
  {
    category: "Men's Services",
    services: [
      { name: "Men's haircut", min: 25, max: 30 },
      { name: "Wash, cut & style", min: 30, max: 35 },
      { name: "Beard trim (add-on)", display: "+$5" },
      { name: "Beard shave (trim & shave)", min: 25, max: 30 },
      { name: "Facial shave", min: 30, max: 35 },
      { name: "Men's hair color", min: 60, max: 70 },
    ],
  },
  {
    category: "Women's Services",
    services: [
      { name: "Women's haircut (long hair)", min: 40, max: 60 },
      { name: "Girls dry haircut", min: 35, max: 35 },
      { name: "Wash, cut & blowout", min: 45, max: 55 },
      { name: "Wash & blowout", min: 45, max: 60 },
      { name: "Curly / flat iron", min: 50, max: 65 },
      { name: "All color services", min: 100, max: 120 },
      { name: "Full head highlight", min: 250, max: 350 },
      { name: "Half head highlight", min: 180, max: 220 },
      { name: "Perm, body & waves", min: 120, max: 200 },
    ],
  },
];

const fontStyle = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = prices[activeTab];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="bg-white border border-[#1e3a5f]/10 rounded-2xl shadow-md p-8 md:p-10 flex flex-col"
    >
      <h3
        className="text-2xl font-normal mb-6 text-[#1e3a5f] text-center"
        style={fontStyle}
      >
        Pricing
      </h3>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-[#1e3a5f]/5 rounded-full p-1">
        {prices.map((category, idx) => (
          <button
            key={category.category}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-light transition-all duration-300 ${
              activeTab === idx
                ? "bg-[#1e3a5f] text-white shadow-sm"
                : "text-[#1e3a5f] hover:bg-[#1e3a5f]/10"
            }`}
            style={fontStyle}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="flex-1 min-h-[400px] md:min-h-[440px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-1.5"
          >
            {active.services.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 px-4 rounded-lg text-[#1e3a5f] hover:bg-[#1e3a5f]/5 transition-colors duration-300"
                style={fontStyle}
              >
                <span className="font-light text-sm flex-1 pr-4">
                  {service.name}
                </span>
                <span className="font-normal text-[#1e3a5f] whitespace-nowrap text-sm">
                  {service.display != null
                    ? service.display
                    : service.min === service.max
                      ? `$${service.min}`
                      : `$${service.min}–$${service.max}`}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <p
        className="text-xs text-[#1e3a5f]/60 mt-4 text-center italic font-light"
        style={fontStyle}
      >
        *Men Services Require Less Time
      </p>
    </motion.div>
  );
};

export default Pricing;
