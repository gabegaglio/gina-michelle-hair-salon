import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    index: "01",
    name: "Haircuts",
    tagline: "Cuts, blowouts & finishing",
    prices: [
      { min: 25, max: 30, label: "Boys–men" },
      { min: 40, max: 60, label: "Women's (long hair)" },
      { min: 45, max: 60, label: "Wash & blowout" },
    ],
  },
  {
    index: "02",
    name: "Highlights",
    tagline: "Color that elevates",
    prices: [
      { min: 100, max: 120, label: "All color services" },
      { min: 180, max: 220, label: "Half head highlight" },
      { min: 250, max: 350, label: "Full head highlight" },
    ],
    featured: true,
  },
  {
    index: "03",
    name: "Shaves",
    tagline: "Classic. Clean. Refined.",
    prices: [
      { min: 25, max: 30, label: "Beard trim & shave" },
      { min: 30, max: 35, label: "Facial shave" },
      { min: 60, max: 70, label: "Men's hair color" },
    ],
  },
];

const fontSans = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const fontSerif = { fontFamily: "'Playfair Display', serif" };

const TiltCard = ({ service, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isFeatured = service.featured;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={`group relative h-full ${
        isFeatured ? "md:-translate-y-6 md:scale-[1.03]" : ""
      }`}
    >
      {/* Card */}
      <div
        className={`relative overflow-hidden rounded-[2rem] p-10 md:p-12 h-full flex flex-col transition-all duration-500 ${
          isFeatured
            ? "bg-[#1e3a5f] text-white shadow-2xl shadow-[#1e3a5f]/30"
            : "bg-white border border-[#1e3a5f]/10 shadow-md hover:shadow-xl"
        }`}
      >
        {/* Decorative corner accent */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-70 ${
            isFeatured ? "bg-white/20" : "bg-[#1e3a5f]/10"
          }`}
        />

        {/* Number + Title row */}
        <div className="relative z-10 flex items-baseline gap-5 mb-3">
          <span
            className={`text-5xl md:text-6xl leading-none font-semibold tracking-tight transition-colors duration-500 ${
              isFeatured
                ? "text-white/30 group-hover:text-white/60"
                : "text-[#1e3a5f]/25 group-hover:text-[#1e3a5f]/60"
            }`}
            style={{
              ...fontSerif,
              WebkitTextStroke: isFeatured
                ? "1px rgba(255,255,255,0.4)"
                : "1px rgba(30,58,95,0.35)",
            }}
          >
            {service.index}
          </span>
          <h3
            className={`text-4xl md:text-5xl font-normal tracking-tight leading-none ${
              isFeatured ? "text-white" : "text-[#1e3a5f]"
            }`}
            style={fontSerif}
          >
            {service.name}
          </h3>
        </div>

        {/* Tagline */}
        <p
          className={`relative z-10 italic text-sm md:text-base mb-6 font-light ${
            isFeatured ? "text-white/70" : "text-[#1e3a5f]/60"
          }`}
          style={fontSerif}
        >
          {service.tagline}
        </p>

        {/* Price block — sits under tagline; spacer fills below */}
        <div
          className={`relative z-10 flex items-end justify-between gap-4 pt-6 border-t ${
            isFeatured ? "border-white/15" : "border-[#1e3a5f]/10"
          }`}
        >
          <div className="min-w-0 flex-1">
            <p
              className={`text-[10px] uppercase tracking-[0.2em] font-light mb-2 ${
                isFeatured ? "text-white/60" : "text-[#1e3a5f]/50"
              }`}
              style={fontSans}
            >
              Starting at
            </p>
            <div className="space-y-1.5">
              {service.prices.map((p, i) => {
                const range =
                  p.min != null && p.max != null
                    ? p.min === p.max
                      ? `$${p.min}`
                      : `$${p.min}–$${p.max}`
                    : `$${p.amount}`;
                return (
                  <div key={i} className="flex items-baseline gap-2 flex-wrap">
                    <span
                      className={`text-2xl md:text-3xl font-normal leading-none ${
                        isFeatured ? "text-white" : "text-[#1e3a5f]"
                      }`}
                      style={fontSerif}
                    >
                      {range}
                    </span>
                    <span
                      className={`text-xs md:text-sm italic font-light ${
                        isFeatured ? "text-white/60" : "text-[#1e3a5f]/55"
                      }`}
                      style={fontSerif}
                    >
                      {p.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
            className={`shrink-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-light pb-1 border-b self-end ${
              isFeatured
                ? "text-white border-white/40 hover:border-white"
                : "text-[#1e3a5f] border-[#1e3a5f]/30 hover:border-[#1e3a5f]"
            }`}
            style={fontSans}
          >
            Book
            <span aria-hidden>→</span>
          </motion.a>
        </div>

        {/* Animated line + flex fill below prices */}
        <div className="relative z-10 mt-6 h-px w-full overflow-hidden flex-shrink-0">
          <div
            className={`absolute inset-0 ${
              isFeatured ? "bg-white/15" : "bg-[#1e3a5f]/10"
            }`}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 + 0.4, duration: 0.8 }}
            style={{ transformOrigin: "left" }}
            className={`absolute inset-0 ${
              isFeatured ? "bg-white" : "bg-[#1e3a5f]"
            } w-1/3 group-hover:w-full transition-all duration-700`}
          />
        </div>

        <div className="flex-grow min-h-0" aria-hidden />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-28 md:py-36 bg-[#f8fafc] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-[#1e3a5f]/60 font-light mb-4"
            style={fontSans}
          >
            — What We Do —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-normal text-[#1e3a5f] leading-tight"
            style={fontSerif}
          >
            Our <em className="italic font-light">Services</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-[#1e3a5f]/60 font-light max-w-xl mx-auto"
            style={fontSans}
          >
            Three decades of craft, distilled into a focused menu of signature
            services.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch">
          {services.map((service, i) => (
            <TiltCard key={service.name} service={service} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#1e3a5f]/50 font-light"
            style={fontSans}
          >
            See full menu below ↓
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
