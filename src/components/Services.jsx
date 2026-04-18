import { motion } from "framer-motion";
import { FaCut, FaPalette, FaUser } from "react-icons/fa";

const services = [
  {
    name: "Haircuts",
    description: "Professional haircuts tailored to your style",
    icon: FaCut,
  },
  {
    name: "Highlights",
    description: "Beautiful color highlights to enhance your look",
    icon: FaPalette,
  },
  {
    name: "Shaves",
    description: "Classic straight razor shaves for a smooth finish",
    icon: FaUser,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-[#f8fafc] relative overflow-hidden"
    >
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
          Our Services
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-24 h-0.5 bg-[#1e3a5f] mb-16"
        ></motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white border border-[#1e3a5f]/10 p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#1e3a5f]/10 rounded-full">
                  <service.icon className="text-5xl text-[#1e3a5f]" />
                </div>
              </div>
              <h3
                className="text-2xl font-normal mb-4 text-[#1e3a5f]"
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {service.name}
              </h3>
              <p
                className="text-[#1e3a5f]/70 leading-relaxed font-light"
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
