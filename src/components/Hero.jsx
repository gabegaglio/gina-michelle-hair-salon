import { motion } from "framer-motion";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../socialLinks";
import Logo from "./Logo";

const heroImage = `${import.meta.env.BASE_URL}salon-hero.jpg`;

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative text-white min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
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

      {/* Navy tint overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0a1f3d]/60 via-[#1e3a5f]/55 to-[#0a1f3d]/75"
        aria-hidden
      />

      {/* Mobile only: logo baked into background behind copy */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] flex md:hidden items-center justify-center px-6"
        aria-hidden
      >
        <Logo
          onDark
          className="h-[clamp(7rem,42vmin,14rem)] w-auto max-w-[min(88vw,18rem)] opacity-[0.16] saturate-75"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left: copy (full width on mobile = single column over watermark) */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left relative"
          >
            <h1
              id="hero-heading"
              className="text-[clamp(4rem,11vw,8rem)] md:text-[clamp(3.5rem,6vw,7rem)] lg:text-[clamp(4rem,7vw,8rem)] font-normal mb-4 leading-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.55)]"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Gina Michele
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
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
              transition={{ delay: 0.55, duration: 0.8 }}
              className="mt-8 mx-auto md:mx-0 w-24 h-0.5 bg-white/80 origin-center md:origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 text-sm md:text-base text-white/80 font-light tracking-widest uppercase"
            >
              Staten Island, NY
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="mt-5 text-sm md:text-base font-light tracking-wide text-white/85"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <span className="mx-3 text-white/40" aria-hidden>
                ·
              </span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </motion.p>
          </motion.div>

          {/* Right (md+): larger logo, centered in column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
            className="hidden md:flex justify-center items-center py-2 min-h-0"
          >
            <Logo
              onDark
              className="h-[clamp(18rem,52vmin,40rem)] lg:h-[clamp(20rem,55vmin,44rem)] w-auto max-w-full max-h-[min(82vh,44rem)] object-contain drop-shadow-[0_14px_56px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
