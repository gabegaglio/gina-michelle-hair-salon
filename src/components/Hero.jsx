import { motion } from "framer-motion";

const heroImage = `${import.meta.env.BASE_URL}salon-hero.jpg`;

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative text-white min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Blurred background image */}
      <div
        className="absolute inset-0 -m-12 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "blur(8px) brightness(0.65)",
        }}
        aria-hidden
      />

      {/* Navy tint overlay for extra legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0a1f3d]/60 via-[#1e3a5f]/55 to-[#0a1f3d]/75"
        aria-hidden
      />

      {/* Content */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1
            className="text-7xl md:text-9xl font-normal mb-4 leading-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.55)]"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Gina Michele
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl tracking-[0.3em] uppercase font-light text-white/95"
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
            className="mt-8 mx-auto w-24 h-0.5 bg-white/80"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 text-sm md:text-base text-white/80 font-light tracking-widest uppercase"
          >
            Staten Island, NY
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
