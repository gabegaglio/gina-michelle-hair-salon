import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1e3a5f] min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1
            className="text-7xl md:text-9xl font-normal mb-4 leading-tight"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: "#1e3a5f",
            }}
          >
            Gina Michele
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl tracking-[0.3em] uppercase font-light text-[#1e3a5f]"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.3em",
            }}
          >
            Hair Salon
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 mx-auto w-24 h-0.5 bg-[#1e3a5f]"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 text-sm md:text-base text-[#1e3a5f]/70 font-light tracking-widest uppercase"
          >
            Staten Island, NY
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
