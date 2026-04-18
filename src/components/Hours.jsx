import { motion } from "framer-motion";
import Pricing from "./Pricing";

const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "9 AM–6 PM" },
  { day: "Wednesday", hours: "9 AM–6 PM" },
  { day: "Thursday", hours: "9 AM–6 PM" },
  { day: "Friday", hours: "9 AM–6 PM" },
  { day: "Saturday", hours: "8:30 AM–5 PM" },
  { day: "Sunday", hours: "Closed" },
];

const Hours = () => {
  const getCurrentDay = () => {
    return new Date().toLocaleDateString("en-US", { weekday: "long" });
  };

  const currentDay = getCurrentDay();

  return (
    <section id="hours" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-normal text-center mb-4 text-[#1e3a5f]"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          }}
        >
          Business Hours & Pricing
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-24 h-0.5 bg-[#1e3a5f] mb-16"
        ></motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white border border-[#1e3a5f]/10 rounded-2xl shadow-md p-10"
          >
            <h3
              className="text-2xl font-normal mb-6 text-[#1e3a5f] text-center"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Business Hours
            </h3>
            <div className="space-y-3">
              {hours.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`flex justify-between items-center py-4 px-4 rounded-lg transition-all duration-300 ${
                    item.day === currentDay
                      ? "bg-[#1e3a5f] text-white font-normal"
                      : "text-[#1e3a5f] hover:bg-[#1e3a5f]/5"
                  }`}
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  }}
                >
                  <span className="font-light">{item.day}</span>
                  <span
                    className={
                      item.day === currentDay ? "font-normal" : "font-light"
                    }
                  >
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </div>
            <p
              className="text-sm text-[#1e3a5f]/60 mt-8 text-center italic font-light"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              *Hours may vary on holidays
            </p>
          </motion.div>

          {/* Pricing Table */}
          <Pricing />
        </div>
      </div>
    </section>
  );
};

export default Hours;
