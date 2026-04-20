import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../socialLinks";

const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "9 AM–5 PM" },
  { day: "Wednesday", hours: "9 AM–5 PM" },
  { day: "Thursday", hours: "9 AM–5 PM" },
  { day: "Friday", hours: "9 AM–5 PM" },
  { day: "Saturday", hours: "9 AM–4 PM" },
  { day: "Sunday", hours: "Closed" },
];

const fontSans = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const Contact = () => {
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-normal text-center mb-4 text-[#1e3a5f]"
          style={fontSans}
        >
          Contact Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-24 h-0.5 bg-[#1e3a5f] mb-10"
        />

        {/* Hours first — flat strip, no card; #hours for nav */}
        <motion.div
          id="hours"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-14 md:mb-16 scroll-mt-24 border-y border-[#1e3a5f]/20 py-8"
        >
          <p
            className="text-xs uppercase tracking-[0.35em] text-[#1e3a5f]/55 text-center mb-6 font-light"
            style={fontSans}
          >
            Business hours
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 sm:gap-x-10 md:gap-x-12">
            {hours.map((item) => {
              const isToday = item.day === currentDay;
              return (
                <div
                  key={item.day}
                  className={`min-w-[4.75rem] text-center rounded-md px-2.5 py-2 transition-colors ${
                    isToday
                      ? "bg-[#1e3a5f] text-white shadow-sm"
                      : "text-[#1e3a5f]/75"
                  }`}
                  style={fontSans}
                >
                  <div
                    className={`text-[10px] uppercase tracking-wider mb-1 ${
                      isToday
                        ? "text-white/85 font-medium"
                        : "text-[#1e3a5f]/45"
                    }`}
                  >
                    {item.day.slice(0, 3)}
                  </div>
                  <div
                    className={`text-sm leading-snug ${
                      isToday ? "font-medium text-white" : "font-light"
                    }`}
                  >
                    {item.hours}
                  </div>
                </div>
              );
            })}
          </div>
          <p
            className="text-xs text-[#1e3a5f]/50 mt-6 text-center italic font-light"
            style={fontSans}
          >
            *Hours may vary on holidays
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            id="contact-details"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8 scroll-mt-28"
          >
            <div>
              <h3
                className="text-2xl font-normal mb-4 text-[#1e3a5f]"
                style={fontSans}
              >
                Get in Touch
              </h3>
              <p
                className="text-[#1e3a5f]/70 leading-relaxed font-light"
                style={fontSans}
              >
                Visit us at our location or give us a call to book your
                appointment.
              </p>
            </div>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 p-4 rounded-lg transition-colors bg-white border border-[#1e3a5f]/10 shadow-sm hover:shadow-md"
              >
                <div className="p-3 bg-[#1e3a5f]/10 rounded-full">
                  <FaMapMarkerAlt className="text-xl text-[#1e3a5f]" />
                </div>
                <div>
                  <p
                    className="font-normal text-[#1e3a5f] mb-1"
                    style={fontSans}
                  >
                    Address
                  </p>
                  <p
                    className="text-[#1e3a5f]/70 leading-relaxed font-light"
                    style={fontSans}
                  >
                    1358 Clove Rd
                    <br />
                    Staten Island, NY 10301
                  </p>
                </div>
              </motion.div>
              <motion.a
                href="tel:+19174441914"
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 p-4 rounded-lg transition-colors block bg-white border border-[#1e3a5f]/10 shadow-sm hover:shadow-md"
              >
                <div className="p-3 bg-[#1e3a5f]/10 rounded-full">
                  <FaPhone className="text-xl text-[#1e3a5f]" />
                </div>
                <div>
                  <p
                    className="font-normal text-[#1e3a5f] mb-1"
                    style={fontSans}
                  >
                    Phone
                  </p>
                  <p
                    className="text-[#1e3a5f]/70 font-light"
                    style={fontSans}
                  >
                    (917) 444-1914
                  </p>
                </div>
              </motion.a>
              <div className="flex items-center gap-4 pt-4">
                <motion.a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#1e3a5f]/10 rounded-full hover:bg-[#1e3a5f]/20 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-2xl text-[#1e3a5f]" />
                </motion.a>
                <motion.a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#1e3a5f]/10 rounded-full hover:bg-[#1e3a5f]/20 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-2xl text-[#1e3a5f]" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[#1e3a5f]/10 rounded-2xl p-2 shadow-md overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.1234567890123!2d-74.123456!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24e5e5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s1358%20Clove%20Rd%2C%20Staten%20Island%2C%20NY%2010301!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", borderRadius: "1rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
